// Retro Cursor Trail
document.addEventListener('mousemove', function(e) {
  const star = document.createElement('span');
  star.innerHTML = '★';
  star.style.position = 'fixed';
  star.style.left = e.clientX + 'px';
  star.style.top = e.clientY + 'px';
  star.style.color = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'][Math.floor(Math.random() * 6)];
  star.style.pointerEvents = 'none';
  star.style.zIndex = '9999';
  star.style.fontSize = (Math.random() * 20 + 10) + 'px';
  
  // Reset styles inherited from "body > *"
  star.style.background = 'none';
  star.style.border = 'none';
  star.style.boxShadow = 'none';
  star.style.padding = '0';
  star.style.margin = '0';
  
  document.body.appendChild(star);
  
  setTimeout(() => {
    star.style.transition = 'opacity 1s, transform 1s';
    star.style.opacity = '0';
    star.style.transform = 'translateY(50px) rotate(360deg)';
    setTimeout(() => star.remove(), 1000);
  }, 100);
});
