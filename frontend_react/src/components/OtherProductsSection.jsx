import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const OtherProductsSection = () => {
  const products = [
    { name: 'Structured Products', href: '/other-products/structured-products', icon: 'trending-up', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
    { name: 'Insurance', href: '/other-products/insurance', icon: 'shield', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
    { name: 'Estate Planning', href: '/other-products/estate-planning', icon: 'house', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
    { name: 'Loans Against Securities', href: '/loans', icon: 'coins', bgColor: 'bg-amber-50', iconColor: 'text-amber-600' },
    { name: 'NPS', href: '/nps', icon: 'file-text', bgColor: 'bg-indigo-50', iconColor: 'text-indigo-600' },
    { name: 'Mutual Funds', href: '/other-products', icon: 'building2', bgColor: 'bg-rose-50', iconColor: 'text-rose-600' },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getIconSvg = (iconName) => {
    const icons = {
      'trending-up': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up w-8 h-8">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      'shield': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      'house': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house w-8 h-8">
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      ),
      'coins': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins w-8 h-8">
          <circle cx="8" cy="8" r="6"></circle>
          <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
          <path d="M7 6h1v4"></path>
          <path d="m16.71 13.88.7.71-2.82 2.82"></path>
        </svg>
      ),
      'file-text': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text w-8 h-8">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>
      ),
      'building2': (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-8 h-8">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
          <path d="M10 6h4"></path>
          <path d="M10 10h4"></path>
          <path d="M10 14h4"></path>
          <path d="M10 18h4"></path>
        </svg>
      ),
    }
    return icons[iconName] || icons['trending-up']
  }

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
            Beyond <span className="text-unibonds-orange">Bonds</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive financial solutions to diversify your investment portfolio
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, idx) => (
            <a
              key={product.name}
              href={product.href}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-300/[0.6] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <div className={cn(
                "rounded-lg border bg-white text-card-foreground shadow-sm p-6 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col items-center text-center relative z-20",
                "group-hover:border-unibonds-orange/50"
              )}>
                <div className={`w-16 h-16 ${product.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${product.iconColor}`}>
                  {getIconSvg(product.icon)}
                </div>
                <h3 className="font-poppins font-semibold text-unibonds-navy group-hover:text-unibonds-orange transition-colors text-sm">
                  {product.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherProductsSection

