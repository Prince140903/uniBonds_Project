const Bond = require('../models/Bond');
const mongoose = require('mongoose');

// Get all bonds with optional filters
exports.getAllBonds = async (req, res) => {
  try {
    const {
      type,
      rating,
      minYield,
      maxYield,
      tradable,
      isActive,
      minMaturity,
      maxMaturity,
      search,
      page = 1,
      limit = 20,
      sortBy = 'yield',
      sortOrder = 'desc',
    } = req.query;

    // Build filter object
    const filter = {};

    if (type) filter.type = type;
    if (rating) filter.rating = rating;
    if (tradable !== undefined) filter.tradable = tradable === 'true';
    if (isActive !== undefined) filter.isActive = isActive === 'true';
    if (minYield) filter.yield = { ...filter.yield, $gte: parseFloat(minYield) };
    if (maxYield) filter.yield = { ...filter.yield, $lte: parseFloat(maxYield) };
    if (minMaturity) filter.maturity = { ...filter.maturity, $gte: new Date(minMaturity) };
    if (maxMaturity) filter.maturity = { ...filter.maturity, $lte: new Date(maxMaturity) };

    // Search filter (issuer or ISIN)
    if (search) {
      filter.$or = [
        { issuer: { $regex: search, $options: 'i' } },
        { isin: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // Sort options
    const sortOptions = {};
    const validSortFields = ['yield', 'coupon', 'maturity', 'bondId', 'rating', 'createdAt'];
    const sortField = validSortFields.includes(sortBy) ? sortBy : 'yield';
    sortOptions[sortField] = sortOrder === 'asc' ? 1 : -1;

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query
    const bonds = await Bond.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    // Get total count for pagination
    const total = await Bond.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: bonds,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bonds',
      error: error.message,
    });
  }
};

// Get bond by ID
exports.getBondById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: 'Bond ID is required',
      });
    }

    // Build query - try numeric bondId first, then MongoDB _id
    const numericId = parseInt(id);
    let query;
    
    if (!isNaN(numericId) && numericId.toString() === id) {
      // ID is a pure number, search by bondId first
      query = { bondId: numericId };
    } else if (mongoose.Types.ObjectId.isValid(id)) {
      // ID is a valid MongoDB ObjectId
      query = {
        $or: [
          { bondId: numericId },
          { _id: new mongoose.Types.ObjectId(id) }
        ]
      };
    } else {
      // Try both formats
      query = {
        $or: [
          { bondId: numericId },
          { _id: id }
        ]
      };
    }

    const bond = await Bond.findOne(query).lean();

    if (!bond) {
      return res.status(404).json({
        success: false,
        message: 'Bond not found',
      });
    }

    res.status(200).json({
      success: true,
      data: bond,
    });
  } catch (error) {
    console.error('Error fetching bond by ID:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching bond',
      error: error.message,
    });
  }
};

// Get bonds by type
exports.getBondsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const bonds = await Bond.find({ type, isActive: true })
      .sort({ yield: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Bond.countDocuments({ type, isActive: true });

    res.status(200).json({
      success: true,
      data: bonds,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bonds by type',
      error: error.message,
    });
  }
};

// Get bonds by rating
exports.getBondsByRating = async (req, res) => {
  try {
    const { rating } = req.params;
    const { page = 1, limit = 20 } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const bonds = await Bond.find({ rating, isActive: true })
      .sort({ yield: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const total = await Bond.countDocuments({ rating, isActive: true });

    res.status(200).json({
      success: true,
      data: bonds,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching bonds by rating',
      error: error.message,
    });
  }
};
