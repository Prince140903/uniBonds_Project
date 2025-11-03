import { Link } from 'react-router-dom'

const OtherProducts = () => {
  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                Beyond <span className="text-unibonds-orange">Bonds</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive financial solutions to diversify your portfolio and
                secure your financial future
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="space-y-12">
              {/* Structured Products Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-200">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          className="lucide lucide-trending-up w-8 h-8 text-blue-600"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-poppins font-bold text-2xl text-unibonds-navy mb-2">
                          Structured Products
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Capital-protected investment solutions combining bonds
                          with derivative strategies for enhanced returns with
                          managed risk.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-sm text-gray-700">Capital protection options</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-sm text-gray-700">Market-linked returns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-sm text-gray-700">Customized solutions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <span className="text-sm text-gray-700">Flexible tenures</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/other-products/structured-products" className="w-full">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                        Learn More
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
                          className="lucide lucide-arrow-right w-4 h-4 ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </Link>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                      Contact Advisor
                    </button>
                  </div>
                </div>
              </div>

              {/* Insurance Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-green-200">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          className="lucide lucide-shield w-8 h-8 text-green-600"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-poppins font-bold text-2xl text-unibonds-navy mb-2">
                          Insurance
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Comprehensive insurance solutions including term,
                          health, and investment-linked policies for complete
                          financial protection.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                        <span className="text-sm text-gray-700">Term & health insurance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                        <span className="text-sm text-gray-700">Investment-linked plans</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                        <span className="text-sm text-gray-700">Tax benefits under 80C</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-600"></div>
                        <span className="text-sm text-gray-700">Family protection</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/other-products/insurance" className="w-full">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                        Learn More
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
                          className="lucide lucide-arrow-right w-4 h-4 ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </Link>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                      Contact Advisor
                    </button>
                  </div>
                </div>
              </div>

              {/* Estate Planning Card */}
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-200">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          className="lucide lucide-house w-8 h-8 text-purple-600"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h2 className="font-poppins font-bold text-2xl text-unibonds-navy mb-2">
                          Estate Planning
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          Strategic wealth transfer and succession planning to
                          ensure your legacy is preserved and distributed
                          according to your wishes.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                        <span className="text-sm text-gray-700">Will drafting assistance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                        <span className="text-sm text-gray-700">Trust formation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                        <span className="text-sm text-gray-700">Succession planning</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                        <span className="text-sm text-gray-700">Tax-efficient transfers</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/other-products/estate-planning" className="w-full">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90">
                        Learn More
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
                          className="lucide lucide-arrow-right w-4 h-4 ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </Link>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                      Contact Advisor
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Need Help Choosing the
              <span className="text-unibonds-orange"> Right Product?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our financial advisors can help you understand which products best
              suit your financial goals and risk profile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-unibonds-orange hover:bg-unibonds-orange/90">
                Schedule Consultation
              </button>
              <a href="tel:+919429802484">
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                  Call Us: +91 94298 02484
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OtherProducts

