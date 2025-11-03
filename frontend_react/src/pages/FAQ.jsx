import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqSections = [
    {
      title: "About UniBond",
      items: [
        {
          id: "about-1",
          question: "What is UniBond?",
          answer:
            "UniBond is a dedicated digital platform focused on simplifying bond investments for individual investors, corporates, and financial intermediaries. We bring together a wide range of fixed-income products, including Government Bonds, Corporate Bonds, Municipal Bonds, Tax-Free Bonds, and Market-Linked Debentures, all in one seamless ecosystem. At UniBond, we believe that bond investing should be transparent, accessible, and tailored to your financial goals.",
        },
        {
          id: "about-2",
          question: "What is UniBond's philosophy?",
          answer:
            "At UniBond, we understand the evolving needs and risk appetites of investors seeking to build long-term wealth through stable, fixed-income solutions. With a deep focus on bonds, our platform analyzes credit quality, yield potential, and duration risk to curate smart combinations tailored to every investor profile. Through a single, user-friendly interface, we offer a simplified ecosystem where every bond choice is connected to a financial goal, decisions are backed by insights, and actions—from discovery to execution—are seamless.",
        },
      ],
    },
    {
      title: "New To Bonds",
      items: [
        {
          id: "new-1",
          question:
            "I've heard about bonds but never invested—can you explain in simple terms what bonds are and how they actually work?",
          answer:
            "Sure! Think of a bond like a loan you give to a company or government. They use your money, pay you regular interest, and return the full amount after a fixed period. It's predictable and safer than stocks—great for steady income and long-term planning.",
        },
        {
          id: "new-2",
          question:
            "How do bonds compare to other options like fixed deposits or mutual funds? Are they really safer?",
          answer:
            "Yes, bonds are considered safer, especially government bonds. They offer better flexibility than FDs and lower risk than mutual funds. Plus, you know exactly what interest you'll earn and when—it's a fixed-income investment with less market volatility.",
        },
        {
          id: "new-3",
          question:
            "What types of bonds can I invest in through Unibond? Are government and corporate bonds both available?",
          answer:
            "Absolutely! On UNIBOND, you can invest in government securities (G-Secs), highly rated corporate bonds, tax-free bonds, and more. We've got options for different goals—whether you want monthly income, tax benefits, or capital preservation. It's all laid out clearly on our platform.",
        },
        {
          id: "new-4",
          question:
            "Do bonds give me monthly interest or is it only at the end of maturity?",
          answer:
            "That depends on the bond. Some pay interest monthly, quarterly, or annually, while others are cumulative and pay at maturity. You get to choose based on what suits you—whether you want regular income or a lump sum at the end.",
        },
        {
          id: "new-5",
          question:
            "What kind of returns can I expect from bonds compared to something like equity or SIPs?",
          answer:
            "Bonds usually give stable returns in the 6–10% range, depending on the type. They're not as high-risk or high-return as equities or SIPs, but that's the beauty—they're predictable, low-volatility, and ideal for steady income without the market swings.",
        },
        {
          id: "new-6",
          question:
            "How safe is it to invest in corporate bonds? What if the company defaults?",
          answer:
            "Corporate bond safety depends on the credit rating. AAA-rated bonds are considered very safe. We show all ratings on UNIBOND, so you can make an informed choice. Defaults are rare with high-rated companies, but it's smart to diversify your investments.",
        },
        {
          id: "new-7",
          question:
            "Is there any lock-in period with bonds? Can I exit early if needed?",
          answer:
            "Generally, there's no lock-in, but bonds do have a maturity date. If you need to exit early, you can sell on the secondary market. Liquidity depends on the bond, so while you can exit, you may get a slightly different return.",
        },
        {
          id: "new-8",
          question:
            "What is bond rating and how do I know which bond is good for me?",
          answer:
            "Bond ratings (like AAA, AA, etc.) show how reliable the issuer is in repaying. Higher-rated bonds are safer but may offer lower returns. On UNIBOND, we show you the ratings clearly so you can balance safety and return based on your goals.",
        },
        {
          id: "new-9",
          question:
            "What's the minimum amount I need to start investing in bonds on Unibond?",
          answer:
            "You can get started with as little as ₹10,000 depending on the bond. Some are issued in multiples too. It's flexible—you don't need a huge amount to begin. UNIBOND makes it easy for first-timers to start small and grow.",
        },
      ],
    },
    {
      title: "Investment Process",
      items: [
        {
          id: "process-1",
          question:
            "Can you walk me through how I can buy my first bond using Unibonds?",
          answer:
            "Sure! Just sign up, complete your KYC, browse bonds, and pick one that fits your needs. Add it to your cart, pay securely online, and you're done! It's a seamless process—and if you need help, our team is just a call away.",
        },
        {
          id: "process-2",
          question:
            "Is it possible to compare different bonds based on returns, risk, and tenure on your site?",
          answer:
            "Absolutely! UNIBOND lets you filter and compare bonds by interest rate, risk rating, tenure, issuer type, and more. You'll see side-by-side comparisons so you can choose confidently based on your income needs and risk appetite.",
        },
        {
          id: "process-3",
          question:
            "Do I need a demat account to invest in bonds through Unibond?",
          answer:
            "For most listed bonds, yes, a demat account is required. But don't worry—we'll help you open one if you don't already have it. Some unlisted bonds may be available without one too, depending on the offering.",
        },
        {
          id: "process-4",
          question:
            "How secure is my investment and personal data on your platform?",
          answer:
            "Very secure. We use bank-grade encryption and follow industry best practices to protect your personal and investment data. Plus, all transactions are routed through regulated channels. Your trust and safety are our top priorities.",
        },
        {
          id: "process-5",
          question:
            "I'm not very tech-savvy—can someone from your team help me make the investment?",
          answer:
            "Of course! Our support team can walk you through everything—from selecting a bond to completing the payment. You can reach us via phone, WhatsApp, or email. We make sure you're never alone in the process.",
        },
        {
          id: "process-6",
          question:
            "Is everything done online, or do you have offline/assisted support for bond investing?",
          answer:
            "While the platform is fully digital, we absolutely offer assisted support. If you prefer personal help, our advisors can guide you step-by-step over a call or even set up the investment for you once you approve.",
        },
        {
          id: "process-7",
          question:
            "If I invest today, how long does it take for the bond to reflect in my account?",
          answer:
            "Typically, it takes 1–3 business days for the bond to be allotted and show up in your account or demat. We'll keep you posted via email/SMS during every step so you always know the status.",
        },
        {
          id: "process-8",
          question:
            "What happens if I want to exit or sell a bond before its maturity on Unibond?",
          answer:
            "If the bond is listed, you can sell it on the exchange via your demat account. Liquidity depends on demand, so you may get a slightly different price. For unlisted bonds, early exit options vary by issuer.",
        },
      ],
    },
    {
      title: "Risk, Returns & Advisory",
      items: [
        {
          id: "risk-1",
          question:
            "How do you help someone like me pick the right bond based on my risk appetite?",
          answer:
            "We make it easy! Each bond on UNIBOND is tagged with its risk level and credit rating. Based on whether you're conservative or open to higher returns, our filters and advisors help you shortlist bonds that align with your risk comfort and financial goals.",
        },
        {
          id: "risk-2",
          question:
            "Do you offer any advisory or portfolio suggestions based on my financial goals?",
          answer:
            "Yes! You can get personalized suggestions based on your goals—whether it's monthly income, wealth preservation, or tax savings. Our advisory team is available to guide you in building a bond portfolio that matches your income needs and investment timeline.",
        },
        {
          id: "risk-3",
          question:
            "What happens if the bond issuer goes bankrupt—do I lose all my money?",
          answer:
            "If an issuer defaults, you may lose part or all of the invested amount, depending on the recovery process. That's why we highlight credit ratings and recommend diversifying across issuers and sticking to high-rated bonds if safety is your top priority.",
        },
        {
          id: "risk-4",
          question:
            "Are bond investments through Unibonds eligible for tax benefits under 80C or other sections?",
          answer:
            "Some specific bonds—like tax-saving infrastructure bonds or capital gain bonds (Section 54EC)—do offer tax benefits. While not all bonds are eligible under Section 80C, we clearly mark tax-saving options so you can invest wisely with tax planning in mind.",
        },
        {
          id: "risk-5",
          question:
            "Can you explain how cumulative and non-cumulative bonds are different?",
          answer:
            "Sure! Cumulative bonds pay you all the interest plus principal at maturity—ideal if you don't need regular payouts. Non-cumulative bonds give you periodic interest (monthly, quarterly, etc.). Choose cumulative for long-term growth, and non-cumulative for steady income during the tenure.",
        },
      ],
    },
    {
      title: "Support, Documentation & Legal",
      items: [
        {
          id: "support-1",
          question:
            "What documents do I need to open an account and invest in bonds on Unibond?",
          answer:
            "Just the basics! You'll need your PAN card, Aadhaar (or other valid address proof), a bank account, and a demat account. The KYC process is quick, fully digital, and takes just a few minutes.",
        },
        {
          id: "support-2",
          question:
            "Are the bonds I buy through you listed on a stock exchange?",
          answer:
            "Many of them are! We offer both listed and unlisted bonds. Listed bonds can be traded on exchanges like BSE or NSE, giving you more liquidity. Unlisted bonds are typically held till maturity but often offer attractive interest. We clearly label them for easy selection.",
        },
        {
          id: "support-3",
          question:
            "If I face any issue with my investment, how do I raise a complaint or get support?",
          answer:
            "We've got you covered! You can reach our support team via email or phone. We're prompt and responsive. Plus, your dashboard has a help section for quick queries. For serious concerns, we escalate directly to partner platforms or issuing agencies on your behalf.",
        },
        {
          id: "support-4",
          question:
            "Do I get a physical bond certificate or is everything maintained digitally?",
          answer:
            "Everything is digital now! Once your bond is allotted, it's held in your demat account. You can view and download your holdings anytime from your UNIBOND dashboard or your broker's platform. No paperwork, no hassle—just seamless digital investing.",
        },
      ],
    },
    {
      title: "Invest Smart, File Smarter: Bond Tax FAQs",
      items: [
        {
          id: "tax-1",
          question:
            "Will I have to pay tax on the interest I earn from the bonds I buy through Unibond?",
          answer:
            'Yes, interest from most bonds is taxable as per your income tax slab. It\'s treated as "Income from Other Sources" and added to your total income. Some bonds, like tax-free municipal bonds, may be exempt. We highlight the tax status clearly on the platform.',
        },
        {
          id: "tax-2",
          question:
            "Is TDS (Tax Deducted at Source) applicable on bond interest payouts? If yes, how much?",
          answer:
            "Yes, TDS is applicable on certain bonds, usually at 10% if your PAN is updated. If not, it may be deducted at 20%. TDS applies only when interest exceeds the specified threshold, and it's adjusted when you file your income tax return.",
        },
        {
          id: "tax-3",
          question:
            "Can I claim any tax exemption if I invest in tax-saving bonds through Unibond?",
          answer:
            "Yes, certain bonds—like Section 54EC Capital Gain Bonds—offer tax exemptions. They help you save tax on capital gains from property sales. These are clearly listed on UNIBOND, and our team can guide you on eligibility and documentation required to claim the exemption.",
        },
        {
          id: "tax-4",
          question:
            "What's the difference between taxable bonds and tax-free bonds? Do you offer both?",
          answer:
            "Taxable bonds generate interest that's fully taxable. Tax-free bonds—like those issued by government-backed entities—offer tax-exempt interest under Section 10(15)(iv). UNIBOND offers both types and labels them clearly so you can invest according to your income and tax preferences.",
        },
        {
          id: "tax-5",
          question:
            "If I sell a bond before maturity, do I need to pay capital gains tax?",
          answer:
            "Yes, capital gains tax applies when you sell bonds before maturity. For Listed Bonds held >12 months: 12.50% LTCG. For Listed Bonds held <12 months: taxed at your slab rate (STCG). For Unlisted Bonds: taxed at your slab rate regardless of holding period.",
        },
        {
          id: "tax-6",
          question:
            "Are there any bonds listed on Unibond that qualify for deduction under Section 80C?",
          answer:
            "Most bonds don't fall under Section 80C, but specific tax-saving bonds or schemes may occasionally qualify. We clearly mention 80C eligibility wherever applicable. Feel free to reach out, and we'll help you pick the right product for tax-saving purposes.",
        },
        {
          id: "tax-7",
          question:
            "Do you provide a tax statement or interest certificate at the end of the financial year?",
          answer:
            "Yes! We provide downloadable interest certificates and transaction summaries through your dashboard at the end of each financial year. These make filing your tax returns simple. You'll also receive notifications or emails when your statements are ready.",
        },
        {
          id: "tax-8",
          question:
            "Can I use losses from bond investments to offset gains in other instruments during tax filing?",
          answer:
            "Yes, if you incur capital loss by selling bonds before maturity, you can set it off against capital gains from other investments—like shares or property—under income tax rules. Short-term losses can offset short-term or long-term gains, while long-term losses offset only long-term gains.",
        },
        {
          id: "tax-9",
          question:
            "Are municipal bonds listed on your platform eligible for tax-free returns?",
          answer:
            'Yes, select municipal bonds offered through UNIBOND come with tax-free interest—especially those issued by government-backed bodies. These are clearly marked as "tax-free" so you know which ones offer exemption under Section 10(15)(iv) of the Income Tax Act.',
        },
      ],
    },
    {
      title: "Privacy Policy",
      items: [
        {
          id: "privacy-1",
          question: "What data does Unibond collect?",
          answer:
            "We collect personal identification information (name, PAN, Aadhaar), contact details, financial information (bank details, investment history), KYC documents, transaction data, and technical information (device details, IP address). All data collection is done in compliance with applicable laws and for legitimate business purposes.",
        },
        {
          id: "privacy-2",
          question: "How does Unibond collect my data?",
          answer:
            "We collect data through multiple channels: directly from you during registration and KYC, automatically through your use of our platform (cookies, session data), and from authorized third parties like KYC agencies (CVL KRA, NDML), depositories (NSDL/CDSL), and payment gateways—all with your consent.",
        },
        {
          id: "privacy-3",
          question: "How does Unibond use my data?",
          answer:
            "Your data is used to facilitate investments, verify your identity, comply with regulatory requirements (KYC/AML), process transactions, provide customer support, send important notifications, improve our services, and fulfill legal obligations. We never use your data for purposes other than those disclosed.",
        },
        {
          id: "privacy-4",
          question: "When does Unibond disclose my data?",
          answer:
            "We may share your data with regulatory authorities (SEBI, RBI, Income Tax), KYC agencies, depositories, payment partners, bond issuers, auditors, and legal advisors—only when necessary for service delivery or legal compliance. We never sell your personal information to third parties.",
        },
        {
          id: "privacy-5",
          question:
            "How does Unibond ensure storage, transfer and security of my data?",
          answer:
            "We implement bank-grade encryption, secure servers, access controls, and follow industry best practices. Your data is protected during transmission and storage. When shared with third parties, we ensure they follow strict confidentiality and security standards. All handling complies with IT Act, 2000 and SEBI regulations.",
        },
        {
          id: "privacy-6",
          question: "How long does Unibond retain my data?",
          answer:
            "We retain your data for a minimum of 8 years from your last transaction or account closure, as required by SEBI, PMLA, and tax regulations. After the retention period, data is securely deleted, anonymized, or archived as per our policies.",
        },
        {
          id: "privacy-7",
          question: "What are my rights and duties regarding my data?",
          answer:
            "You have the right to access, correct, update, or request deletion of your data (subject to legal requirements). You can withdraw consent for non-essential processing, object to certain uses, and request data portability. You may also raise complaints if you believe your data was misused. Contact support@unibondss.in to exercise these rights.",
        },
        {
          id: "privacy-8",
          question: "Does Unibond collect data from children?",
          answer:
            "Our services are intended for adults only. We do not knowingly collect personal information from individuals under 18 years of age. If you believe we have inadvertently collected such data, please contact us immediately so we can delete it.",
        },
        {
          id: "privacy-9",
          question: "How does Unibond handle policy usage and updates?",
          answer:
            'We may update our Privacy Policy to reflect legal changes or operational requirements. Updates will be posted on our platform with the "Last Updated" date. Continued use of our services after changes constitutes acceptance. Significant changes will be communicated via email or notification.',
        },
        {
          id: "privacy-10",
          question: "Does Unibond use third party services?",
          answer:
            "Yes, our platform may link to third-party websites (payment gateways, KYC services, regulatory sites). We are not responsible for their privacy practices. Once you leave our platform, you are subject to their terms and policies. We encourage you to review their privacy statements before sharing information.",
        },
        {
          id: "privacy-11",
          question: "How can I contact Unibond regarding privacy concerns?",
          answer:
            "For any privacy-related questions, grievances, or to exercise your data rights, contact us at support@unibondss.in. We treat all complaints seriously and aim to provide timely resolutions in compliance with applicable laws.",
        },
        {
          id: "privacy-12",
          question: "What communications will I receive from Unibond?",
          answer:
            "You will receive transactional communications (account updates, transaction confirmations, regulatory notices) which are essential. We may also send promotional content (offers, newsletters) with your consent. You can opt out of promotional communications anytime while continuing to receive essential updates.",
        },
        {
          id: "privacy-13",
          question: "How do I provide consent for data processing?",
          answer:
            "By accessing our platform, registering, or submitting your information, you provide informed consent for data processing as described in our Privacy Policy. Consent is obtained through clear actions at data entry points and can be withdrawn anytime by contacting support@unibondss.in—though this may affect service availability.",
        },
      ],
    },
  ];

  const filteredSections = faqSections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <main className="pb-8 sm:pb-12 px-3 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-unibonds-navy mb-3 sm:mb-4">
              Frequently Asked{" "}
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
                            openItems[item.id] ? "rotate-180" : ""
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
  );
};

export default FAQ;
