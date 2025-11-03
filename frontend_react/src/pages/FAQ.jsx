import { useState } from 'react'

const FAQ = () => {
  const [openItems, setOpenItems] = useState({})
  const [searchQuery, setSearchQuery] = useState('')

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqSections = [
    {
      title: 'About UniBond',
      items: [
        {
          id: 'about-1',
          question: 'What is UniBond?',
          answer:
            'UniBond (UniBonds Securities) is a SEBI-registered intermediary specializing in fixed-income investments. We make bond investments accessible, transparent, and profitable for retail investors, corporates, and financial intermediaries across India.',
        },
        {
          id: 'about-2',
          question: "What is UniBond's philosophy?",
          answer:
            'Our philosophy is built on three pillars: Transparency, Accessibility, and Trust. We believe that bond investments should be simple, transparent, and available to everyone, not just institutional investors.',
        },
      ],
    },
    {
      title: 'New To Bonds',
      items: [
        {
          id: 'new-1',
          question:
            "I've heard about bonds but never invested—can you explain in simple terms what bonds are and how they actually work?",
          answer:
            'A bond is essentially a loan you give to a company or government. In return, they pay you regular interest (coupon) and return your principal amount at maturity. It\'s like a fixed deposit but with potentially higher returns. When you buy a bond, you become a creditor to the issuer.',
        },
        {
          id: 'new-2',
          question:
            'How do bonds compare to other options like fixed deposits or mutual funds? Are they really safer?',
          answer:
            'Bonds typically offer higher yields than FDs (6.5-9.75% vs 5-7%), better liquidity than FDs, and more predictable returns than equity mutual funds. Government bonds are extremely safe, while corporate bonds carry credit risk depending on the issuer\'s rating (AAA to AA rated bonds are considered relatively safe).',
        },
        {
          id: 'new-3',
          question:
            'What types of bonds can I invest in through Unibond? Are government and corporate bonds both available?',
          answer:
            'Yes! We offer Government Securities (G-Sec), Public Sector Unit (PSU) Bonds, NBFC Bonds, and Corporate Bonds from AAA to AA rated issuers. You can choose based on your risk appetite and return expectations.',
        },
        {
          id: 'new-4',
          question:
            'Do bonds give me monthly interest or is it only at the end of maturity?',
          answer:
            'It depends on the bond. Some bonds pay interest quarterly, semi-annually, or annually. Some zero-coupon bonds pay all returns at maturity. We\'ll clearly explain the payment frequency before you invest.',
        },
        {
          id: 'new-5',
          question:
            'What kind of returns can I expect from bonds compared to something like equity or SIPs?',
          answer:
            'Bonds typically offer 6.5-9.75% annual returns, which is lower than equity\'s potential (10-15% long-term) but more stable and predictable. Bonds are ideal for capital preservation and regular income, while equity is for long-term wealth creation.',
        },
        {
          id: 'new-6',
          question:
            'How safe is it to invest in corporate bonds? What if the company defaults?',
          answer:
            'We only offer bonds from AAA to AA rated companies with strong credit profiles. While no investment is risk-free, high-rated bonds have historically had very low default rates. We also provide complete transparency on credit ratings and financial health of issuers.',
        },
        {
          id: 'new-7',
          question:
            'Is there any lock-in period with bonds? Can I exit early if needed?',
          answer:
            'Bonds can be sold in the secondary market before maturity, providing liquidity. However, market prices may be above or below face value depending on interest rates and market conditions. Government bonds typically have better liquidity than corporate bonds.',
        },
      ],
    },
    {
      title: 'Getting Started',
      items: [
        {
          id: 'start-1',
          question: 'How do I start investing in bonds through Unibond?',
          answer:
            'Starting is simple: 1) Complete KYC documentation, 2) Choose bonds that match your investment goals, 3) Review all terms and risks, 4) Make your investment. Our team will guide you through each step.',
        },
        {
          id: 'start-2',
          question: 'What documents do I need to invest?',
          answer:
            'You\'ll need PAN card, Aadhaar card, bank account details, address proof, and KYC forms. We\'ll help you complete all documentation efficiently.',
        },
        {
          id: 'start-3',
          question: 'What is the minimum investment amount?',
          answer:
            'Minimum investment varies by bond, typically starting from ₹10,000. Some bonds may have higher minimums. We\'ll clearly indicate minimum investment requirements for each bond.',
        },
        {
          id: 'start-4',
          question: 'How long does it take to start investing?',
          answer:
            'Once KYC is complete (typically 24-48 hours), you can start investing immediately. The entire onboarding process usually takes 1-2 business days.',
        },
      ],
    },
    {
      title: 'Investments & Returns',
      items: [
        {
          id: 'invest-1',
          question: 'How are bond returns calculated?',
          answer:
            'Bond returns come from two sources: 1) Regular interest payments (coupon) throughout the bond\'s tenure, and 2) The difference between purchase price and face value at maturity (if bought at a discount). Yield to Maturity (YTM) is the total expected annual return.',
        },
        {
          id: 'invest-2',
          question: 'Are bond returns guaranteed?',
          answer:
            'Interest payments are contractual obligations, but bond prices can fluctuate in secondary markets. If held to maturity, you\'ll receive face value plus all interest payments. Market prices before maturity depend on interest rate movements.',
        },
        {
          id: 'invest-3',
          question: 'What happens if I need money before the bond matures?',
          answer:
            'You can sell bonds in the secondary market. Prices depend on current market interest rates. If rates have risen, you may sell at a discount; if rates have fallen, you may get a premium. Government bonds typically have better liquidity.',
        },
        {
          id: 'invest-4',
          question: 'How are bonds taxed?',
          answer:
            'Interest from bonds is added to your income and taxed according to your tax slab. Capital gains on bond sales are taxed as short-term (if held < 3 years) or long-term (if held > 3 years) capital gains. Government bonds have tax benefits under certain sections.',
        },
      ],
    },
    {
      title: 'Risks & Safety',
      items: [
        {
          id: 'risk-1',
          question: 'What are the main risks of bond investing?',
          answer:
            'Key risks include: 1) Credit risk (issuer default), 2) Interest rate risk (bond prices fall when rates rise), 3) Liquidity risk (difficulty selling before maturity), and 4) Inflation risk (returns may not beat inflation). We help you understand and manage these risks.',
        },
        {
          id: 'risk-2',
          question: 'How do I know if a bond is safe?',
          answer:
            'Check the credit rating: AAA and AA rated bonds are considered very safe. We only offer bonds from highly rated issuers. We also provide complete information on issuer financial health, ratings history, and repayment track record.',
        },
        {
          id: 'risk-3',
          question: 'What happens if a company defaults on bond payments?',
          answer:
            'While rare for high-rated bonds, default means delayed or missed payments. Investors may recover some amount through restructuring or legal proceedings. We carefully screen all bonds and only offer those from issuers with strong credit profiles.',
        },
      ],
    },
  ]

  const filteredSections = faqSections.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <main className="pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-unibonds-navy mb-3 sm:mb-4">
              Frequently Asked{' '}
              <span className="text-unibonds-orange">Questions</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
              Find answers to common questions about bond investments and our
              platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="relative">
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
                className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-9 sm:pl-10 py-4 sm:py-6 text-sm sm:text-base md:text-lg"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-6 sm:space-y-8">
            {filteredSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="font-poppins font-semibold text-xl sm:text-2xl text-unibonds-navy mb-3 sm:mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-lg px-3 sm:px-4 md:px-6 bg-white"
                    >
                      <button
                        type="button"
                        className="flex flex-1 items-center justify-between transition-all hover:underline text-left font-semibold text-sm sm:text-base text-unibonds-navy hover:text-unibonds-orange py-3 sm:py-4 w-full"
                        onClick={() => toggleItem(item.id)}
                      >
                        <span>{item.question}</span>
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
                          className={`lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200 ${
                            openItems[item.id] ? 'rotate-180' : ''
                          }`}
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                      {openItems[item.id] && (
                        <div className="pb-3 sm:pb-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                          {item.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
              <h3 className="font-poppins font-semibold text-lg sm:text-xl text-unibonds-navy mb-3 sm:mb-4">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Our team is here to help. Reach out to us via WhatsApp or email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/919428401861?text=Hey%0AI%20have%20a%20question%20about%20bond%20investments%20at%20Unibonds%20Securities"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-unibonds-orange hover:bg-unibonds-orange/90 text-white px-6 sm:px-8 w-full sm:w-auto">
                    Chat on WhatsApp
                  </button>
                </a>
                <a href="mailto:info@unibonds.com">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-6 sm:px-8 w-full sm:w-auto">
                    Email Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FAQ

