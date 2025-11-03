const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Bond = require("../models/Bond");
require("dotenv").config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/unibonds";

async function seedBonds() {
  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB");

    // Read bonds data
    const bondsPath = path.join(__dirname, "../data/bonds.json");
    const bondsData = JSON.parse(fs.readFileSync(bondsPath, "utf-8"));

    console.log(`\n📊 Found ${bondsData.length} bonds to seed`);

    // Drop the collection to remove all existing data and indexes
    // This ensures we start with a clean schema (removes old indexes like 'slug')
    try {
      const existingCount = await Bond.countDocuments();
      if (existingCount > 0) {
        console.log(`\n⚠️  Found ${existingCount} existing bonds in database`);
      }
      console.log("🔄 Dropping bonds collection to clear data and indexes...");
      await Bond.collection.drop();
      console.log("✅ Bonds collection dropped (all indexes cleared)");
    } catch (error) {
      // Collection doesn't exist yet, which is fine
      if (error.code === 26) {
        console.log("📝 Creating new bonds collection...");
      } else {
        throw error;
      }
    }

    // Insert bonds
    console.log("\n📥 Inserting bonds into database...");
    const result = await Bond.insertMany(bondsData, { ordered: false });
    console.log(`✅ Successfully inserted ${result.length} bonds`);

    // Display summary
    const summary = await Bond.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
          avgYield: { $avg: "$yield" },
          avgCoupon: { $avg: "$coupon" },
        },
      },
      { $sort: { count: -1 } },
    ]);

    console.log("\n📈 Bond Summary by Type:");
    console.log("─".repeat(60));
    summary.forEach((item) => {
      console.log(
        `${item._id.padEnd(15)} | Count: ${String(item.count).padStart(
          3
        )} | Avg Yield: ${item.avgYield.toFixed(
          2
        )}% | Avg Coupon: ${item.avgCoupon.toFixed(2)}%`
      );
    });
    console.log("─".repeat(60));

    // Rating summary
    const ratingSummary = await Bond.aggregate([
      {
        $group: {
          _id: "$rating",
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    console.log("\n🏆 Bond Summary by Rating:");
    console.log("─".repeat(30));
    ratingSummary.forEach((item) => {
      console.log(
        `${item._id.padEnd(5)} | Count: ${String(item.count).padStart(3)}`
      );
    });
    console.log("─".repeat(30));

    console.log("\n✅ Database seeding completed successfully!");
  } catch (error) {
    console.error("\n❌ Error seeding bonds:", error.message);

    // If it's a bulk write error, show duplicate errors
    if (error.name === "BulkWriteError" && error.writeErrors) {
      console.log("\n⚠️  Some bonds already exist (skipped duplicates):");
      error.writeErrors.forEach((err, index) => {
        if (err.code === 11000) {
          console.log(
            `  - Duplicate: ${err.op?.bondId || err.op?.isin || "Unknown"}`
          );
        }
      });
    }
  } finally {
    await mongoose.connection.close();
    console.log("\n🔌 Database connection closed");
    process.exit(0);
  }
}

// Run the seed function
seedBonds();
