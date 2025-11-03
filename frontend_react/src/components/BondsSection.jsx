import { useState } from 'react'

const BondsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const bonds = [
    { id: 1, name: 'HDFC Bank Ltd', category: 'PSU', yield: '8.75', rating: 'AAA', maturity: '3Y', minInvestment: '₹1.0L', link: '/bonds/1' },
    { id: 2, name: 'Power Finance Corporation', category: 'PSU', yield: '8.45', rating: 'AAA', maturity: '5Y', minInvestment: '₹1.0L', link: '/bonds/2' },
    { id: 3, name: 'Tata Capital Financial', category: 'NBFC', yield: '9', rating: 'AA+', maturity: '4Y', minInvestment: '₹1.0L', link: '/bonds/5' },
    { id: 4, name: 'NTPC Ltd', category: 'PSU', yield: '8', rating: 'AAA', maturity: '5Y', minInvestment: '₹1.0L', link: '/bonds/6' },
  ]

  const filters = ['All', 'G-Sec', 'PSU', 'NBFC', 'Corporate']

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
            Balance Your Risk with
            <span className="text-unibonds-orange"> Bonds</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore curated bond options across various categories, tailored
            to match your risk appetite
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 ${
                activeFilter === filter
                  ? 'bg-unibonds-orange hover:bg-unibonds-orange/90 text-white'
                  : 'border bg-background hover:bg-accent border-gray-300 hover:border-unibonds-orange hover:text-unibonds-orange'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <div className="text-xs text-center text-green-600 font-medium">
                  ✓ Tradable on Exchange
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/bonds">
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 rounded-md border-2 border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white font-semibold px-8">
              View All Bonds
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default BondsSection

