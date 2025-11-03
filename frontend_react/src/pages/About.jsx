import { useState } from 'react'

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-20">
      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-unibonds-navy mb-6">
                About
                <span className="text-unibonds-orange"> UniBonds Securities</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                UniBonds Securities is your trusted partner in the world of
                fixed-income investments. Based in Ahmedabad, we specialize in
                making bond investments accessible, transparent, and profitable
                for retail investors, corporates, and financial intermediaries
                across India.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                With deep expertise in debt markets and a commitment to client
                success, we curate high-quality bond options ranging from
                Government Securities to Corporate Bonds, PSU Bonds, and NBFC
                offerings.
              </p>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all border-t-4 border-t-unibonds-orange">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target w-8 h-8 text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="6"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To democratize bond investments in India by providing easy
                  access to high-quality fixed-income securities with complete
                  transparency, expert guidance, and superior customer service.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all border-t-4 border-t-green-500">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users w-8 h-8 text-green-600">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-3">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To become India's most trusted and preferred bond
                  investment platform, empowering millions of investors to build
                  stable wealth through smart fixed-income strategies.
                </p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all border-t-4 border-t-purple-500">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award w-8 h-8 text-purple-600">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-3">
                  Our Values
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Transparency, integrity, customer-centricity, continuous
                  innovation, and regulatory compliance form the foundation of
                  everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose UniBonds */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-unibonds-navy mb-8 text-center">
                Why Choose <span className="text-unibonds-orange">UniBonds</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: 'trending-up', title: 'Curated Selection', description: 'Handpicked bonds across G-Sec, PSU, NBFC, and Corporate categories with ratings from AAA to AA, matching your investment goals and risk appetite.', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
                  { icon: 'users', title: 'Expert Guidance', description: 'Our team of seasoned financial experts provides personalized assistance throughout your investment journey, from selection to maturity.', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
                  { icon: 'shield', title: 'Transparent Platform', description: 'No hidden charges, complete disclosure of all terms, yields, and risks before investment. What you see is what you get.', bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
                  { icon: 'circle-check', title: 'Regulatory Compliance', description: 'SEBI registered intermediary ensuring all transactions meet the highest regulatory and compliance standards for your protection.', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
                  { icon: 'clock', title: 'Quick Processing', description: 'Streamlined KYC and investment process ensures you can start investing in bonds within 24-48 hours of account setup.', bgColor: 'bg-rose-50', iconColor: 'text-rose-600' },
                  { icon: 'briefcase', title: 'Portfolio Management', description: 'Track your investments, monitor yields, and receive regular updates on your bond portfolio through our intuitive platform.', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600' },
                ].map((feature, index) => (
                  <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        {getIconSvg(feature.icon, feature.iconColor)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-unibonds-navy mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-unibonds-navy mb-8 text-center">
                Our <span className="text-unibonds-orange">Services</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Bond Investments',
                    description: 'Access to a wide range of government securities, PSU bonds, NBFC bonds, and top-rated corporate bonds with yields ranging from 6.5% to 9.75%.',
                    items: ['Government Securities (G-Sec)', 'Public Sector Unit (PSU) Bonds', 'NBFC & Corporate Bonds', 'Bond IPOs & New Issues']
                  },
                  {
                    title: 'Financial Advisory',
                    description: 'Personalized investment advice tailored to your financial goals, risk profile, and investment horizon.',
                    items: ['Portfolio Analysis & Planning', 'Risk Assessment & Management', 'Tax-efficient Strategies', 'Regular Performance Reviews']
                  },
                  {
                    title: 'Wealth Management',
                    description: 'Comprehensive wealth solutions including insurance, NPS, structured products, and estate planning for holistic financial security.',
                    items: ['Retirement Planning (NPS)', 'Insurance Solutions', 'Estate Planning Services', 'Structured Products']
                  },
                  {
                    title: 'Corporate Solutions',
                    description: 'Specialized services for corporate treasuries, HNIs, and institutional investors looking to optimize their fixed-income portfolios.',
                    items: ['Treasury Management', 'Bulk Investment Solutions', 'Loans Against Securities', 'Dedicated Relationship Manager']
                  }
                ].map((service, index) => (
                  <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all">
                    <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-4 h-4 text-unibonds-orange mt-0.5 flex-shrink-0">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-unibonds-navy mb-3 text-center">
                Get in <span className="text-unibonds-orange">Touch</span>
              </h2>
              <p className="text-center text-gray-600 mb-10">
                Have questions? We're here to help. Reach out to us and
                we'll get back to you shortly.
              </p>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: 'map-pin',
                      title: 'Office Address',
                      content: (
                        <>
                          UniBonds Securities<br />
                          303 - Suvidha Eternity<br />
                          Hirabaug Crossing Main Road<br />
                          Ambawadi, Ahmedabad - 380006<br />
                          Gujarat, India
                        </>
                      ),
                      bgColor: 'bg-blue-50',
                      iconColor: 'text-blue-600'
                    },
                    {
                      icon: 'phone',
                      title: 'Phone',
                      content: (
                        <>
                          <a href="tel:+919429802484" className="hover:text-unibonds-orange">+91 94298 02484</a><br />
                          Mon - Fri: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM
                        </>
                      ),
                      bgColor: 'bg-green-50',
                      iconColor: 'text-green-600'
                    },
                    {
                      icon: 'mail',
                      title: 'Email',
                      content: (
                        <>
                          General Inquiries: <a href="mailto:info@unibonds.com" className="hover:text-unibonds-orange">info@unibonds.com</a><br />
                          Support: <a href="mailto:support@unibonds.com" className="hover:text-unibonds-orange">support@unibonds.com</a><br />
                          Careers: <a href="mailto:careers@unibonds.com" className="hover:text-unibonds-orange">careers@unibonds.com</a>
                        </>
                      ),
                      bgColor: 'bg-purple-50',
                      iconColor: 'text-purple-600'
                    }
                  ].map((contact, index) => (
                    <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          {getContactIconSvg(contact.icon, contact.iconColor)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-unibonds-navy mb-2">
                            {contact.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {contact.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all">
                  <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium leading-none" htmlFor="contact-name">
                          Name *
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                          id="contact-name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium leading-none" htmlFor="contact-email">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                          id="contact-email"
                          name="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="contact-phone">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                        id="contact-phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium leading-none" htmlFor="contact-message">
                        Message *
                      </label>
                      <textarea
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                        id="contact-message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90 text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-8 bg-unibonds-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-300">
              <strong>Disclaimer:</strong> Investments in bonds are subject to
              market risks including credit risk, interest rate risk, and
              liquidity risk. Past performance is not indicative of future
              results. Please read all offer documents carefully before investing.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

// Helper function to get icon SVGs
const getIconSvg = (iconName, iconColor) => {
  const icons = {
    'trending-up': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-trending-up w-6 h-6 ${iconColor}`}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
        <polyline points="16 7 22 7 22 13"></polyline>
      </svg>
    ),
    'users': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-users w-6 h-6 ${iconColor}`}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    'shield': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-shield w-6 h-6 ${iconColor}`}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
      </svg>
    ),
    'circle-check': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-circle-check w-6 h-6 ${iconColor}`}>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    'clock': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-clock w-6 h-6 ${iconColor}`}>
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    'briefcase': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-briefcase w-6 h-6 ${iconColor}`}>
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        <rect width="20" height="14" x="2" y="6" rx="2"></rect>
      </svg>
    ),
  }
  return icons[iconName] || icons['trending-up']
}

const getContactIconSvg = (iconName, iconColor) => {
  const icons = {
    'map-pin': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-map-pin w-6 h-6 ${iconColor}`}>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    'phone': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-phone w-6 h-6 ${iconColor}`}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
    'mail': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`lucide lucide-mail w-6 h-6 ${iconColor}`}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  }
  return icons[iconName] || icons['map-pin']
}

export default About

