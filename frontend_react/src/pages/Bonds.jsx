import { useState } from 'react'

const Bonds = () => {
  const [filters, setFilters] = useState({
    bondTypes: [],
    ratings: [],
    yieldRange: [5, 15],
    tenureRange: [0, 15],
    tradableOnly: false
  })
  const [sortBy, setSortBy] = useState('')

  const bonds = [
    { id: 1, name: 'Manappuram Finance', category: 'NBFC', yield: '9.85', rating: 'AA', maturity: '2Y', minInvestment: '₹1.0L', link: '/bonds/37', tradable: true },
    { id: 2, name: 'Muthoot Finance Ltd', category: 'NBFC', yield: '9.75', rating: 'AA', maturity: '3Y', minInvestment: '₹1.0L', link: '/bonds/38', tradable: true },
    { id: 3, name: 'HDFC Bank Ltd', category: 'PSU', yield: '8.75', rating: 'AAA', maturity: '3Y', minInvestment: '₹1.0L', link: '/bonds/1', tradable: true },
    { id: 4, name: 'Power Finance Corporation', category: 'PSU', yield: '8.45', rating: 'AAA', maturity: '5Y', minInvestment: '₹1.0L', link: '/bonds/2', tradable: true },
    { id: 5, name: 'Tata Capital Financial', category: 'NBFC', yield: '9', rating: 'AA+', maturity: '4Y', minInvestment: '₹1.0L', link: '/bonds/5', tradable: false },
    { id: 6, name: 'NTPC Ltd', category: 'PSU', yield: '8', rating: 'AAA', maturity: '5Y', minInvestment: '₹1.0L', link: '/bonds/6', tradable: true },
  ]

  const bondTypes = ['G-Sec', 'PSU', 'NBFC', 'Corporate']
  const ratings = ['SOV', 'AAA', 'AA+', 'AA', 'A+']

  const toggleFilter = (type, value) => {
    setFilters(prev => {
      const currentArray = prev[type] || []
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value]
      return { ...prev, [type]: newArray }
    })
  }

  const resetFilters = () => {
    setFilters({
      bondTypes: [],
      ratings: [],
      yieldRange: [5, 15],
      tenureRange: [0, 15],
      tradableOnly: false
    })
    setSortBy('')
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
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy">
                  Filters
                </h3>
                <button
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
                          onChange={() => toggleFilter('bondTypes', type)}
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
                          onChange={() => toggleFilter('ratings', rating)}
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
                    Yield Range: {filters.yieldRange[0]}% - {filters.yieldRange[1]}%
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="15"
                    value={filters.yieldRange[1]}
                    onChange={(e) => setFilters(prev => ({ ...prev, yieldRange: [prev.yieldRange[0], parseInt(e.target.value)] }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-unibonds-orange"
                  />
                </div>
                {/* Tenure Range */}
                <div>
                  <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-semibold text-unibonds-navy mb-3 block">
                    Tenure: {filters.tenureRange[0]}Y - {filters.tenureRange[1]}Y
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    value={filters.tenureRange[1]}
                    onChange={(e) => setFilters(prev => ({ ...prev, tenureRange: [prev.tenureRange[0], parseInt(e.target.value)] }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-unibonds-orange"
                  />
                </div>
                {/* Tradable Only */}
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="tradable"
                    checked={filters.tradableOnly}
                    onChange={(e) => setFilters(prev => ({ ...prev, tradableOnly: e.target.checked }))}
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
                Showing
                <span className="font-semibold text-unibonds-navy"> {bonds.length} </span>
                bonds
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs sm:text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full sm:w-48 text-xs sm:text-sm"
                >
                  <option value="">Default (Newest)</option>
                  <option value="coupon_high">Coupon: High to Low</option>
                  <option value="coupon_low">Coupon: Low to High</option>
                  <option value="yield_high">Yield: High to Low</option>
                  <option value="yield_low">Yield: Low to High</option>
                  <option value="maturity_soon">Maturity: Earliest First</option>
                  <option value="maturity_later">Maturity: Latest First</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {bonds.map((bond) => (
                <div
                  key={bond.id}
                  className="rounded-lg border text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] bg-white border-gray-200 group"
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-poppins font-semibold text-base sm:text-lg text-unibonds-navy group-hover:text-unibonds-orange transition-colors truncate">
                          {bond.name}
                        </h3>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mt-2 bg-blue-50 text-blue-700 text-xs">
                          {bond.category}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-2xl sm:text-3xl font-bold text-unibonds-orange">
                          {bond.yield}%
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
                          <div className="font-semibold text-unibonds-navy">{bond.rating}</div>
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
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <div className="min-w-0">
                          <div className="text-gray-500">Maturity</div>
                          <div className="font-semibold text-unibonds-navy">{bond.maturity}</div>
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
                        <span className="text-gray-500">Min Investment: </span>
                        <span className="font-semibold text-unibonds-navy">{bond.minInvestment}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <a className="flex-1" href={bond.link}>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 w-full border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white text-xs sm:text-sm">
                          View Details
                        </button>
                      </a>
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 flex-1 bg-unibonds-orange hover:bg-unibonds-orange/90 text-white text-xs sm:text-sm">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bonds

