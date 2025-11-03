import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import apiService from "../services/api";

const BondDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bond, setBond] = useState(null);
  const [similarBonds, setSimilarBonds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("details");

  useEffect(() => {
    if (id) {
      fetchBondDetails();
    } else {
      navigate("/bonds");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchBondDetails = async () => {
    if (!id) {
      navigate("/bonds");
      return;
    }

    try {
      setLoading(true);
      const response = await apiService.getBondById(id);
      if (response.success && response.data) {
        setBond(response.data);
        // Fetch similar bonds (same type, excluding current bond)
        fetchSimilarBonds(response.data);
      } else {
        navigate("/bonds");
      }
    } catch (error) {
      console.error("Error fetching bond details:", error);
      navigate("/bonds");
    } finally {
      setLoading(false);
    }
  };

  const fetchSimilarBonds = async (currentBond) => {
    try {
      // Fetch bonds with same type and rating, excluding current bond
      const response = await apiService.getBonds({
        type: currentBond.type,
        rating: currentBond.rating,
        limit: 3,
      });
      if (response.success && response.data) {
        // Filter out current bond
        const filtered = response.data.filter(
          (b) => (b.bondId || b._id) !== (currentBond.bondId || currentBond._id)
        );
        setSimilarBonds(filtered.slice(0, 3));
      }
    } catch (error) {
      console.error("Error fetching similar bonds:", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return "-";
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

  const calculateTenure = (maturityDate, createdAt) => {
    if (!maturityDate || !createdAt) return "-";
    const maturity = new Date(maturityDate);
    const created = new Date(createdAt);
    const diffTime = maturity - created;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    if (years > 0 && months > 0) {
      return `${years} Year${years > 1 ? "s" : ""} ${months} Month${
        months > 1 ? "s" : ""
      }`;
    } else if (years > 0) {
      return `${years} Year${years > 1 ? "s" : ""}`;
    } else if (months > 0) {
      return `${months} Month${months > 1 ? "s" : ""}`;
    }
    return "Less than 1 Month";
  };

  const handleInvestNow = () => {
    console.log("Invest Now clicked for bond:", bond?.bondId);
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 sm:pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-unibonds-orange border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bond details...</p>
        </div>
      </div>
    );
  }

  if (!bond) {
    return null;
  }

  const tenure = calculateTenure(bond.maturity, bond.createdAt);
  const expectedYield = bond.yield || bond.coupon || 0;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Back Button */}
        <Link
          to="/bonds"
          className="inline-flex items-center gap-2 text-unibonds-orange hover:text-unibonds-orange/80 font-medium mb-6 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Bonds
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Bond Information Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {bond.issuer}
              </h1>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  {bond.type}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {bond.rating}
                </span>
                {bond.tradable && (
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                    Tradable
                  </span>
                )}
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {/* Coupon Rate */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {bond.coupon?.toFixed(1) || "-"}%
                    </div>
                    <div className="text-sm text-gray-500">Coupon Rate</div>
                  </div>
                </div>

                {/* Maturity */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {tenure}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDate(bond.maturity)}
                    </div>
                    <div className="text-sm text-gray-500">Maturity</div>
                  </div>
                </div>

                {/* Min Investment */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(bond.minInvestment)}
                    </div>
                    <div className="text-sm text-gray-500">Min Investment</div>
                  </div>
                </div>

                {/* Expected Yield */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-unibonds-orange">
                      {expectedYield.toFixed(2)}%
                    </div>
                    <div className="text-sm text-gray-500">Expected Yield</div>
                  </div>
                </div>
              </div>

              {/* About the Issuer */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  About the Issuer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {bond.description ||
                    `${bond.issuer} is a reputable financial institution offering various fixed-income investment products. The issuer has a strong track record in the bond market and maintains high credit ratings from leading rating agencies.`}
                </p>
              </div>
            </div>

            {/* Bond Details Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              {/* Tabs */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-4 font-semibold text-sm transition-colors ${
                    activeTab === "details"
                      ? "bg-gray-100 text-gray-900 border-b-2 border-unibonds-orange"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Bond Details
                </button>
                <button
                  onClick={() => setActiveTab("schedule")}
                  className={`px-6 py-4 font-semibold text-sm transition-colors ${
                    activeTab === "schedule"
                      ? "bg-gray-100 text-gray-900 border-b-2 border-unibonds-orange"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Payment Schedule
                </button>
                <button
                  onClick={() => setActiveTab("documents")}
                  className={`px-6 py-4 font-semibold text-sm transition-colors ${
                    activeTab === "documents"
                      ? "bg-gray-100 text-gray-900 border-b-2 border-unibonds-orange"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Documents
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "details" && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">ISIN</span>
                      <span className="font-semibold text-gray-900">
                        {bond.isin || "-"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Face Value</span>
                      <span className="font-semibold text-gray-900">
                        {formatCurrency(bond.faceValue)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Rating Agency</span>
                      <span className="font-semibold text-gray-900">
                        {bond.ratingAgency || "-"}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Frequency</span>
                      <span className="font-semibold text-gray-900">
                        {bond.frequency || "-"}
                      </span>
                    </div>
                  </div>
                )}

                {activeTab === "schedule" && (
                  <div className="text-center py-8 text-gray-500">
                    Payment schedule information will be displayed here.
                  </div>
                )}

                {activeTab === "documents" && (
                  <div className="text-center py-8 text-gray-500">
                    Documents will be available here.
                  </div>
                )}
              </div>
            </div>

            {/* Similar Bonds Card */}
            {similarBonds.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Similar Bonds
                </h3>
                <div className="space-y-4">
                  {similarBonds.map((similarBond) => (
                    <Link
                      key={similarBond.bondId || similarBond._id}
                      to={`/bonds/${similarBond.bondId || similarBond._id}`}
                      className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 rounded-lg transition-colors"
                    >
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 mb-1">
                          {similarBond.issuer}
                        </div>
                        <div className="text-sm text-gray-500">
                          {similarBond.rating} • {similarBond.type}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-unibonds-orange">
                          {(
                            similarBond.yield ||
                            similarBond.coupon ||
                            0
                          ).toFixed(2)}
                          %
                        </div>
                        <div className="text-xs text-gray-500">Yield</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Investment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Investment Summary
              </h3>

              {/* Expected Returns Highlight */}
              <div className="bg-orange-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-gray-600 mb-1">
                  Expected Returns (Annual)
                </div>
                <div className="text-4xl font-bold text-unibonds-orange">
                  {expectedYield.toFixed(2)}%
                </div>
              </div>

              {/* Investment Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Min Investment</span>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(bond.minInvestment)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Tenure</span>
                  <span className="font-semibold text-gray-900">{tenure}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rating</span>
                  <span className="font-semibold text-gray-900">
                    {bond.rating || "-"}
                  </span>
                </div>
              </div>

              {/* Invest Now Button */}
              <button
                onClick={handleInvestNow}
                className="w-full bg-unibonds-orange hover:bg-unibonds-orange/90 text-white font-semibold py-3 px-6 rounded-lg transition-all mb-6"
              >
                Invest Now
              </button>

              {/* Disclaimers */}
              <div className="space-y-3 text-xs text-gray-500">
                <div className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Investments in bonds are subject to market risks</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 flex-shrink-0"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>SEBI registered intermediary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BondDetails;
