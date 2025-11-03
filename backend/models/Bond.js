const mongoose = require('mongoose');

const bondSchema = new mongoose.Schema(
  {
    bondId: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
    issuer: {
      type: String,
      required: true,
      trim: true,
    },
    isin: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['G-Sec', 'PSU', 'NBFC', 'Corporate', 'Municipal', 'Tax-Free'],
      index: true,
    },
    coupon: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    yield: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    rating: {
      type: String,
      required: true,
      enum: ['SOV', 'AAA', 'AA+', 'AA', 'AA-', 'A+', 'A', 'A-', 'BBB+', 'BBB', 'BBB-'],
      index: true,
    },
    ratingAgency: {
      type: String,
      required: true,
      trim: true,
    },
    maturity: {
      type: Date,
      required: true,
      index: true,
    },
    minInvestment: {
      type: Number,
      required: true,
      min: 0,
    },
    faceValue: {
      type: Number,
      required: true,
      min: 0,
    },
    tradable: {
      type: Boolean,
      default: true,
      index: true,
    },
    frequency: {
      type: String,
      required: true,
      enum: ['Monthly', 'Quarterly', 'Semi-Annual', 'Annual', 'Cumulative'],
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt automatically
  }
);

// Indexes for common queries
bondSchema.index({ type: 1, rating: 1 });
bondSchema.index({ maturity: 1, isActive: 1 });
bondSchema.index({ yield: -1, isActive: 1 });

module.exports = mongoose.model('Bond', bondSchema);
