const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919428401861?text=Hey%0AI%20want%20to%20Know%20more%20about%20Unibonds%20Securities%0A%0AIs%20anyone%20is%20available%20to%20chat%20%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-4 sm:px-5 py-3 sm:py-4 group"
      aria-label="Chat on WhatsApp"
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
        className="lucide lucide-message-circle w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
      <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </a>
  )
}

export default WhatsAppButton

