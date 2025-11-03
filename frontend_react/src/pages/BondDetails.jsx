import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import apiService from "../services/api";

const BondDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bond, setBond] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    console.log("BondDetails mounted with ID:", id);
    if (id) {
      console.log("Fetching bond with ID:", id);
      fetchBondDetails();
    } else {
      console.log("No bond ID found in params, redirecting to /bonds");
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
      console.log("Calling API with ID:", id, "Type:", typeof id);
      const response = await apiService.getBondById(id);
      console.log("API Response:", response);
      if (response.success && response.data) {
        console.log("Bond data received:", response.data);
        setBond(response.data);
      } else {
        console.error("Bond not found in response. ID:", id, "Response:", response);
        navigate("/bonds");
      }
    } catch (error) {
      console.error("Error fetching bond details:", error);
      console.error("Error details:", error.message, error.stack);
      navigate("/bonds");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatCurrency = (amount) => {
    if (!amount) return "-";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateRemainingTenure = (maturityDate) => {
    if (!maturityDate) return "-";
    const maturity = new Date(maturityDate);
    const today = new Date();
    const diffTime = maturity - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "Expired";
    
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    const days = diffDays % 30;
    
    if (years > 0) {
      return `${years}Y ${months}M`;
    } else if (months > 0) {
      return `${months}M ${days}D`;
    } else {
      return `${days}D`;
    }
  };

  const calculateTotalTenure = (maturityDate, createdAt) => {
    if (!maturityDate || !createdAt) return "-";
    const maturity = new Date(maturityDate);
    const created = new Date(createdAt);
    const diffTime = maturity - created;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    return `${years}Y ${months}M`;
  };

  const handleInvestNow = () => {
    // Navigate to investment page or show modal
    console.log("Invest Now clicked for bond:", bond?.bondId);
  };

  const handleDownloadProspectus = () => {
    // Handle prospectus download
    console.log("Download prospectus for bond:", bond?.bondId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 sm:pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-unibonds-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading bond details...</p>
          <p className="text-sm text-gray-500 mt-2">ID: {id || "Not found"}</p>
        </div>
      </div>
    );
  }

  if (!bond && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 sm:pt-24">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Bond not found</p>
          <p className="text-sm text-gray-500 mb-4">ID attempted: {id || "Not provided"}</p>
          <Link
            to="/bonds"
            className="text-unibonds-orange hover:underline"
          >
            Go back to Bonds
          </Link>
        </div>
      </div>
    );
  }

  if (!bond) {
    return null;
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "financials", label: "Financials" },
    { id: "documents", label: "Documents" },
    { id: "about", label: "About Issuer" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link to="/" className="hover:text-unibonds-orange">
              Home
            </Link>
            <span>/</span>
            <Link to="/bonds" className="hover:text-unibonds-orange">
              Bonds
            </Link>
            <span>/</span>
            <span className="text-unibonds-navy font-medium">{bond.issuer}</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl text-unibonds-navy mb-2">
                {bond.issuer}
              </h1>
              <p className="text-gray-600 text-lg mb-4">ISIN: {bond.isin}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-blue-50 text-blue-700 border-blue-200">
                  {bond.type}
                </span>
                <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-green-50 text-green-700 border-green-200">
                  {bond.ratingAgency} {bond.rating}
                </span>
                {bond.tradable && (
                  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-purple-50 text-purple-700 border-purple-200">
                    Tradable
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <div className="text-right">
                <div className="text-sm text-gray-600 mb-1">Current Price</div>
                <div className="text-3xl font-bold text-unibonds-navy mb-1">
                  {formatCurrency(bond.faceValue)}
                </div>
                <div className="text-sm text-gray-600">
                  Face Value: {formatCurrency(bond.faceValue)}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleInvestNow}
                  className="inline-flex items-center justify-center gap-2 bg-unibonds-orange hover:bg-unibonds-orange/90 text-white font-semibold px-6 py-3 rounded-lg transition-all"
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
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8v8m-4-4h8"></path>
                  </svg>
                  Invest Now
                </button>
                <button
                  onClick={handleDownloadProspectus}
                  className="inline-flex items-center justify-center gap-2 border-2 border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-all"
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
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Prospectus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Tabs */}
      <section className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex flex-wrap gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-medium transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-unibonds-orange text-unibonds-orange"
                    : "border-transparent text-gray-600 hover:text-unibonds-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Issue Details */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                  Issue Details
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Issuer Name</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.issuer || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Security Name</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.issuer || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">ISIN</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.isin || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Face Value</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {formatCurrency(bond.faceValue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Coupon</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.coupon?.toFixed(4)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Coupon Type</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.frequency || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Mode of Issue</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.type || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">IP Frequency</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.frequency || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Taxation</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.type === "Tax-Free" ? "Tax Free" : "Taxable"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Security</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      Secured
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Seniority</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      Senior
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2">
                    <span className="text-gray-600 font-medium">Listing Status</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.tradable ? "Listed" : "Unlisted"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dates & Tenure */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                  Important Dates
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Allotment Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {formatDate(bond.createdAt) || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Maturity Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {formatDate(bond.maturity)}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Next Payment Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {formatDate(bond.maturity) || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Call Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">-</span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Put Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">-</span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Total Tenure</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {calculateTotalTenure(bond.maturity, bond.createdAt)}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2">
                    <span className="text-gray-600 font-medium">Remaining Tenure</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {calculateRemainingTenure(bond.maturity)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Rating Information */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                  Credit Rating
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Rating</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.rating || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Rating Agency</span>
                    <span className="text-unibonds-navy font-semibold text-right">
                      {bond.ratingAgency || "-"}
                    </span>
                  </div>
                  <div className="flex justify-between items-start py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Rating Date</span>
                    <span className="text-unibonds-navy font-semibold text-right">-</span>
                  </div>
                  <div className="flex justify-between items-start py-2">
                    <span className="text-gray-600 font-medium">Trustee</span>
                    <span className="text-unibonds-navy font-semibold text-right">-</span>
                  </div>
                </div>
              </div>

              {/* Investment Metrics */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                  Investment Metrics
                </h3>
                <div className="space-y-6">
                  <div className="text-center py-4 border-b border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Current Price</div>
                    <div className="text-3xl font-bold text-unibonds-orange">
                      {formatCurrency(bond.faceValue)}
                    </div>
                  </div>
                  <div className="text-center py-4 border-b border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Yield to Maturity</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {bond.yield?.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <div className="text-sm text-gray-600 mb-2">Min Investment</div>
                    <div className="text-3xl font-bold text-unibonds-navy">
                      {formatCurrency(bond.minInvestment)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Financials Tab */}
          {activeTab === "financials" && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                Financial Performance
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Year
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Revenue (₹ Cr)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Net Profit (₹ Cr)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Total Assets (₹ Cr)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Total Liabilities (₹ Cr)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Equity (₹ Cr)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        EPS (₹)
                      </th>
                      <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-unibonds-navy">
                        Debt/Equity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="8"
                        className="border border-gray-200 px-4 py-8 text-center text-gray-500"
                      >
                        No financial data available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                Issue Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-unibonds-navy">Rating Rational</h4>
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
                      className="text-gray-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Not available</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-unibonds-navy">IM/KID</h4>
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
                      className="text-gray-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Not available</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-unibonds-navy">Synopsis</h4>
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
                      className="text-gray-400"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">Not available</p>
                </div>
              </div>
            </div>
          )}

          {/* About Issuer Tab */}
          {activeTab === "about" && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
              <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                About Issuer
              </h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {bond.description ||
                    `${bond.issuer} is a reputable financial institution offering various fixed-income investment products. The issuer has a strong track record in the bond market and maintains high credit ratings from leading rating agencies. This bond offering provides investors with a secure investment option with competitive yields and regular interest payments.`}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BondDetails;

