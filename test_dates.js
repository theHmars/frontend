import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = '/home/phxlm/Work/websites/theHmars/content/markdown';
const categories = ['local', 'national', 'global'];
const posts = [];

for (const cat of categories) {
    const dirPath = path.join(contentDir, cat);
    if (!fs.existsSync(dirPath)) continue;
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
    for (const file of files) {
        const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
        const { data } = matter(content);
        if (data.date) {
            posts.push({ title: data.title, date: new Date(data.date), category: data.category, region: data.region, hasImage: !!data.image });
        }
    }
}

posts.sort((a, b) => b.date - a.date);

console.log("TOP 10 LATEST OVERALL:");
posts.slice(0, 10).forEach(p => console.log(`- ${p.date.toISOString().split('T')[0]} [${p.category}] ${p.title} (Img: ${p.hasImage})`));

console.log("\nTOP 5 INTERNATIONAL:");
posts.filter(p => p.category === 'International' && p.hasImage).slice(0, 5).forEach(p => console.log(`- ${p.date.toISOString().split('T')[0]} [${p.category}] ${p.title}`));

console.log("\nTOP 5 NATIONAL:");
posts.filter(p => p.category === 'National' && p.hasImage).slice(0, 5).forEach(p => console.log(`- ${p.date.toISOString().split('T')[0]} [${p.category}] ${p.title}`));

console.log("\nTOP 5 LOCAL:");
posts.filter(p => p.category === 'Local' && p.hasImage).slice(0, 5).forEach(p => console.log(`- ${p.date.toISOString().split('T')[0]} [${p.category}] ${p.title}`));

