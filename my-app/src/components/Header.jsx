import React from 'react';
import arrow_icon from '../assets/arrow_icon.svg';
import appliance2 from '../assets/appliance2.png';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg md:rounded-2xl px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden shadow-2xl mx-2 sm:mx-4 md:mx-0'>
      
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-black/10'></div>
      
      {/* Trust Badge - Mobile Responsive */}
      <div className='absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2'>
        <div className='flex items-center gap-1 sm:gap-2 text-white text-xs sm:text-sm'>
          <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse'></div>
          <span className='text-white hidden sm:inline'>24/7 Emergency Service</span>
          <span className='text-white sm:hidden'>24/7</span>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row items-center'>
        {/* -------- Left Side - Content -------- */}
        <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-3 sm:gap-4 py-6 sm:py-8 md:py-16 lg:py-20 text-white text-center md:text-left'>
          
          {/* Badge */}
          <div className='bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 sm:px-3 sm:py-1.5 inline-block mx-auto md:mx-0'>
            <span className='text-xs sm:text-sm font-medium'>🏆 #1 Rated in Lahore</span>
          </div>
          
          {/* Main Headline - Mobile Optimized */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Expert Appliance Repair
            <span className='block text-yellow-300'>in 2 Hours or Less!</span>
          </h1>
          
          {/* Subheadline - Mobile Optimized */}
          <p className='text-sm sm:text-base md:text-lg text-blue-100 leading-relaxed max-w-lg mx-auto md:mx-0'>
            Professional technicians with 10+ years experience. Save up to 70% compared to buying new appliances.
          </p>
          
          {/* Trust Indicators - Mobile Optimized */}
          <div className='flex flex-col sm:flex-row sm:flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-blue-100 w-full'>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>5000+ Happy Customers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>100% Satisfaction</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
          
          {/* CTA Buttons - Mobile Optimized */}
          <div className='flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto md:mx-0'>
            <a
              href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              📱 Book on WhatsApp
              <img className='w-3 sm:w-4' src={arrow_icon} alt="arrow" />
            </a>
            <a
              href="tel:+923001234567"
              className='flex items-center justify-center gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 border border-white/30'
            >
              📞 Call Now
            </a>
          </div>
          
          {/* Quick Stats - Mobile Optimized */}
          <div className='grid grid-cols-3 gap-2 sm:gap-4 pt-3 sm:pt-4 border-t border-white/20 w-full max-w-sm mx-auto md:mx-0'>
            <div className='text-center'>
              <div className='text-lg sm:text-xl font-bold text-yellow-300'>2hrs</div>
              <div className='text-xs text-blue-100'>Response</div>
            </div>
            <div className='text-center'>
              <div className='text-lg sm:text-xl font-bold text-yellow-300'>95%</div>
              <div className='text-xs text-blue-100'>Success</div>
            </div>
            <div className='text-center'>
              <div className='text-lg sm:text-xl font-bold text-yellow-300'>24/7</div>
              <div className='text-xs text-blue-100'>Available</div>
            </div>
          </div>
        </div>

        {/* -------- Right Side - Image -------- */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0'>
          <div className='relative max-w-sm md:max-w-none'>
            <img
              src={appliance2}
              alt="Professional Appliance Repair Service"
              className='w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-cover object-center rounded-xl shadow-xl'
            />
            
            {/* Floating Trust Card - Mobile Optimized */}
            <div className='absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg'>
              <div className='flex items-center gap-1 sm:gap-2'>
                <div className='w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-lg sm:text-xl'>⭐</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-xs sm:text-sm'>4.9/5 Rating</div>
                  <div className='text-xs text-gray-600 hidden sm:block'>From 500+ Reviews</div>
                  <div className='text-xs text-gray-600 sm:hidden'>500+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;