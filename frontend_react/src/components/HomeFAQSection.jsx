import { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeFAQSection = () => {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const faqs = [
    {
      id: 'faq-1',
      question: 'What are bonds and how do they work?',
      answer:
        'Bonds are fixed-income securities where you lend money to a government or corporation in exchange for periodic interest payments and the return of your principal at maturity. They offer predictable returns and are generally lower risk than stocks.',
    },
    {
      id: 'faq-2',
      question: 'What is the minimum investment required?',
      answer:
        'The minimum investment varies by bond, typically starting from ₹1 lakh. Some bonds may have lower or higher minimum investment requirements. Please check individual bond details for specific minimum investment amounts.',
    },
    {
      id: 'faq-3',
      question: 'How safe are bond investments?',
      answer:
        'Bond safety depends on the issuer\'s credit rating. Government securities (G-Sec) are considered the safest, followed by AAA-rated bonds from reputable corporations. Unibonds curates bonds with ratings from AAA to AA, ensuring quality investment options.',
    },
    {
      id: 'faq-4',
      question: 'Can I sell my bonds before maturity?',
      answer:
        'Yes, many bonds are tradable on secondary markets. However, liquidity depends on the specific bond. Tradable bonds can be sold on exchanges, but you may receive more or less than your initial investment depending on market conditions.',
    },
    {
      id: 'faq-5',
      question: 'How do I get started with Unibonds?',
      answer:
        'Getting started is easy! Simply sign up on our platform, complete your KYC verification, and you can start investing in bonds. Our team provides personalized guidance to help you select bonds that match your investment goals and risk profile.',
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
            Frequently Asked
            <span className="text-unibonds-orange"> Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about bond investments
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border rounded-lg px-6 bg-white hover:shadow-md transition-shadow"
                >
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-between transition-all hover:underline text-left font-semibold text-unibonds-navy hover:text-unibonds-orange py-4 w-full"
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span>{faq.question}</span>
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
                        openItems[faq.id] ? 'rotate-180' : ''
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {openItems[faq.id] && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/faq">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-unibonds-navy text-unibonds-navy hover:bg-unibonds-navy hover:text-white">
                  View All FAQs
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 bg-gradient-to-br from-orange-50 to-white sticky top-24">
              <h3 className="font-poppins font-semibold text-xl text-unibonds-navy mb-4">
                Send Us a Query
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    className="text-sm font-medium leading-none text-unibonds-navy mb-2 block"
                    htmlFor="faq-name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unibonds-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="faq-name"
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none text-unibonds-navy mb-2 block"
                    htmlFor="faq-email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unibonds-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="faq-email"
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    className="text-sm font-medium leading-none text-unibonds-navy mb-2 block"
                    htmlFor="faq-message"
                  >
                    Message
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-unibonds-orange focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="faq-message"
                    required
                    placeholder="Your question or message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 w-full bg-unibonds-orange hover:bg-unibonds-orange/90"
                  type="submit"
                >
                  Send Query
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFAQSection

