import React from 'react'
 
import { useNavigate } from 'react-router-dom'
 

const Banner = () => {
  const navigate = useNavigate()

  // Custom Smooth Scroll Function (1.5 seconds)
  const smoothScrollToTop = (duration) => {
    const start = window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      window.scrollTo(0, start + (0 - start) * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  return (
    <div className='relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl px-6 sm:px-12 lg:px-16 my-12 md:mx-8 overflow-hidden shadow-2xl'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-black/10'></div>
      
      {/* Animated Background Elements */}
      <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-pulse'></div>
      <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-pulse delay-1000'></div>
      
      <div className='relative flex flex-col md:flex-row items-center justify-between py-8 sm:py-12 md:py-16'>
        {/* Left Side - Content */}
        <div className='flex-1 text-center md:text-left mb-6 md:mb-0'>
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white mb-4'>
            <span>🏆</span>
            <span>Trusted by 5000+ Customers</span>
          </div>
          
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight'>
            Reliable Repair Solutions for
            <span className='block text-yellow-300 animate-pulse'>Your Home Electronics</span>
          </h2>
          
          <p className='text-lg sm:text-xl text-green-100 mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed'>
            Professional technicians with years of experience. Fast, reliable, and affordable service guaranteed.
          </p>
          
          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
            <button 
              onClick={() => {
                navigate('/contact');
                smoothScrollToTop(1500);
              }} 
              className='bg-white text-green-700 font-bold px-8 py-3 rounded-xl hover:bg-green-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              📞 Get Free Quote
            </button>
            <a 
              href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
            >
              📱 WhatsApp Now
            </a>
          </div>
        </div>
        
        {/* Right Side - Stats */}
        <div className='flex flex-col sm:flex-row md:flex-col gap-6 md:gap-8'>
          <div className='text-center'>
            <div className='text-3xl sm:text-4xl font-bold text-yellow-300 mb-1'>2hrs</div>
            <div className='text-sm text-green-100'>Response Time</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl sm:text-4xl font-bold text-yellow-300 mb-1'>95%</div>
            <div className='text-sm text-green-100'>Success Rate</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl sm:text-4xl font-bold text-yellow-300 mb-1'>24/7</div>
            <div className='text-sm text-green-100'>Available</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner