const HeroSection = () => {
  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 fade-in-up">
            <div className="inline-block">
              <span className="bg-unibonds-orange/10 text-unibonds-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                Trusted by 10,000+ Investors
              </span>
            </div>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-unibonds-navy leading-tight">
              Earn Without<br />the
              <span className="text-unibonds-orange"> Burn</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl">
              Strengthen your portfolio with high-yield bond options. Smart
              investing made simple for individuals, corporates & intermediaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20start%20my%20investment%20journey%20with%20Unibonds%20Securities"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md w-full sm:w-auto bg-unibonds-orange hover:bg-unibonds-orange/90 text-white font-semibold px-6 sm:px-8 text-sm sm:text-base group">
                  Start Investing Now
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
                    className="lucide lucide-arrow-right ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
              <a className="w-full sm:w-auto" href="/bonds">
                <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background h-11 rounded-md w-full sm:w-auto border-2 border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white font-semibold px-6 sm:px-8 text-sm sm:text-base">
                  Explore Bonds
                </button>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8">
              <div>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy">
                  8.5%+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Avg. Returns
                </div>
              </div>
              <div className="border-l border-gray-300"></div>
              <div>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy">
                  ₹10K
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Min. Investment
                </div>
              </div>
              <div className="border-l border-gray-300"></div>
              <div>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Bond Options
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-unibonds-orange/20 to-unibonds-navy/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10 space-y-4">
                <div
                  style={{ animationDelay: '0s' }}
                  className="bg-white p-6 rounded-2xl shadow-xl float-animation"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
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
                        className="lucide lucide-trending-up w-6 h-6 text-green-600"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                        <polyline points="16 7 22 7 22 13"></polyline>
                      </svg>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-unibonds-navy">
                        AAA Rated
                      </div>
                      <div className="text-sm text-gray-600">
                        Secure Investments
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ animationDelay: '0.5s' }}
                  className="bg-white p-6 rounded-2xl shadow-xl ml-12 float-animation"
                >
                  <div className="text-sm text-gray-600 mb-2">
                    Current Portfolio Value
                  </div>
                  <div className="text-3xl font-bold text-unibonds-navy">
                    ₹25,00,000
                  </div>
                  <div className="text-sm text-green-600 mt-1">
                    +12.5% This Year
                  </div>
                </div>
                <div
                  style={{ animationDelay: '1s' }}
                  className="bg-white p-6 rounded-2xl shadow-xl float-animation"
                >
                  <div className="text-sm text-gray-600 mb-3">
                    Top Performing Bonds
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">HDFC Bank</span>
                      <span className="text-unibonds-orange font-semibold">8.75%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Bajaj Finance</span>
                      <span className="text-unibonds-orange font-semibold">9.25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

