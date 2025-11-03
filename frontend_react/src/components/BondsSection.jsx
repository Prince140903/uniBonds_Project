import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import apiService from "../services/api";
import ShareModal from "./ShareModal";

const BondsSection = () => {
  const [activeFilter, setActiveFilter] = useState("New Arrivals");
  const [bonds, setBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [selectedBond, setSelectedBond] = useState(null);
  const [totalBonds, setTotalBonds] = useState(0);
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const filters = [
    "New Arrivals",
    "High Yielding",
    "State Guaranteed",
    "Min. ₹10,000",
    "Secured",
    "G-Sec/SDL",
    "Monthly Income",
    "Tax Free",
    "Bank",
    "PSU",
  ];

  useEffect(() => {
    fetchBonds();
  }, [activeFilter]);

  const fetchBonds = async () => {
    setLoading(true);
    try {
      let queryParams = {
        isActive: "true",
        limit: 20,
        sortBy: "yield",
        sortOrder: "desc",
      };

      // Apply filters based on active filter
      switch (activeFilter) {
        case "New Arrivals":
          queryParams.sortBy = "createdAt";
          queryParams.sortOrder = "desc";
          queryParams.limit = 10;
          break;
        case "High Yielding":
          queryParams.minYield = 9;
          queryParams.sortBy = "yield";
          queryParams.sortOrder = "desc";
          break;
        case "State Guaranteed":
          queryParams.type = "G-Sec";
          break;
        case "Min. ₹10,000":
          // Note: Backend doesn't support minInvestment filter, so we'll filter client-side
          break;
        case "Secured":
          // Note: Backend doesn't have a secured field, we'll filter by type or description
          break;
        case "G-Sec/SDL":
          queryParams.type = "G-Sec";
          break;
        case "Monthly Income":
          // Note: Backend doesn't support frequency filter, so we'll filter client-side
          break;
        case "Tax Free":
          queryParams.type = "Tax-Free";
          break;
        case "Bank":
          queryParams.search = "Bank";
          break;
        case "PSU":
          queryParams.type = "PSU";
          break;
        default:
          break;
      }

      const response = await apiService.getBonds(queryParams);

      if (response.success) {
        let filteredBonds = response.data;

        // Client-side filtering for filters not supported by backend
        if (activeFilter === "Min. ₹10,000") {
          filteredBonds = filteredBonds.filter(
            (bond) => bond.minInvestment <= 10000
          );
        } else if (activeFilter === "Monthly Income") {
          filteredBonds = filteredBonds.filter(
            (bond) => bond.frequency === "Monthly"
          );
        } else if (activeFilter === "Secured") {
          // Filter bonds that have "Secured" in description or type
          filteredBonds = filteredBonds.filter(
            (bond) =>
              bond.description?.toLowerCase().includes("secured") ||
              bond.type === "G-Sec" ||
              bond.type === "PSU"
          );
        }

        setBonds(filteredBonds);
        setTotalBonds(response.pagination?.total || filteredBonds.length);
      }
    } catch (error) {
      console.error("Error fetching bonds:", error);
      setBonds([]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const calculatePrice = (bond) => {
    // Simplified price calculation - can be enhanced based on actual pricing logic
    // For now, using faceValue as base and adjusting slightly based on yield
    if (bond.faceValue) {
      return bond.faceValue;
    }
    return 100000; // Default
  };

  const getBondTypeLabel = (bond) => {
    if (bond.type === "G-Sec") return "G-Sec/SDL";
    if (bond.type === "Tax-Free") return "Tax Free";
    if (bond.frequency === "Monthly") return "Monthly Income";
    return bond.type || "Secured - Regular";
  };

  const handleShare = (bond) => {
    setSelectedBond(bond);
    setShareModalOpen(true);
  };

  const getIssuerInitial = (issuer) => {
    return issuer?.charAt(0)?.toUpperCase() || "?";
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 16; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: -cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 16; // card width + gap
      scrollContainerRef.current.scrollBy({
        left: cardWidth * 2,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [bonds]);

  // Fetch total count for "All Bonds" button
  useEffect(() => {
    const fetchTotalCount = async () => {
      try {
        const response = await apiService.getBonds({
          isActive: "true",
          limit: 1,
        });
        if (response.success) {
          setTotalBonds(response.pagination?.total || 0);
        }
      } catch (error) {
        console.error("Error fetching bond count:", error);
      }
    };
    fetchTotalCount();
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-6 sm:mb-8">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-unibonds-navy mb-2">
            Offers and Categories
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-unibonds-navy text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bonds Cards - Horizontal Scrollable */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-unibonds-orange"></div>
          </div>
        ) : bonds.length > 0 ? (
          <div className="mb-8 relative group/container">
            {/* Left Arrow Button */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-50 transition-all opacity-0 md:opacity-100 group-hover/container:opacity-100 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-unibonds-navy"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2.5 hover:bg-gray-50 transition-all opacity-0 md:opacity-100 group-hover/container:opacity-100 hover:opacity-100 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-unibonds-navy"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-8 md:px-12"
            >
              {bonds.map((bond) => (
                <div
                  key={bond._id || bond.bondId}
                  className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-6"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-unibonds-orange to-unibonds-navy flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                        {getIssuerInitial(bond.issuer)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-poppins font-semibold text-sm sm:text-base text-unibonds-navy truncate">
                          {bond.issuer?.toUpperCase()}
                        </h3>
                      </div>
                    </div>
                    <button
                      onClick={() => handleShare(bond)}
                      className="flex-shrink-0 p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Share bond"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </button>
                  </div>

                  {/* Bond Details */}
                  <div className="space-y-2.5 mb-4">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Coupon:</span>
                      <span className="font-semibold text-unibonds-navy">
                        {bond.coupon?.toFixed(4)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Maturity:</span>
                      <span className="font-semibold text-unibonds-navy">
                        {formatDate(bond.maturity)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <span className="font-semibold text-unibonds-navy">
                        {bond.ratingAgency} {bond.rating}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Type of Bond:</span>
                      <span className="font-semibold text-unibonds-navy text-right max-w-[50%] truncate">
                        {getBondTypeLabel(bond)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Yield:</span>
                      <span className="font-semibold text-blue-600">
                        {bond.yield?.toFixed(4)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-unibonds-navy">
                        {formatCurrency(calculatePrice(bond))}
                      </span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link
                    to={`/bonds/${bond.bondId || bond._id}`}
                    className="w-full bg-gradient-to-r from-unibonds-orange to-unibonds-navy hover:from-unibonds-orange/90 hover:to-unibonds-navy/90 text-white font-medium py-2.5 px-4 rounded-lg transition-all text-sm flex items-center justify-center gap-2 group/btn"
                    onClick={() => {
                      const bondId = bond.bondId || bond._id;
                      console.log(
                        "Navigating to bond:",
                        bondId,
                        "Full bond:",
                        bond
                      );
                    }}
                  >
                    <span>Read More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform group-hover/btn:translate-x-1"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No bonds found for this category.</p>
          </div>
        )}

        {/* Footer Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-xs text-gray-600 max-w-2xl">
              <p>
                Note: Pursuant to the provisions of Section 193 of the Income
                Tax Act, 1961, as amended, effective from 1st April 2023, TDS
                will be deducted at the rate of 10% (or such other rate as may
                be prescribed) on interest payable on bonds, debentures, etc.{" "}
                <button className="text-unibonds-orange hover:underline">
                  Read more
                </button>
              </p>
            </div>
            <Link to="/bonds">
              <button className="whitespace-nowrap px-6 py-2.5 border-2 border-unibonds-navy text-unibonds-navy font-semibold rounded-lg hover:bg-unibonds-navy hover:text-white transition-all text-sm sm:text-base flex items-center gap-2 group/btn">
                <span>All Bonds ({totalBonds})</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        bond={selectedBond}
      />
    </section>
  );
};

export default BondsSection;
