const EstatePlanning = () => {
  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <h1 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
                Estate <span className="text-unibonds-orange">Planning</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Secure your legacy with strategic estate planning and wealth
                transfer solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
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
                    className="lucide lucide-file-text w-8 h-8 text-purple-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Will Drafting
                </h3>
                <p className="text-gray-600 text-sm">Legal will preparation</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
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
                    className="lucide lucide-house w-8 h-8 text-purple-600"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Trust Formation
                </h3>
                <p className="text-gray-600 text-sm">
                  Family & charitable trusts
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
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
                    className="lucide lucide-users w-8 h-8 text-purple-600"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Succession Planning
                </h3>
                <p className="text-gray-600 text-sm">Business continuity</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all text-center">
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
                    className="lucide lucide-shield w-8 h-8 text-purple-600"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-lg text-unibonds-navy mb-2">
                  Tax Optimization
                </h3>
                <p className="text-gray-600 text-sm">Minimize estate taxes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <h2 className="font-poppins font-bold text-3xl text-unibonds-navy mb-8 text-center">
              Our <span className="text-unibonds-orange">Services</span>
            </h2>
            <div className="space-y-6">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold text-xl text-unibonds-navy mb-3">
                  Will Drafting & Registration
                </h3>
                <p className="text-gray-600 mb-4">
                  Professional assistance in drafting legally valid wills ensuring
                  your assets are distributed according to your wishes. We provide
                  guidance on executors, beneficiaries, and guardianship
                  appointments.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Legal documentation support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Witness arrangement
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Registration assistance
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Regular updates & amendments
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold text-xl text-unibonds-navy mb-3">
                  Trust Formation & Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Set up family trusts or charitable trusts to manage and protect
                  your wealth for future generations while optimizing tax
                  implications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Revocable & irrevocable trusts
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Charitable trust formation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Trustee selection guidance
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Ongoing trust administration
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <h3 className="font-semibold text-xl text-unibonds-navy mb-3">
                  Business Succession Planning
                </h3>
                <p className="text-gray-600 mb-4">
                  Ensure smooth transition of your business to the next generation
                  or chosen successors with minimal disruption and tax liability.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Succession strategy development
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Business valuation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Buy-sell agreements
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
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
                      className="lucide lucide-check w-4 h-4 text-green-600"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Leadership transition planning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-poppins font-semibold text-3xl text-unibonds-navy mb-6">
              Secure Your <span className="text-unibonds-orange">Legacy</span>
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Start planning for your family's future today with our expert
              estate planning services
            </p>
            <a
              href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20Know%20more%20about%20Estate%20Planning%20services%20at%20Unibonds%20Securities"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-11 rounded-md px-8 bg-unibonds-orange hover:bg-unibonds-orange/90">
                Schedule Consultation
              </button>
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default EstatePlanning

