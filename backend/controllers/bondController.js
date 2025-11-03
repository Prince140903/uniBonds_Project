const Bond = require('../models/Bond');

// @desc    Get all bonds with filters
// @route   GET /api/bonds
// @access  Public
exports.getBonds = async (req, res, next) => {
  try {
    const {
      rating,
      minCoupon,
      maxCoupon,
      minYield,
      maxYield,
      couponType,
      security,
      listingStatus,
      search,
      sort,
      page = 1,
      limit = 12,
    } = req.query;

    // Build query
    let query = { status: 'active' };

    // Search
    if (search) {
      query.$text = { $search: search };
    }

    // Filters
    if (rating) query.rating = rating;
    if (couponType) query.couponType = couponType;
    if (security) query.security = security;
    if (listingStatus) query.listingStatus = listingStatus;

    if (minCoupon || maxCoupon) {
      query.coupon = {};
      if (minCoupon) query.coupon.$gte = parseFloat(minCoupon);
      if (maxCoupon) query.coupon.$lte = parseFloat(maxCoupon);
    }

    if (minYield || maxYield) {
      query.yieldToMaturity = {};
      if (minYield) query.yieldToMaturity.$gte = parseFloat(minYield);
      if (maxYield) query.yieldToMaturity.$lte = parseFloat(maxYield);
    }

    // Sort
    let sortBy = '-createdAt';
    if (sort === 'coupon_high') sortBy = '-coupon';
    if (sort === 'coupon_low') sortBy = 'coupon';
    if (sort === 'yield_high') sortBy = '-yieldToMaturity';
    if (sort === 'yield_low') sortBy = 'yieldToMaturity';
    if (sort === 'maturity_soon') sortBy = 'maturityDate';
    if (sort === 'maturity_later') sortBy = '-maturityDate';

    // Pagination
    const skip = (page - 1) * limit;

    const bonds = await Bond.find(query)
      .sort(sortBy)
      .limit(limit * 1)
      .skip(skip);

    const count = await Bond.countDocuments(query);

    res.status(200).json({
      success: true,
      count: bonds.length,
      total: count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      data: bonds,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured bonds
// @route   GET /api/bonds/featured
// @access  Public
exports.getFeaturedBonds = async (req, res, next) => {
  try {
    const bonds = await Bond.find({ isFeatured: true, status: 'active' })
      .sort('-createdAt')
      .limit(6);

    res.status(200).json({
      success: true,
      count: bonds.length,
      data: bonds,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single bond by ID or slug
// @route   GET /api/bonds/:id
// @access  Public
exports.getBond = async (req, res, next) => {
  try {
    let bond;

    // Check if it's an ObjectId or slug
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      bond = await Bond.findById(req.params.id);
    } else {
      bond = await Bond.findOne({ slug: req.params.id });
    }

    if (!bond) {
      return res.status(404).json({
        success: false,
        message: 'Bond not found',
      });
    }

    // Increment view count
    bond.views += 1;
    await bond.save();

    res.status(200).json({
      success: true,
      data: bond,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new bond
// @route   POST /api/bonds
// @access  Private/Admin
exports.createBond = async (req, res, next) => {
  try {
    const bond = await Bond.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Bond created successfully',
      data: bond,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update bond
// @route   PUT /api/bonds/:id
// @access  Private/Admin
exports.updateBond = async (req, res, next) => {
  try {
    const bond = await Bond.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bond) {
      return res.status(404).json({
        success: false,
        message: 'Bond not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bond updated successfully',
      data: bond,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete bond
// @route   DELETE /api/bonds/:id
// @access  Private/Admin
exports.deleteBond = async (req, res, next) => {
  try {
    const bond = await Bond.findByIdAndDelete(req.params.id);

    if (!bond) {
      return res.status(404).json({
        success: false,
        message: 'Bond not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bond deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get bond statistics
// @route   GET /api/bonds/stats/summary
// @access  Public
exports.getBondStats = async (req, res, next) => {
  try {
    const totalBonds = await Bond.countDocuments({ status: 'active' });
    const avgCoupon = await Bond.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: null, avgCoupon: { $avg: '$coupon' } } },
    ]);
    
    const ratingDistribution = await Bond.aggregate([
      { $match: { status: 'active' } },
      { $group: { _id: '$rating', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalBonds,
        avgCoupon: avgCoupon[0]?.avgCoupon.toFixed(2) || 0,
        ratingDistribution,
      },
    });
  } catch (error) {
    next(error);
  }
};

