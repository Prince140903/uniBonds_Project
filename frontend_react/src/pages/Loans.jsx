const Loans = () => {
  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                Loans Against{' '}
                <span className="text-unibonds-orange">Securities</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get instant liquidity without selling your investments. Pledge
                stocks, bonds, or mutual funds for quick loans
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-clock w-8 h-8 text-amber-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Quick Disbursal
                </h3>
                <p className="text-gray-600 text-sm">Get funds in 24-48 hours</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-trending-down w-8 h-8 text-amber-600"
                  >
                    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                    <polyline points="16 17 22 17 22 11"></polyline>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Low Interest
                </h3>
                <p className="text-gray-600 text-sm">Starting from 9% p.a.</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-shield w-8 h-8 text-amber-600"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  No Liquidation
                </h3>
                <p className="text-gray-600 text-sm">
                  Keep your investments intact
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                    className="lucide lucide-calculator w-8 h-8 text-amber-600"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                    <line x1="8" x2="16" y1="6" y2="6"></line>
                    <line x1="16" x2="16" y1="14" y2="18"></line>
                    <path d="M16 10h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M8 14h.01"></path>
                    <path d="M12 18h.01"></path>
                    <path d="M8 18h.01"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  High LTV
                </h3>
                <p className="text-gray-600 text-sm">Up to 80% of value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Eligible Securities Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              Eligible <span className="text-unibonds-orange">Securities</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-unibonds-orange to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                    className="lucide lucide-coins w-6 h-6 text-white"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                    <path d="M7 6h1v4"></path>
                    <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-2">
                  Stocks & ETFs
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  LTV:{' '}
                  <span className="font-bold text-unibonds-orange">
                    Up to 50%
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Approved list of equity shares
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-unibonds-orange to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                    className="lucide lucide-coins w-6 h-6 text-white"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                    <path d="M7 6h1v4"></path>
                    <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-2">
                  Bonds & Debentures
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  LTV:{' '}
                  <span className="font-bold text-unibonds-orange">
                    Up to 80%
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Corporate & government bonds
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-unibonds-orange to-orange-600 rounded-lg flex items-center justify-center mb-4">
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
                    className="lucide lucide-coins w-6 h-6 text-white"
                  >
                    <circle cx="8" cy="8" r="6"></circle>
                    <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                    <path d="M7 6h1v4"></path>
                    <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-2">
                  Mutual Funds
                </h3>
                <div className="text-sm text-gray-600 mb-2">
                  LTV:{' '}
                  <span className="font-bold text-unibonds-orange">
                    Up to 70%
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  Equity & debt mutual funds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              Key <span className="text-unibonds-orange">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Retain ownership & voting rights',
                'Continue receiving dividends & interest',
                'Flexible repayment tenure',
                'No prepayment charges',
                'Minimal documentation',
                'Online application & tracking',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3">
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
                      className="lucide lucide-check w-5 h-5 text-green-600 flex-shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              How It <span className="text-unibonds-orange">Works</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Apply Online',
                  description:
                    'Submit loan application with security details',
                },
                {
                  step: '2',
                  title: 'Valuation',
                  description:
                    'We assess your securities and approve loan amount',
                },
                {
                  step: '3',
                  title: 'Pledge Securities',
                  description:
                    'Securities pledged with our designated bank',
                },
                {
                  step: '4',
                  title: 'Get Funds',
                  description:
                    'Loan amount credited to your account in 24-48 hours',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-unibonds-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-unibonds-navy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Need Quick <span className="text-unibonds-orange">Liquidity?</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Apply now and get funds in your account within 48 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20apply%20for%20a%20loan%20against%20securities%20with%20Unibonds%20Securities"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-unibonds-orange hover:bg-unibonds-orange/90">
                  Apply for Loan
                </button>
              </a>
              <a
                href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20calculate%20my%20eligibility%20for%20loan%20against%20securities%20at%20Unibonds%20Securities"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                  Calculate Eligibility
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Loans

