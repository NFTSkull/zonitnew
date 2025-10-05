const fs = require('fs');
const path = require('path');

function fixImagesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove Image import
  content = content.replace(/import Image from ['"]next\/image['"];?\n?/g, '');
  
  // Replace Image tags with img tags, handling different patterns
  content = content.replace(/<Image\s+([^>]*?)>/g, (match, attributes) => {
    // Remove Next.js specific attributes
    let cleanAttributes = attributes
      .replace(/\s+fill\s*/g, ' ')
      .replace(/\s+priority\s*/g, ' ')
      .replace(/\s+unoptimized\s*/g, ' ')
      .replace(/\s+sizes="[^"]*"\s*/g, ' ')
      .replace(/\s+quality=\{[^}]*\}\s*/g, ' ')
      .replace(/\s+quality=\d+\s*/g, ' ')
      .replace(/\s+placeholder="[^"]*"\s*/g, ' ')
      .replace(/\s+blurDataURL="[^"]*"\s*/g, ' ')
      .replace(/\s+loading="[^"]*"\s*/g, ' ')
      .trim();
    
    return `<img ${cleanAttributes}>`;
  });
  
  // Replace closing Image tags
  content = content.replace(/<\/Image>/g, '</img>');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImagesInFile(filePath);
    }
  });
}

// Start from src directory
walkDir('./src');
console.log('All Image components have been converted to img tags!');
