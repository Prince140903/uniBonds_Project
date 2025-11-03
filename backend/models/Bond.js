const mongoose = require('mongoose');
const slugify = require('slugify');

const bondSchema = new mongoose.Schema(
  {
    // Basic Information
    issuerName: {
      type: String,
      required: [true, 'Please provide issuer name'],
      trim: true,
    },
    securityName: {
      type: String,
      required: [true, 'Please provide security name'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    isin: {
      type: String,
      required: [true, 'Please provide ISIN'],
      unique: true,
      uppercase: true,
      trim: true,
    },
    
    // Financial Details
    faceValue: {
      type: Number,
      required: [true, 'Please provide face value'],
    },
    coupon: {
      type: Number,
      required: [true, 'Please provide coupon rate'],
    },
    couponType: {
      type: String,
      enum: ['Fixed', 'Floating', 'Zero Coupon', 'Step Up', 'Step Down'],
      default: 'Fixed',
    },
    minInvestment: {
      type: Number,
      default: 10000,
    },
    currentPrice: {
      type: Number,
      required: true,
    },
    yieldToMaturity: {
      type: Number,
    },
    
    // Dates
    callDate: {
      type: Date,
    },
    putDate: {
      type: Date,
    },
    nextPaymentDate: {
      type: Date,
    },
    allotmentDate: {
      type: Date,
      required: true,
    },
    maturityDate: {
      type: Date,
      required: [true, 'Please provide maturity date'],
    },
    
    // Tenure
    totalTenure: {
      type: Number, // in months
      required: true,
    },
    remainingTenure: {
      type: Number, // in months
    },
    
    // Issue Details
    modeOfIssue: {
      type: String,
      enum: ['Public', 'Private Placement', 'Rights Issue'],
      default: 'Public',
    },
    ipFrequency: {
      type: String,
      enum: ['Annual', 'Semi-Annual', 'Quarterly', 'Monthly', 'At Maturity'],
      default: 'Annual',
    },
    
    // Taxation
    taxation: {
      type: String,
      enum: ['Taxable', 'Tax-Free', 'Tax-Deferred'],
      default: 'Taxable',
    },
    
    // Security Details
    security: {
      type: String,
      enum: ['Secured', 'Unsecured'],
      default: 'Unsecured',
    },
    seniority: {
      type: String,
      enum: ['Senior', 'Subordinated', 'Junior'],
      default: 'Senior',
    },
    
    // Listing
    listingStatus: {
      type: String,
      enum: ['Listed', 'Unlisted', 'To be Listed'],
      default: 'Listed',
    },
    exchange: {
      type: String,
      enum: ['NSE', 'BSE', 'Both', 'Not Listed'],
    },
    
    // Rating
    rating: {
      type: String,
      required: true,
    },
    ratingAgency: {
      type: String,
      required: true,
    },
    ratingDate: {
      type: Date,
      required: true,
    },
    
    // Trustee
    trustee: {
      type: String,
    },
    
    // About Issuer
    aboutIssuer: {
      type: String,
      required: [true, 'Please provide information about the issuer'],
    },
    
    // Documents
    documents: {
      ratingRational: {
        type: String, // URL or file path
      },
      imKid: {
        type: String, // Information Memorandum/KID
      },
      synopsis: {
        type: String,
      },
    },
    
    // Financials (Array of financial data)
    financials: [{
      year: String,
      revenue: Number,
      netProfit: Number,
      totalAssets: Number,
      totalLiabilities: Number,
      equity: Number,
      eps: Number,
      debtToEquity: Number,
    }],
    
    // Status
    status: {
      type: String,
      enum: ['active', 'inactive', 'matured', 'called'],
      default: 'active',
    },
    
    // Featured
    isFeatured: {
      type: Boolean,
      default: false,
    },
    
    // View Count
    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug before saving
bondSchema.pre('save', function (next) {
  if (this.isModified('securityName')) {
    this.slug = slugify(this.securityName, { lower: true, strict: true });
  }
  
  // Calculate remaining tenure
  if (this.maturityDate) {
    const now = new Date();
    const maturity = new Date(this.maturityDate);
    const diffTime = maturity - now;
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    this.remainingTenure = diffMonths > 0 ? diffMonths : 0;
  }
  
  next();
});

// Index for search
bondSchema.index({ issuerName: 'text', securityName: 'text', isin: 'text' });

module.exports = mongoose.model('Bond', bondSchema);

