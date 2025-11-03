const Footer = () => {
  return (
    <footer className="bg-unibonds-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          <div className="lg:col-span-4 sm:col-span-2">
            <div className="mb-3 sm:mb-4">
              <img
                alt="Unibonds"
                loading="lazy"
                width="180"
                height="60"
                className="h-10 sm:h-12 w-auto brightness-0 invert"
                src="/Final-Unibonds-Logo.png"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
              Smart Bonds. Simple Investing.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-4 h-4 mt-1 flex-shrink-0">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div>
                  UniBonds Securities<br />
                  303 - Suvidha Eternity, Hirabaug Crossing Main Road<br />
                  Ambawadi, Ahmedabad - 380006
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 94298 02484</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4 flex-shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>info@unibonds.com</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-poppins font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/about" className="hover:text-unibonds-orange transition-colors">About Us</a></li>
              <li><a href="/about#contact" className="hover:text-unibonds-orange transition-colors">Contact</a></li>
              <li><a href="/careers" className="hover:text-unibonds-orange transition-colors">Careers</a></li>
              <li><a href="/faq" className="hover:text-unibonds-orange transition-colors">FAQs</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-poppins font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="/legal/terms" className="hover:text-unibonds-orange transition-colors">Terms & Conditions</a></li>
              <li><a href="/legal/privacy" className="hover:text-unibonds-orange transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="lg:col-span-3">
            <h3 className="font-poppins font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-unibonds-orange rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.instagram.com/unibonds_securities?igsh=MXV0bTE4Mnp2c20xeQ==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-unibonds-orange rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20Know%20more%20about%20Unibonds%20Securities%0A%0AIs%20anyone%20is%20available%20to%20chat%20%3F" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-unibonds-orange rounded-full flex items-center justify-center transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-5 h-5">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="text-[10px] sm:text-xs text-gray-400 space-y-3 sm:space-y-4">
            <p>
              <strong>Disclaimer:</strong> Investments in debt securities/municipal debt securities/securitised debt instruments are subject to risks including delay and/ or default in payment. Read all the offer related documents carefully. The investor is requested to take into consideration all the risk factors before making any investment decisions.
            </p>
            <p>
              Registration granted by SEBI, membership of BASL (in case of IAs) and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
            </p>
            <p>
              <a href="https://www.bseindia.com/markets/PublicIssues/IPOInvestorEducation.aspx" target="_blank" rel="noopener noreferrer" className="text-unibonds-orange hover:underline">BSE Investor Education & Awareness</a>
            </p>
          </div>
          <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400">
            <p>© 2025 UniBonds Securities. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

