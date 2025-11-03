const Careers = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <main className="pb-8 sm:pb-12 px-3 sm:px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-unibonds-orange/10 rounded-full mb-4 sm:mb-6">
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
                  className="lucide lucide-briefcase w-8 h-8 sm:w-10 sm:h-10 text-unibonds-orange"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-unibonds-navy mb-4 sm:mb-6">
                Careers at <span className="text-unibonds-orange">Unibonds</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Be part of a team that's revolutionizing bond investments in
                India
              </p>
            </div>
            <div className="rounded-lg border bg-card shadow-sm p-8 sm:p-12 md:p-16 bg-gradient-to-br from-unibonds-navy to-blue-900 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full mb-6 sm:mb-8">
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
                    className="lucide lucide-rocket w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">
                  Coming Soon
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8">
                  We're expanding! Exciting opportunities await.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-blue-200 leading-relaxed mb-8 sm:mb-10">
                  We're building an amazing team of talented individuals who
                  are passionate about transforming the fixed-income investment
                  landscape. Join us in our mission to make bond investments
                  accessible, transparent, and rewarding for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="mailto:careers@unibonds.com">
                    <button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-unibonds-orange hover:bg-unibonds-orange/90 text-white px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto">
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
                        className="lucide lucide-mail w-4 h-4 sm:w-5 sm:h-5 mr-2"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      Email Your Resume
                    </button>
                  </a>
                  <p className="text-blue-200 text-sm sm:text-base">
                    careers@unibonds.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-8 sm:py-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-poppins font-bold text-2xl sm:text-3xl text-unibonds-navy mb-6 sm:mb-8 text-center">
              Why Work With <span className="text-unibonds-orange">Us?</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
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
                    className="lucide lucide-target w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-base sm:text-lg text-unibonds-navy mb-2">
                  Impactful Work
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Shape the future of India's bond investment ecosystem
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
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
                    className="lucide lucide-users w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-base sm:text-lg text-unibonds-navy mb-2">
                  Great Team
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Work with passionate professionals from finance and tech
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 sm:p-6 hover:shadow-xl transition-all text-center sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
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
                    className="lucide lucide-rocket w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-base sm:text-lg text-unibonds-navy mb-2">
                  Growth & Learning
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Continuous learning opportunities and career advancement
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-8 sm:py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="font-poppins font-semibold text-2xl sm:text-3xl text-unibonds-navy mb-4 sm:mb-6 px-4">
              Roles We're Looking{' '}
              <span className="text-unibonds-orange">For</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              We're actively hiring for multiple positions across various
              departments
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto mb-8 sm:mb-12">
              {[
                'Financial Analysts',
                'Business Development',
                'Technology & Engineering',
                'Customer Success',
                'Marketing & Content',
                'Operations & Compliance',
              ].map((role, index) => (
                <div
                  key={index}
                  className="rounded-lg border bg-card text-card-foreground shadow-sm p-3 sm:p-4 hover:shadow-lg transition-all"
                >
                  <p className="font-semibold text-unibonds-navy text-xs sm:text-sm">
                    {role}
                  </p>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-unibonds-navy mb-3 sm:mb-4">
                Interested in Joining Us?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Send your resume to{' '}
                <a
                  href="mailto:careers@unibonds.com"
                  className="text-unibonds-orange hover:underline font-semibold"
                >
                  careers@unibonds.com
                </a>
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                We'll reach out to you as soon as suitable positions open up
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Careers

