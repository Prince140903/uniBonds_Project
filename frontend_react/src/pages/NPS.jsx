const NPS = () => {
  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                National Pension{' '}
                <span className="text-unibonds-orange">System (NPS)</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure your retirement with India's most tax-efficient pension
                solution
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
                  <h2 className="font-poppins font-semibold text-2xl text-unibonds-navy mb-6">
                    What is NPS?
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    The National Pension System is a government-sponsored pension
                    scheme that helps you build a retirement corpus. It offers
                    market-linked returns with professional fund management and
                    significant tax benefits.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    NPS is regulated by the Pension Fund Regulatory and
                    Development Authority (PFRDA) and is available to all Indian
                    citizens aged 18-70 years.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
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
                  <div className="text-3xl font-bold text-unibonds-navy mb-1">
                    ₹2L
                  </div>
                  <div className="text-sm text-gray-600">Tax Savings</div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
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
                  <div className="text-3xl font-bold text-unibonds-navy mb-1">
                    10-12%
                  </div>
                  <div className="text-sm text-gray-600">Historical Returns</div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
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
                      className="lucide lucide-calculator w-8 h-8 text-purple-600"
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
                  <div className="text-3xl font-bold text-unibonds-navy mb-1">
                    0.01%
                  </div>
                  <div className="text-sm text-gray-600">Fund Charges</div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="lucide lucide-file-text w-8 h-8 text-unibonds-orange"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-unibonds-navy mb-1">
                    2
                  </div>
                  <div className="text-sm text-gray-600">Account Types</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-8 text-center">
              Key <span className="text-unibonds-orange">Benefits</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Tax benefits up to ₹2 lakh under Section 80C and 80CCD',
                'Low-cost pension solution with minimal charges',
                'Portable across jobs and locations',
                'Choice of investment options and fund managers',
                'Government-backed retirement security',
                'Flexible contribution amounts',
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
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

        {/* How It Works Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-8 text-center">
              How It <span className="text-unibonds-orange">Works</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Open NPS Account',
                  description:
                    'Choose between Tier I (pension account) and Tier II (voluntary savings). Complete KYC and submit required documents.',
                },
                {
                  step: '2',
                  title: 'Make Contributions',
                  description:
                    'Contribute regularly (monthly, quarterly, or annually). Choose your fund manager and asset allocation strategy.',
                },
                {
                  step: '3',
                  title: 'Grow Your Corpus',
                  description:
                    'Your contributions are invested in market-linked instruments. Monitor and adjust your portfolio as needed.',
                },
                {
                  step: '4',
                  title: 'Retirement Benefits',
                  description:
                    'At retirement, receive 60% as lump sum (tax-free) and use 40% to purchase annuity for regular pension income.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
                >
                  <div className="flex items-start gap-4">
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
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Ready to Secure Your{' '}
              <span className="text-unibonds-orange">Retirement?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our experts will help you choose the right NPS plan and guide you
              through the entire process
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20open%20an%20NPS%20account%20with%20Unibonds%20Securities"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-unibonds-orange hover:bg-unibonds-orange/90 text-white px-8">
                  Open NPS Account
                </button>
              </a>
              <a
                href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20schedule%20a%20consultation%20for%20NPS%20at%20Unibonds%20Securities"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-11 rounded-md border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white px-8">
                  Schedule Consultation
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default NPS

