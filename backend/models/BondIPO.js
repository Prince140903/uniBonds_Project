const mongoose = require('mongoose');
const slugify = require('slugify');

const bondIPOSchema = new mongoose.Schema(
  {
    // Basic Information
    issuerName: {
      type: String,
      required: [true, 'Please provide issuer name'],
      trim: true,
    },
    issueName: {
      type: String,
      required: [true, 'Please provide issue name'],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    
    // Issue Details
    issueSize: {
      type: Number,
      required: [true, 'Please provide issue size'],
    },
    faceValue: {
      type: Number,
      required: [true, 'Please provide face value'],
    },
    couponRate: {
      type: Number,
      required: [true, 'Please provide coupon rate'],
    },
    
    // Issue Period
    openDate: {
      type: Date,
      required: [true, 'Please provide open date'],
    },
    closeDate: {
      type: Date,
      required: [true, 'Please provide close date'],
    },
    allotmentDate: {
      type: Date,
    },
    maturityDate: {
      type: Date,
      required: [true, 'Please provide maturity date'],
    },
    
    // Investment Details
    minInvestment: {
      type: Number,
      required: [true, 'Please provide minimum investment'],
    },
    maxInvestment: {
      type: Number,
    },
    applicationMultiple: {
      type: Number,
      default: 1,
    },
    
    // Ratings
    rating: {
      type: String,
      required: true,
    },
    ratingAgency: {
      type: String,
      required: true,
    },
    
    // Terms
    tenure: {
      type: Number, // in months
      required: true,
    },
    interestPaymentFrequency: {
      type: String,
      enum: ['Annual', 'Semi-Annual', 'Quarterly', 'Monthly', 'At Maturity'],
      default: 'Annual',
    },
    
    // Security
    security: {
      type: String,
      enum: ['Secured', 'Unsecured'],
      default: 'Unsecured',
    },
    
    // About
    aboutIssue: {
      type: String,
      required: true,
    },
    aboutIssuer: {
      type: String,
      required: true,
    },
    
    // Use of Proceeds
    useOfProceeds: {
      type: String,
    },
    
    // Documents
    documents: {
      prospectus: String,
      applicationForm: String,
      ratingRational: String,
      termSheet: String,
    },
    
    // Status
    status: {
      type: String,
      enum: ['upcoming', 'open', 'closed', 'allotted'],
      default: 'upcoming',
    },
    
    // Featured
    isFeatured: {
      type: Boolean,
      default: false,
    },
    
    // Subscription
    subscriptionStatus: {
      type: Number, // times subscribed
      default: 0,
    },
    
    // Views
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
bondIPOSchema.pre('save', function (next) {
  if (this.isModified('issueName')) {
    this.slug = slugify(this.issueName, { lower: true, strict: true });
  }
  
  // Auto-update status based on dates
  const now = new Date();
  const openDate = new Date(this.openDate);
  const closeDate = new Date(this.closeDate);
  
  if (now < openDate) {
    this.status = 'upcoming';
  } else if (now >= openDate && now <= closeDate) {
    this.status = 'open';
  } else if (now > closeDate && !this.allotmentDate) {
    this.status = 'closed';
  } else if (this.allotmentDate) {
    this.status = 'allotted';
  }
  
  next();
});

// Index for search
bondIPOSchema.index({ issuerName: 'text', issueName: 'text' });

module.exports = mongoose.model('BondIPO', bondIPOSchema);

