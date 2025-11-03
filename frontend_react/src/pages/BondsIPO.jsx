const BondsIPO = () => {
  const ipoCards = [
    {
      id: 1,
      name: 'XYZ Housing Finance',
      status: 'Open Now',
      statusColor: 'bg-green-500',
      category: 'NBFC',
      rating: 'AAA',
      issueSize: '750 Cr',
      yield: '8.75',
      openDate: '1 Nov',
      closeDate: '15 Nov',
      minInvestment: '₹1.0L'
    },
    {
      id: 2,
      name: 'ABC Infrastructure Ltd',
      status: 'Upcoming',
      statusColor: 'bg-blue-500',
      category: 'Corporate',
      rating: 'AA+',
      issueSize: '500 Cr',
      yield: '9.5',
      openDate: '15 Nov',
      closeDate: '29 Nov',
      minInvestment: '₹1.0L'
    },
    {
      id: 3,
      name: 'National Power Corporation',
      status: 'Upcoming',
      statusColor: 'bg-blue-500',
      category: 'PSU',
      rating: 'AAA',
      issueSize: '1,000 Cr',
      yield: '8.25',
      openDate: '20 Nov',
      closeDate: '4 Dec',
      minInvestment: '₹1.0L'
    }
  ]

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-8 h-8 text-blue-600">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      title: 'Better Returns',
      description: 'IPO bonds often offer higher yields compared to secondary market',
      bgColor: 'bg-blue-50'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-8 h-8 text-green-600">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: 'Primary Access',
      description: 'Direct allotment from issuer at face value',
      bgColor: 'bg-green-50'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock w-8 h-8 text-purple-600">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Early Bird Advantage',
      description: 'Be among the first investors in quality bonds',
      bgColor: 'bg-purple-50'
    }
  ]

  const steps = [
    {
      number: '1',
      title: 'Complete KYC',
      description: 'Ensure your KYC is complete with PAN, Aadhaar, and bank account details'
    },
    {
      number: '2',
      title: 'Select Bond IPO',
      description: 'Choose from available IPOs and review all offer documents'
    },
    {
      number: '3',
      title: 'Submit Application',
      description: 'Fill application form with desired investment amount and UPI/bank details'
    },
    {
      number: '4',
      title: 'Allotment & Credit',
      description: 'Post closure, bonds are allotted and credited to your demat account'
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 mb-4 bg-green-500 text-white px-4 py-2">
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
                className="lucide lucide-bell w-4 h-4 mr-2 inline"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
              </svg>
              New Issues Available
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
              Bonds <span className="text-unibonds-orange">IPO</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get early access to primary market bond offerings with attractive
              yields and secure your investments at issue price
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open & Upcoming Issues */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-2">
              Open & Upcoming
              <span className="text-unibonds-orange"> Issues</span>
            </h2>
            <p className="text-gray-600">
              Subscribe to bond IPOs currently open or opening soon
            </p>
          </div>
          <div className="space-y-6">
            {ipoCards.map((ipo) => (
              <div
                key={ipo.id}
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-poppins font-bold text-xl text-unibonds-navy">
                            {ipo.name}
                          </h3>
                          <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 ${ipo.statusColor}`}>
                            {ipo.status}
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            {ipo.category}
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            {ipo.rating}
                          </div>
                          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            Issue Size: {ipo.issueSize}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
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
                          className="lucide lucide-trending-up w-5 h-5 text-gray-400"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-600">Yield</div>
                          <div className="font-bold text-unibonds-orange">{ipo.yield}%</div>
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
                          className="lucide lucide-calendar w-5 h-5 text-gray-400"
                        >
                          <path d="M8 2v4"></path>
                          <path d="M16 2v4"></path>
                          <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                          <path d="M3 10h18"></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-600">Open - Close</div>
                          <div className="font-semibold text-sm text-unibonds-navy">
                            {ipo.openDate} - {ipo.closeDate}
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
                          className="lucide lucide-indian-rupee w-5 h-5 text-gray-400"
                        >
                          <path d="M6 3h12"></path>
                          <path d="M6 8h12"></path>
                          <path d="m6 13 8.5 8"></path>
                          <path d="M6 13h3"></path>
                          <path d="M9 13c6.667 0 6.667-10 0-10"></path>
                        </svg>
                        <div>
                          <div className="text-sm text-gray-600">Min Investment</div>
                          <div className="font-semibold text-unibonds-navy">
                            {ipo.minInvestment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 lg:min-w-[200px]">
                    {ipo.status === 'Open Now' ? (
                      <>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-unibonds-orange hover:bg-unibonds-orange/90 w-full">
                          Apply Now
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                          View Details
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-unibonds-orange hover:bg-unibonds-orange/90 w-full">
                          Get Notified
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                          View Details
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
            How to Apply for <span className="text-unibonds-orange">Bond IPO</span>
          </h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-unibonds-orange text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-unibonds-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
            Want to Get Notified About
            <span className="text-unibonds-orange"> New IPOs?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss an opportunity to invest
            in quality bond IPOs
          </p>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md bg-unibonds-orange hover:bg-unibonds-orange/90 px-8">
            Subscribe to IPO Alerts
          </button>
        </div>
      </section>
    </div>
  )
}

export default BondsIPO

