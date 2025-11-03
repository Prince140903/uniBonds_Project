const BondIPO = require('../models/BondIPO');

// @desc    Get all bond IPOs
// @route   GET /api/bond-ipos
// @access  Public
exports.getBondIPOs = async (req, res, next) => {
  try {
    const { status, search, sort, page = 1, limit = 12 } = req.query;

    // Build query
    let query = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$text = { $search: search };
    }

    // Sort
    let sortBy = '-createdAt';
    if (sort === 'open_date') sortBy = 'openDate';
    if (sort === 'close_date') sortBy = 'closeDate';
    if (sort === 'coupon_high') sortBy = '-couponRate';
    if (sort === 'coupon_low') sortBy = 'couponRate';

    // Pagination
    const skip = (page - 1) * limit;

    const bondIPOs = await BondIPO.find(query)
      .sort(sortBy)
      .limit(limit * 1)
      .skip(skip);

    const count = await BondIPO.countDocuments(query);

    res.status(200).json({
      success: true,
      count: bondIPOs.length,
      total: count,
      pages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      data: bondIPOs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured/active bond IPOs
// @route   GET /api/bond-ipos/featured
// @access  Public
exports.getFeaturedBondIPOs = async (req, res, next) => {
  try {
    const bondIPOs = await BondIPO.find({
      status: { $in: ['open', 'upcoming'] },
      isFeatured: true,
    })
      .sort('-createdAt')
      .limit(6);

    res.status(200).json({
      success: true,
      count: bondIPOs.length,
      data: bondIPOs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get open bond IPOs
// @route   GET /api/bond-ipos/open
// @access  Public
exports.getOpenBondIPOs = async (req, res, next) => {
  try {
    const bondIPOs = await BondIPO.find({ status: 'open' })
      .sort('closeDate')
      .limit(10);

    res.status(200).json({
      success: true,
      count: bondIPOs.length,
      data: bondIPOs,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single bond IPO
// @route   GET /api/bond-ipos/:id
// @access  Public
exports.getBondIPO = async (req, res, next) => {
  try {
    let bondIPO;

    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      bondIPO = await BondIPO.findById(req.params.id);
    } else {
      bondIPO = await BondIPO.findOne({ slug: req.params.id });
    }

    if (!bondIPO) {
      return res.status(404).json({
        success: false,
        message: 'Bond IPO not found',
      });
    }

    // Increment view count
    bondIPO.views += 1;
    await bondIPO.save();

    res.status(200).json({
      success: true,
      data: bondIPO,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new bond IPO
// @route   POST /api/bond-ipos
// @access  Private/Admin
exports.createBondIPO = async (req, res, next) => {
  try {
    const bondIPO = await BondIPO.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Bond IPO created successfully',
      data: bondIPO,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update bond IPO
// @route   PUT /api/bond-ipos/:id
// @access  Private/Admin
exports.updateBondIPO = async (req, res, next) => {
  try {
    const bondIPO = await BondIPO.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bondIPO) {
      return res.status(404).json({
        success: false,
        message: 'Bond IPO not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bond IPO updated successfully',
      data: bondIPO,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete bond IPO
// @route   DELETE /api/bond-ipos/:id
// @access  Private/Admin
exports.deleteBondIPO = async (req, res, next) => {
  try {
    const bondIPO = await BondIPO.findByIdAndDelete(req.params.id);

    if (!bondIPO) {
      return res.status(404).json({
        success: false,
        message: 'Bond IPO not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bond IPO deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

