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
    <div className='flex bg-primary rounded-lg px-6 sm:px-12 lg:px-10 my-12 md:mx-8 relative'>
        
        
        {/*----------Left Side---------*/}
        <div className='flex-1 py-6 sm:py-8 md:py-12 lg:py-16 lg:pl-4'>
            <div className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-white'>
                <p>Reliable Repair Solutions for</p>
                <p className='mt-2'>Your Home Electronics</p>
            </div>
             {/* Contact Button with Navigation + Smooth Scroll */}
            <button 
              onClick={() => {
                navigate('/contact');
                smoothScrollToTop(1500); // 2 seconds scroll (you can adjust this)
              }} 
              className='bg-white text-gray-600 font-bold px-6 py-2.5 rounded-full mt-4 hover:scale-105 transition-all'
            >
              Contact
            </button>
        </div>
      
        
      
    </div>
  )
}

export default Banner