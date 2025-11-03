const Insurance = () => {
  const insuranceTypes = [
    {
      icon: 'shield',
      title: 'Term Insurance',
      description: 'Pure protection plan with high coverage at affordable premiums',
      coverage: 'Up to ₹5 Cr',
      premium: 'From ₹500/month',
    },
    {
      icon: 'heart',
      title: 'Health Insurance',
      description: 'Medical coverage for you and your family with cashless hospitalization',
      coverage: 'Up to ₹50 L',
      premium: 'Family plans available',
    },
    {
      icon: 'trending-up',
      title: 'ULIP Plans',
      description: 'Investment-linked plans combining insurance with market returns',
      coverage: 'Life cover + Returns',
      premium: 'Flexible premiums',
    },
    {
      icon: 'users',
      title: 'Group Insurance',
      description: 'Corporate insurance solutions for employee benefits',
      coverage: 'Customized',
      premium: 'Bulk discounts',
    },
  ]

  const benefits = [
    'Compare plans from top insurers',
    'Instant online policy issuance',
    'Dedicated claim assistance',
    'Tax benefits under Section 80C & 80D',
    'Flexible premium payment options',
    'Free health check-ups',
  ]

  const getIcon = (iconName) => {
    const icons = {
      shield: (
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
      ),
      heart: (
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
          className="lucide lucide-heart w-8 h-8 text-green-600"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
        </svg>
      ),
      'trending-up': (
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
      ),
      users: (
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
          className="lucide lucide-users w-8 h-8 text-green-600"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    }
    return icons[iconName] || null
  }

  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-green-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                Insurance <span className="text-unibonds-orange">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive insurance coverage for complete financial protection
                of you and your loved ones
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {insuranceTypes.map((type, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {getIcon(type.icon)}
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 min-h-[60px]">{type.description}</p>
                  <div className="space-y-1 text-sm">
                    <div className="text-gray-600">
                      Coverage: <span className="font-semibold text-unibonds-navy">{type.coverage}</span>
                    </div>
                    <div className="text-gray-600">
                      Premium: <span className="font-semibold text-unibonds-orange">{type.premium}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Insurance */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              Why Choose <span className="text-unibonds-orange">Our Insurance</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
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

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Get the <span className="text-unibonds-orange">Right Coverage</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our insurance advisors will help you choose the perfect plan for
              your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-unibonds-orange hover:bg-unibonds-orange/90">
                Get Free Quote
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
                Compare Plans
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Insurance

