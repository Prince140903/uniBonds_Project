const StructuredProducts = () => {
  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                Structured <span className="text-unibonds-orange">Products</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Innovative investment solutions combining capital protection with
                market-linked return potential
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-shield w-8 h-8 text-blue-600"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Capital Protected
                </h3>
                <p className="text-gray-600 text-sm">
                  Safeguard your principal investment while earning returns
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-trending-up w-8 h-8 text-green-600"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Enhanced Returns
                </h3>
                <p className="text-gray-600 text-sm">
                  Potential for higher returns than traditional fixed income
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-target w-8 h-8 text-purple-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Customized Solutions
                </h3>
                <p className="text-gray-600 text-sm">
                  Tailored structures matching your investment objectives
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Structured Products */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-8">
              <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-4">
                Types of
                <span className="text-unibonds-orange"> Structured Products</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-3">
                  Principal Protected Notes
                </h3>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                  100% capital protection with equity market participation
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expected Returns:</span>
                    <span className="font-semibold text-unibonds-orange">8-12% p.a.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Risk Level:</span>
                    <span className="font-semibold text-unibonds-navy">Low</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                  Get Details
                </button>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-3">
                  Market Linked Debentures
                </h3>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                  Returns linked to indices, commodities, or currencies
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expected Returns:</span>
                    <span className="font-semibold text-unibonds-orange">10-15% p.a.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Risk Level:</span>
                    <span className="font-semibold text-unibonds-navy">Medium</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                  Get Details
                </button>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-3">
                  Hybrid Structures
                </h3>
                <p className="text-gray-600 text-sm mb-4 min-h-[60px]">
                  Combination of fixed income and derivative strategies
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Expected Returns:</span>
                    <span className="font-semibold text-unibonds-orange">12-18% p.a.</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Risk Level:</span>
                    <span className="font-semibold text-unibonds-navy">Medium-High</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                  Get Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              Key <span className="text-unibonds-orange">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Capital protection up to 100%',
                'Market-linked return potential',
                'Diversification beyond traditional assets',
                'Customized to risk appetite',
                'Tax-efficient structures available',
                'Professional fund management',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
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
                        className="lucide lucide-check w-5 h-5 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Interested in
              <span className="text-unibonds-orange"> Structured Products?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our financial advisors will help you understand which structured
              product best fits your investment goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-unibonds-orange hover:bg-unibonds-orange/90">
                Schedule Consultation
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default StructuredProducts

