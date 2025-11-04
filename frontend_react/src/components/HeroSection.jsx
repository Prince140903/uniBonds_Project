import SplitText from "./SplitText";
import CountUp from "./CountUp";
import CardSwap, { Card } from "./CardSwap";

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <section className="relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[2fr_2fr] gap-8 lg:gap-6 items-center">
          <div className="space-y-4 sm:space-y-6 fade-in-up">
            <div className="inline-block">
              <span className="bg-unibonds-orange/10 text-unibonds-orange px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                Trusted by 10,000+ Investors
              </span>
            </div>
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-unibonds-navy leading-tight">
              <SplitText
                text="Earn Without"
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-unibonds-navy leading-tight inline-block"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
                onLetterAnimationComplete={handleAnimationComplete}
              />
              <br />
              <SplitText
                text="the "
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-unibonds-navy leading-tight inline-block"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
              <SplitText
                text="Burn"
                className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-unibonds-orange leading-tight inline-block"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="left"
              />
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
                  <CountUp
                    from={0}
                    to={8}
                    separator=""
                    direction="up"
                    duration={1}
                    decimals={0}
                    suffix=".5%+"
                    className="count-up-text"
                  />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Avg. Returns
                </div>
              </div>
              <div className="border-l border-gray-300"></div>
              <div>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy">
                  <CountUp
                    from={0}
                    to={10}
                    separator=","
                    direction="up"
                    duration={1}
                    prefix="₹"
                    suffix="K"
                    className="count-up-text"
                  />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Min. Investment
                </div>
              </div>
              <div className="border-l border-gray-300"></div>
              <div>
                <div className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy">
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    suffix="+"
                    className="count-up-text"
                  />
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Bond Options
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block flex items-center">
            <div className="relative w-full pr-4">
              <div className="absolute inset-0 bg-gradient-to-br from-unibonds-orange/20 to-unibonds-navy/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
                <CardSwap
                  cardDistance={40}
                  verticalDistance={60}
                  delay={5000}
                  pauseOnHover={true}
                >
                  <Card>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield-check w-7 h-7 text-green-600"
                        >
                          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                          <path d="M9 12l2 2 4-4"></path>
                        </svg>
                      </div>
                      <div className="text-3xl font-bold text-unibonds-navy mb-2">
                        AAA Rated
                      </div>
                      <div className="text-base text-gray-600">
                        Secure Investments with Highest Credit Rating
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex flex-col items-center text-center">
                      <div className="text-sm text-gray-600 mb-3 uppercase tracking-wide font-medium">
                        Current Portfolio Value
                      </div>
                      <div className="text-4xl font-bold text-unibonds-navy mb-2">
                        ₹25,00,000
                      </div>
                      <div className="flex items-center gap-2 text-base text-green-600 font-semibold">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-trending-up"
                        >
                          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                          <polyline points="16 7 22 7 22 13"></polyline>
                        </svg>
                        <span>+12.5% This Year</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        Total returns on investment
                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex flex-col">
                      <div className="text-sm text-gray-600 mb-4 uppercase tracking-wide font-medium text-center">
                        Top Performing Bonds
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <span className="text-blue-600 font-bold text-sm">H</span>
                            </div>
                            <div>
                              <div className="font-semibold text-unibonds-navy">HDFC Bank</div>
                              <div className="text-xs text-gray-500">Corporate Bond</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-unibonds-orange">8.75%</div>
                            <div className="text-xs text-gray-500">Annual Yield</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                              <span className="text-amber-600 font-bold text-sm">B</span>
                            </div>
                            <div>
                              <div className="font-semibold text-unibonds-navy">Bajaj Finance</div>
                              <div className="text-xs text-gray-500">Corporate Bond</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-unibonds-orange">9.25%</div>
                            <div className="text-xs text-gray-500">Annual Yield</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

