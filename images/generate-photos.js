const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, 'images');
const OUTPUT = path.join(__dirname, 'photos.json');

const files = fs.readdirSync(IMAGE_DIR)
  .filter(f => f.toLowerCase().endsWith('.jpeg'))
  .sort();

const photos = files.map(file => ({
  src: `images/${file}`,
  title: file.replace('.jpeg', '').replace(/-/g, ' '),
  description: ''
}));

fs.writeFileSync(OUTPUT, JSON.stringify(photos, null, 2));

console.log(`Generated photos.json with ${photos.length} images`);
