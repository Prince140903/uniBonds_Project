const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-plus w-10 h-10 text-blue-600">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" x2="19" y1="8" y2="14"></line>
          <line x1="22" x2="16" y1="11" y2="11"></line>
        </svg>
      ),
      title: 'Sign Up',
      description: 'Create your account in minutes with simple KYC verification',
      bgColor: 'bg-blue-50',
      delay: '0s',
    },
    {
      number: '02',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-10 h-10 text-green-600">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      ),
      title: 'Explore',
      description: 'Browse curated bonds matching your risk appetite and goals',
      bgColor: 'bg-green-50',
      delay: '0.1s',
    },
    {
      number: '03',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-10 h-10 text-amber-600">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      title: 'Invest',
      description: 'Make secure investments with as low as ₹10,000',
      bgColor: 'bg-amber-50',
      delay: '0.2s',
    },
    {
      number: '04',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-column w-10 h-10 text-purple-600">
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
      title: 'Track',
      description: 'Monitor your portfolio performance in real-time',
      bgColor: 'bg-purple-50',
      delay: '0.3s',
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-14">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
            How It <span className="text-unibonds-orange">Works</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start your investment journey in four simple steps
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-amber-200 to-purple-200 -translate-y-1/2"></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group" style={{ animationDelay: step.delay }}>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform relative z-10`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-unibonds-orange rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-3 text-center group-hover:text-unibonds-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection

