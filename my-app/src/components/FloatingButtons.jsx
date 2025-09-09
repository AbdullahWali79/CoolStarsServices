import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="floating-buttons-container fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3">
      
      {/* Book Now - WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button group bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse hover:animate-none"
        title="Book on WhatsApp"
      >
        <div className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl mb-1">📱</span>
          <span className="text-xs font-semibold hidden sm:block">Book Now</span>
        </div>
        
        {/* Hover Tooltip - Only on desktop */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Book on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </a>

      {/* Call Now Button */}
      <a
        href="tel:+923234499881"
        className="floating-button group bg-blue-600 hover:bg-blue-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-pulse hover:animate-none"
        title="Call Now"
      >
        <div className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl mb-1">📞</span>
          <span className="text-xs font-semibold hidden sm:block">Call Now</span>
        </div>
        
        {/* Hover Tooltip - Only on desktop */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Call +92 323 4499881
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </a>

      {/* Scroll to Top Button - Appears on scroll */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`floating-button group bg-gray-600 hover:bg-gray-700 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <div className="flex flex-col items-center">
          <span className="text-xl sm:text-2xl mb-1">↑</span>
          <span className="text-xs font-semibold hidden sm:block">Top</span>
        </div>
        
        {/* Hover Tooltip - Only on desktop */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
          Scroll to Top
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </button>
    </div>
  );
};

export default FloatingButtons;
