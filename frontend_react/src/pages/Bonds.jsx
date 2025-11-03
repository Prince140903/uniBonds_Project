import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import apiService from "../services/api";

const Bonds = () => {
  const [filters, setFilters] = useState({
    bondTypes: [],
    ratings: [],
    yieldRange: [5, 15],
    tenureRange: [0, 15],
    tradableOnly: false,
  });
  const [sortBy, setSortBy] = useState("");
  const [bonds, setBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bondTypes = ["G-Sec", "PSU", "NBFC", "Corporate"];
  const ratings = ["SOV", "AAA", "AA+", "AA", "A+"];

  // Fetch bonds from API - initial load
  useEffect(() => {
    fetchBonds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced refetch when filters or sort changes
  useEffect(() => {
    // Skip initial fetch
    if (bonds.length === 0 && loading) return;

    // Debounce API calls to prevent rate limiting
    const timeoutId = setTimeout(() => {
      fetchBonds();
    }, 500); // 500ms debounce delay

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, sortBy]);

  const fetchBonds = async () => {
    try {
      setLoading(true);
      setError(null);

      // Build API filters
      const apiFilters = {
        isActive: true,
        limit: 100, // Get more bonds to filter client-side if needed
      };

      // Add type filter if any selected
      if (filters.bondTypes.length > 0) {
        // API supports single type, so we'll filter client-side for multiple
      }

      // Add rating filter if any selected
      if (filters.ratings.length > 0) {
        // API supports single rating, so we'll filter client-side for multiple
      }

      // Add yield filters
      if (filters.yieldRange[0] > 5) {
        apiFilters.minYield = filters.yieldRange[0];
      }
      if (filters.yieldRange[1] < 15) {
        apiFilters.maxYield = filters.yieldRange[1];
      }

      // Add tradable filter
      if (filters.tradableOnly) {
        apiFilters.tradable = true;
      }

      // Add sort if specified
      if (sortBy) {
        const sortMapping = {
          coupon_high: { sortBy: "coupon", sortOrder: "desc" },
          coupon_low: { sortBy: "coupon", sortOrder: "asc" },
          yield_high: { sortBy: "yield", sortOrder: "desc" },
          yield_low: { sortBy: "yield", sortOrder: "asc" },
          maturity_soon: { sortBy: "maturity", sortOrder: "asc" },
          maturity_later: { sortBy: "maturity", sortOrder: "desc" },
        };
        const sort = sortMapping[sortBy];
        if (sort) {
          apiFilters.sortBy = sort.sortBy;
          apiFilters.sortOrder = sort.sortOrder;
        }
      } else {
        // Default: newest first
        apiFilters.sortBy = "createdAt";
        apiFilters.sortOrder = "desc";
      }

      const response = await apiService.getBonds(apiFilters);

      if (response.success && response.data) {
        setBonds(response.data);
      } else {
        setError("Failed to load bonds");
      }
    } catch (err) {
      console.error("Error fetching bonds:", err);

      // Handle rate limiting specifically
      if (err.message && err.message.includes("429")) {
        setError("Too many requests. Please wait a moment and try again.");
      } else if (err.message && err.message.includes("Too many")) {
        setError("Too many requests. Please wait a moment and try again.");
      } else {
        setError("Failed to load bonds. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Calculate tenure in years for filtering (must be defined before useMemo)
  const calculateTenureYears = (maturityDate, createdAt) => {
    if (!maturityDate || !createdAt) return 0;
    const maturity = new Date(maturityDate);
    const created = new Date(createdAt);
    const diffTime = maturity - created;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
  };

  // Calculate tenure from dates (for display)
  const calculateTenure = (maturityDate) => {
    if (!maturityDate) return "-";
    const maturity = new Date(maturityDate);
    const today = new Date();
    const diffTime = maturity - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "Expired";

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);

    if (years > 0 && months > 0) {
      return `${years}Y ${months}M`;
    } else if (years > 0) {
      return `${years}Y`;
    } else if (months > 0) {
      return `${months}M`;
    }
    return "Less than 1M";
  };

  // Format currency
  const formatCurrency = (amount) => {
    if (!amount) return "₹1.0L";
    if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)}L`;
    }
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Filter and sort bonds client-side
  const filteredAndSortedBonds = useMemo(() => {
    let filtered = [...bonds];

    // Filter by bond types (client-side for multiple selection)
    if (filters.bondTypes.length > 0) {
      filtered = filtered.filter((bond) =>
        filters.bondTypes.includes(bond.type)
      );
    }

    // Filter by ratings (client-side for multiple selection)
    if (filters.ratings.length > 0) {
      filtered = filtered.filter((bond) =>
        filters.ratings.includes(bond.rating)
      );
    }

    // Filter by yield range (client-side)
    filtered = filtered.filter((bond) => {
      const yieldValue = bond.yield || 0;
      return (
        yieldValue >= filters.yieldRange[0] &&
        yieldValue <= filters.yieldRange[1]
      );
    });

    // Filter by tenure range (client-side)
    filtered = filtered.filter((bond) => {
      if (!bond.maturity || !bond.createdAt) return true;
      const tenureYears = calculateTenureYears(bond.maturity, bond.createdAt);
      return (
        tenureYears >= filters.tenureRange[0] &&
        tenureYears <= filters.tenureRange[1]
      );
    });

    // Filter by tradable (already done server-side, but keep for safety)
    if (filters.tradableOnly) {
      filtered = filtered.filter((bond) => bond.tradable === true);
    }

    // Sort bonds
    if (sortBy) {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case "coupon_high":
            return (b.coupon || 0) - (a.coupon || 0);
          case "coupon_low":
            return (a.coupon || 0) - (b.coupon || 0);
          case "yield_high":
            return (b.yield || 0) - (a.yield || 0);
          case "yield_low":
            return (a.yield || 0) - (b.yield || 0);
          case "maturity_soon":
            return new Date(a.maturity || 0) - new Date(b.maturity || 0);
          case "maturity_later":
            return new Date(b.maturity || 0) - new Date(a.maturity || 0);
          default:
            return 0;
        }
      });
    } else {
      // Default: newest first
      filtered.sort((a, b) => {
        const dateA = new Date(a.createdAt || 0);
        const dateB = new Date(b.createdAt || 0);
        return dateB - dateA;
      });
    }

    return filtered;
  }, [bonds, filters, sortBy]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const currentArray = prev[type] || [];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];
      return { ...prev, [type]: newArray };
    });
  };

  const resetFilters = () => {
    setFilters({
      bondTypes: [],
      ratings: [],
      yieldRange: [5, 15],
      tenureRange: [0, 15],
      tradableOnly: false,
    });
    setSortBy("");
  };

  // Error state (only show full page error if no bonds loaded and error exists)
  if (error && bonds.length === 0 && !loading) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            type="button"
            onClick={fetchBonds}
            className="bg-unibonds-orange hover:bg-unibonds-orange/90 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-unibonds-navy mb-3 sm:mb-4">
            Explore <span className="text-unibonds-orange">Bonds</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Discover curated fixed-income investment opportunities
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 sticky top-24 bg-white">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy">
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent h-9 rounded-md px-3 text-unibonds-orange hover:text-unibonds-orange/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-x w-4 h-4 mr-1"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                  Reset
                </button>
              </div>
              <div className="space-y-6">
                {/* Bond Type Filter */}
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold text-unibonds-navy mb-3 block">
                    Bond Type
                  </label>
                  <div className="space-y-2">
                    {bondTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={type}
                          checked={filters.bondTypes.includes(type)}
                          onChange={() => toggleFilter("bondTypes", type)}
                          className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-unibonds-orange checked:border-unibonds-orange"
                        />
                        <label
                          htmlFor={type}
                          className="text-sm cursor-pointer hover:text-unibonds-orange transition-colors"
                        >
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Rating Filter */}
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold text-unibonds-navy mb-3 block">
                    Rating
                  </label>
                  <div className="space-y-2">
                    {ratings.map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id={rating}
                          checked={filters.ratings.includes(rating)}
                          onChange={() => toggleFilter("ratings", rating)}
                          className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-unibonds-orange checked:border-unibonds-orange"
                        />
                        <label
                          htmlFor={rating}
                          className="text-sm cursor-pointer hover:text-unibonds-orange transition-colors"
                        >
                          {rating}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Yield Range */}
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold text-unibonds-navy mb-3 block">
                    Yield Range: {filters.yieldRange[0]}% -{" "}
                    {filters.yieldRange[1]}%
                  </label>
                  <Slider
                    getAriaLabel={() => "Yield range"}
                    value={filters.yieldRange}
                    onChange={(e, newValue) => {
                      setFilters((prev) => ({
                        ...prev,
                        yieldRange: newValue,
                      }));
                    }}
                    valueLabelDisplay="auto"
                    getAriaValueText={(value) => `${value}%`}
                    min={5}
                    max={15}
                    step={0.1}
                    disableSwap
                    sx={{
                      color: "#f97316",
                      height: 8,
                      "& .MuiSlider-thumb": {
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        border: "3px solid #f97316",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "#f97316",
                        border: "none",
                        height: 8,
                        borderRadius: 4,
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "#1e3a8a",
                        height: 8,
                        borderRadius: 4,
                      },
                      "& .MuiSlider-valueLabel": {
                        backgroundColor: "#f97316",
                        color: "white",
                      },
                    }}
                  />
                </div>
                {/* Tenure Range */}
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold text-unibonds-navy mb-3 block">
                    Tenure: {filters.tenureRange[0]}Y - {filters.tenureRange[1]}
                    Y
                  </label>
                  <Slider
                    getAriaLabel={() => "Tenure range"}
                    value={filters.tenureRange}
                    onChange={(e, newValue) => {
                      setFilters((prev) => ({
                        ...prev,
                        tenureRange: newValue,
                      }));
                    }}
                    valueLabelDisplay="auto"
                    getAriaValueText={(value) => `${value}Y`}
                    min={0}
                    max={15}
                    step={1}
                    disableSwap
                    sx={{
                      color: "#f97316",
                      height: 8,
                      "& .MuiSlider-thumb": {
                        width: 20,
                        height: 20,
                        backgroundColor: "white",
                        border: "3px solid #f97316",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      },
                      "& .MuiSlider-track": {
                        backgroundColor: "#f97316",
                        border: "none",
                        height: 8,
                        borderRadius: 4,
                      },
                      "& .MuiSlider-rail": {
                        backgroundColor: "#1e3a8a",
                        height: 8,
                        borderRadius: 4,
                      },
                      "& .MuiSlider-valueLabel": {
                        backgroundColor: "#f97316",
                        color: "white",
                      },
                    }}
                  />
                </div>
                {/* Tradable Only */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="tradable"
                    checked={filters.tradableOnly}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        tradableOnly: e.target.checked,
                      }))
                    }
                    className="h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 checked:bg-unibonds-orange checked:border-unibonds-orange"
                  />
                  <label
                    htmlFor="tradable"
                    className="text-sm cursor-pointer hover:text-unibonds-orange transition-colors"
                  >
                    Tradable Only
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* Bonds Grid */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <p className="text-sm sm:text-base text-gray-600">
                {loading ? (
                  "Loading bonds..."
                ) : (
                  <>
                    Showing
                    <span className="font-semibold text-unibonds-navy">
                      {" "}
                      {filteredAndSortedBonds.length}{" "}
                    </span>
                    {filteredAndSortedBonds.length === 1 ? "bond" : "bonds"}
                  </>
                )}
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-600">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  disabled={loading}
                  className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full sm:w-48 text-xs sm:text-sm"
                >
                  <option value="">Default (Newest)</option>
                  <option value="coupon_high">Coupon: High to Low</option>
                  <option value="coupon_low">Coupon: Low to High</option>
                  <option value="yield_high">Yield: High to Low</option>
                  <option value="yield_low">Yield: Low to High</option>
                  <option value="maturity_soon">
                    Maturity: Earliest First
                  </option>
                  <option value="maturity_later">Maturity: Latest First</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 flex flex-col items-center justify-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-unibonds-orange border-t-transparent mb-4"></div>
                <p className="text-gray-600">Loading bonds...</p>
              </div>
            ) : filteredAndSortedBonds.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-600 text-lg mb-4">
                  No bonds found matching your filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="text-unibonds-orange hover:text-unibonds-orange/80 font-semibold"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredAndSortedBonds.map((bond) => (
                  <div
                    key={bond.bondId || bond._id}
                    className="rounded-lg border text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white border-gray-200 group"
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-poppins font-semibold text-base sm:text-lg text-unibonds-navy group-hover:text-unibonds-orange transition-colors truncate">
                            {bond.issuer}
                          </h3>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mt-2 bg-blue-50 text-blue-700 text-xs">
                            {bond.type}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl sm:text-3xl font-bold text-unibonds-orange">
                            {(bond.yield || bond.coupon || 0).toFixed(2)}%
                          </div>
                          <div className="text-xs text-gray-500">Yield</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trending-up w-3 sm:w-4 h-3 sm:h-4 text-gray-400 flex-shrink-0"
                          >
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                            <polyline points="16 7 22 7 22 13"></polyline>
                          </svg>
                          <div className="min-w-0">
                            <div className="text-gray-500">Rating</div>
                            <div className="font-semibold text-unibonds-navy">
                              {bond.rating || "-"}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-calendar w-3 sm:w-4 h-3 sm:h-4 text-gray-400 flex-shrink-0"
                          >
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect
                              width="18"
                              height="18"
                              x="3"
                              y="4"
                              rx="2"
                            ></rect>
                            <path d="M3 10h18"></path>
                          </svg>
                          <div className="min-w-0">
                            <div className="text-gray-500">Maturity</div>
                            <div className="font-semibold text-unibonds-navy">
                              {calculateTenure(bond.maturity)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-indian-rupee w-3 sm:w-4 h-3 sm:h-4 text-gray-400 flex-shrink-0"
                        >
                          <path d="M6 3h12"></path>
                          <path d="M6 8h12"></path>
                          <path d="m6 13 8.5 8"></path>
                          <path d="M6 13h3"></path>
                          <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                        </svg>
                        <div>
                          <span className="text-gray-500">
                            Min Investment:{" "}
                          </span>
                          <span className="font-semibold text-unibonds-navy">
                            {formatCurrency(bond.minInvestment)}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <Link
                          to={`/bonds/${bond.bondId || bond._id}`}
                          className="flex-1"
                        >
                          <button
                            type="button"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white text-xs sm:text-sm"
                          >
                            View Details
                          </button>
                        </Link>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex-1 bg-unibonds-orange hover:bg-unibonds-orange/90 text-white text-xs sm:text-sm"
                        >
                          Invest Now
                        </button>
                      </div>
                      {bond.tradable && (
                        <div className="text-xs text-center text-green-600 font-medium">
                          ✓ Tradable on Exchange
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bonds;
