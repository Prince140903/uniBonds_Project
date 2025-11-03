const fs = require('fs');
const path = require('path');

// Directory containing bond files
const bondsDir = path.join(__dirname, '../../public_html/bonds');

// Get all .txt files
const files = fs.readdirSync(bondsDir).filter(file => file.endsWith('.txt')).sort((a, b) => {
  const numA = parseInt(a.replace('.txt', ''));
  const numB = parseInt(b.replace('.txt', ''));
  return numA - numB;
});

const bonds = [];

files.forEach(file => {
  try {
    const filePath = path.join(bondsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract bond JSON from the file
    // Look for the bond object pattern: {"bond":{"id":...
    const bondMatch = content.match(/\{"bond":\{[^}]+\}[^}]*\}/);
    
    if (bondMatch) {
      try {
        const bondData = JSON.parse(bondMatch[0]);
        const bond = bondData.bond;
        
        // Convert to MongoDB format
        const mongoBond = {
          bondId: parseInt(bond.id),
          issuer: bond.issuer,
          isin: bond.isin,
          type: bond.type,
          coupon: bond.coupon,
          yield: bond.yield,
          rating: bond.rating,
          ratingAgency: bond.ratingAgency,
          maturity: new Date(bond.maturity),
          minInvestment: bond.minInvestment,
          faceValue: bond.faceValue,
          tradable: bond.tradable,
          frequency: bond.frequency,
          description: bond.description,
          createdAt: new Date(),
          updatedAt: new Date(),
          isActive: true
        };
        
        bonds.push(mongoBond);
        console.log(`✓ Extracted bond ${bond.id}: ${bond.issuer}`);
      } catch (e) {
        console.error(`✗ Error parsing JSON from ${file}:`, e.message);
      }
    } else {
      console.warn(`⚠ No bond data found in ${file}`);
    }
  } catch (e) {
    console.error(`✗ Error reading ${file}:`, e.message);
  }
});

// Write to MongoDB import file
const outputPath = path.join(__dirname, '../../backend/data/bonds.json');
const outputDir = path.dirname(outputPath);

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(bonds, null, 2));

console.log(`\n✅ Extracted ${bonds.length} bonds`);
console.log(`📄 Output saved to: ${outputPath}`);
console.log(`\nTo import into MongoDB, use:`);
console.log(`mongoimport --db unibonds --collection bonds --file ${outputPath} --jsonArray`);

