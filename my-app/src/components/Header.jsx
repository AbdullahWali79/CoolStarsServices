import React from 'react';
import arrow_icon from '../assets/arrow_icon.svg';
import appliance2 from '../assets/appliance2.png';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl px-6 md:px-10 lg:px-20 overflow-hidden shadow-2xl'>
      
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-black/10'></div>
      
      {/* Trust Badge */}
      <div className='absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2'>
        <div className='flex items-center gap-2 text-white text-sm'>
          <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
          <span className='text-white'>24/7 Emergency Service</span>
        </div>
      </div>

      <div className='relative flex flex-col md:flex-row items-center'>
        {/* -------- Left Side - Content -------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 md:py-16 lg:py-20 text-white'>
          
          {/* Badge */}
          <div className='bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 inline-block'>
            <span className='text-sm font-medium'>🏆 #1 Rated in Lahore</span>
          </div>
          
          {/* Main Headline */}
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
            Expert Appliance Repair
            <span className='block text-yellow-300'>in 2 Hours or Less!</span>
          </h1>
          
          {/* Subheadline */}
          <p className='text-base md:text-lg text-blue-100 leading-relaxed max-w-lg'>
            Professional technicians with 10+ years experience. Save up to 70% compared to buying new appliances.
          </p>
          
          {/* Trust Indicators - Reduced spacing */}
          <div className='flex flex-wrap items-center gap-4 text-sm text-blue-100'>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>5000+ Happy Customers</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-green-400'>✓</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
          
          {/* CTA Buttons - Reduced padding */}
          <div className='flex flex-col sm:flex-row gap-3 w-full'>
            <a
              href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              📱 Book on WhatsApp
              <img className='w-4' src={arrow_icon} alt="arrow" />
            </a>
            <a
              href="tel:+923001234567"
              className='flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 border border-white/30'
            >
              📞 Call Now
            </a>
          </div>
          
          {/* Quick Stats - Reduced spacing */}
          <div className='grid grid-cols-3 gap-4 pt-4 border-t border-white/20'>
            <div className='text-center'>
              <div className='text-xl font-bold text-yellow-300'>2hrs</div>
              <div className='text-xs text-blue-100'>Response Time</div>
            </div>
            <div className='text-center'>
              <div className='text-xl font-bold text-yellow-300'>95%</div>
              <div className='text-xs text-blue-100'>Success Rate</div>
            </div>
            <div className='text-center'>
              <div className='text-xl font-bold text-yellow-300'>24/7</div>
              <div className='text-xs text-blue-100'>Available</div>
            </div>
          </div>
        </div>

        {/* -------- Right Side - Image -------- */}
        <div className='md:w-1/2 w-full flex justify-center md:justify-end'>
          <div className='relative'>
            <img
              src={appliance2}
              alt="Professional Appliance Repair Service"
              className='w-full h-auto max-h-[500px] object-cover object-center rounded-xl shadow-xl'
            />
            
            {/* Floating Trust Card - Reduced size */}
            <div className='absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg'>
              <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center'>
                  <span className='text-xl'>⭐</span>
                </div>
                <div>
                  <div className='font-semibold text-gray-900 text-sm'>4.9/5 Rating</div>
                  <div className='text-xs text-gray-600'>From 500+ Reviews</div>
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