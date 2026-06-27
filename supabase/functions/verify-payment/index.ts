import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

async function verifySignature(orderId: string, paymentId: string, signature: string, secret: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(orderId + "|" + paymentId);
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signatureBuffer = await crypto.subtle.sign("HMAC", key, data);
  const signatureHex = Array.from(new Uint8Array(signatureBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  return signatureHex === signature;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload = await req.json();
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      amount,
      display_name,
      is_anonymous,
      message,
      user_id
    } = payload;

    const secret = Deno.env.get('RAZORPAY_KEY_SECRET');
    if (!secret) {
      console.error('Razorpay secret not configured in environment');
      return new Response(JSON.stringify({ error: 'Server configuration error', success: false }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const isSignatureValid = await verifySignature(
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature, 
      secret
    );

    if (!isSignatureValid) {
      return new Response(JSON.stringify({ error: 'Invalid signature', success: false }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    // Save to Supabase using REST API directly to avoid package issues
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || Deno.env.get('DB_URL') || '';
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || Deno.env.get('DB_SERVICE_ROLE_KEY') || '';
    
    if (!supabaseUrl || !supabaseServiceKey) {
       return new Response(JSON.stringify({ error: 'Server configuration error', success: false }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const insertRes = await fetch(`${supabaseUrl}/rest/v1/donations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseServiceKey,
        "Authorization": `Bearer ${supabaseServiceKey}`,
        "Prefer": "return=representation"
      },
      body: JSON.stringify({
        amount: amount, 
        display_name: is_anonymous ? null : display_name, 
        is_anonymous: is_anonymous, 
        message: message, 
        user_id: user_id || null 
      })
    });

    if (!insertRes.ok) {
      const errorText = await insertRes.text();
      console.error("Supabase REST error:", errorText);
      return new Response(JSON.stringify({ error: 'Failed to record donation', details: errorText, success: false }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (error: any) {
    console.error("Handler error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
