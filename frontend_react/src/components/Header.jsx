import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bondsDropdownOpen, setBondsDropdownOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center">
            <img
              alt="Unibonds"
              fetchPriority="high"
              width="180"
              height="60"
              className="h-8 sm:h-10 md:h-12 w-auto"
              src="/Final-Unibonds-Logo.png"
            />
            </Link>
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link
              to="/"
              className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium"
            >
              Home
            </Link>
            <div 
              className="relative group"
              onMouseEnter={() => setBondsDropdownOpen(true)}
              onMouseLeave={() => setBondsDropdownOpen(false)}
            >
              <button className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium flex items-center gap-1">
                Bonds
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
                  className="lucide lucide-chevron-down w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg transition-all duration-200 ${
                  bondsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/bonds"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors font-semibold"
                  >
                    Explore Bonds
                  </Link>
                  <Link
                    to="/bonds-ipo"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors"
                  >
                    Bonds IPO
                  </Link>
                </div>
              </div>
            </div>
            <div 
              className="relative group"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium flex items-center gap-1">
                Other Products
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
                  className="lucide lucide-chevron-down w-4 h-4"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg transition-all duration-200 ${
                  productsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="py-2">
                  <Link
                    to="/other-products"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors font-semibold"
                  >
                    View All Products
                  </Link>
                  <div className="border-t my-2"></div>
                  <Link
                    to="/other-products/structured-products"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors"
                  >
                    Structured Products
                  </Link>
                  <Link
                    to="/other-products/insurance"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors"
                  >
                    Insurance
                  </Link>
                  <Link
                    to="/other-products/estate-planning"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors"
                  >
                    Estate Planning
                  </Link>
                  <Link
                    to="/nps"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors font-medium"
                  >
                    NPS
                  </Link>
                  <Link
                    to="/loans"
                    className="block px-4 py-2 text-unibonds-navy hover:bg-orange-50 hover:text-unibonds-orange transition-colors font-medium"
                  >
                    Loans Against Securities
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium"
            >
              About Us
            </Link>
            <Link
              to="/careers"
              className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium"
            >
              Careers
            </Link>
            <Link
              to="/faq"
              className="text-unibonds-navy hover:text-unibonds-orange transition-colors font-medium"
            >
              FAQs
            </Link>
          </nav>
          <div className="hidden lg:block">
            <a
              href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20start%20my%20investment%20journey%20with%20Unibonds%20Securities"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 py-2 bg-unibonds-orange hover:bg-unibonds-orange/90 text-white font-semibold px-6">
                Invest Now
              </button>
            </a>
          </div>
          <button 
            className="lg:hidden text-unibonds-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
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
              className="lucide lucide-menu w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

