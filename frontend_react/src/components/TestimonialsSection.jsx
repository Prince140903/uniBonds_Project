import { useState, useEffect, useRef } from 'react'

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false)
  const scrollContainerRef = useRef(null)

  const testimonials = [
    {
      id: 1,
      quote: 'Unibonds helped me diversify my portfolio with secure, high-yield bonds. The platform is intuitive and the support team is always available.',
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      location: 'Mumbai',
      initials: 'RK',
    },
    {
      id: 2,
      quote: 'As a first-time bond investor, I found Unibonds extremely helpful. The curated options made it easy to choose bonds matching my risk profile.',
      name: 'Priya Sharma',
      role: 'Software Engineer',
      location: 'Bangalore',
      initials: 'PS',
    },
    {
      id: 3,
      quote: 'Trust and transparency are paramount for me. Unibonds delivers on both fronts with clear communication and secure investments.',
      name: 'Amit Patel',
      role: 'Financial Advisor',
      location: 'Delhi',
      initials: 'AP',
    },
    {
      id: 4,
      quote: 'The returns on my bond investments have exceeded expectations. Unibonds makes fixed-income investing simple and profitable.',
      name: 'Meera Desai',
      role: 'Retired Teacher',
      location: 'Ahmedabad',
      initials: 'MD',
    },
    {
      id: 5,
      quote: 'I appreciate the personalized guidance and the wide range of bond options. Unibonds truly understands investor needs.',
      name: 'Vikram Singh',
      role: 'Corporate Executive',
      location: 'Pune',
      initials: 'VS',
    },
    {
      id: 6,
      quote: 'Excellent service and great returns! The team at Unibonds is knowledgeable and always ready to help with investment decisions.',
      name: 'Rohan Desai',
      role: 'Investment Consultant',
      location: 'Surat',
      initials: 'RD',
    },
  ]

  useEffect(() => {
    if (!scrollContainerRef.current) return

    const scrollContainer = scrollContainerRef.current
    let scrollPosition = 0
    let animationFrameId = null
    const scrollSpeed = 0.5 // pixels per frame

    const scroll = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(scroll)
        return
      }

      scrollPosition += scrollSpeed
      
      // Reset when scrolled past half (since we duplicated testimonials)
      const maxScroll = (scrollContainer.scrollWidth / 2) - scrollContainer.clientWidth
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isPaused])

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-8 sm:py-12 lg:py-14 px-4 bg-gradient-to-b from-white via-orange-50/20 to-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-unibonds-navy mb-4">
            Hear from Our
            <span className="text-unibonds-orange"> Clients</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust Unibonds
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-hidden pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="rounded-lg border text-card-foreground flex-shrink-0 w-[380px] p-6 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-t-unibonds-orange"
            >
              <div className="mb-4">
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
                  className="lucide lucide-quote w-10 h-10 text-unibonds-orange opacity-20"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-star w-4 h-4 fill-unibonds-orange text-unibonds-orange"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic min-h-[120px]">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="w-12 h-12 bg-gradient-to-br from-unibonds-orange to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-unibonds-navy">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 italic">
            Hover over testimonials to pause • Auto-scrolling carousel
          </p>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

