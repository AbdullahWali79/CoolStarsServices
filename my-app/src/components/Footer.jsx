import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        
        {/* Ultra-Compact Main Content - Row-wise Layout */}
        <div className='space-y-6 mb-6'>
          
          {/* Row 1: Social Links */}
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <a href="#" className='w-7 h-7 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors'>
                <span className='text-white text-xs'>📘</span>
              </a>
              <a href="#" className='w-7 h-7 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors'>
                <span className='text-white text-xs'>💬</span>
              </a>
              <a href="#" className='w-7 h-7 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors'>
                <span className='text-white text-xs'>🐦</span>
              </a>
              <a href="#" className='w-7 h-7 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors'>
                <span className='text-white text-xs'>📺</span>
              </a>
            </div>
          </div>

          {/* Row 2: Company Description */}
          <p className='text-gray-300 text-xs text-center leading-relaxed max-w-2xl mx-auto'>
            We specialize in repairing ACs, LEDs, refrigerators, and all home electronics with expert care and quick service. 
            Trusted by thousands, we ensure quality repairs at affordable prices — right at your doorstep.
          </p>

          {/* Row 3: Quick Links + Services + Contact - Smart Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
            {/* Quick Links */}
            <div className='text-center sm:text-left'>
              <h3 className='text-sm font-semibold mb-3 text-white'>Quick Links</h3>
              <ul className='space-y-1.5'>
                <li><a href="/" className='text-gray-300 hover:text-white transition-colors text-xs'>Home</a></li>
                <li><a href="/about" className='text-gray-300 hover:text-white transition-colors text-xs'>About Us</a></li>
                <li><a href="/services" className='text-gray-300 hover:text-white transition-colors text-xs'>Our Services</a></li>
                <li><a href="/contact" className='text-gray-300 hover:text-white transition-colors text-xs'>Contact</a></li>
                <li><a href="/my-appointments" className='text-gray-300 hover:text-white transition-colors text-xs'>Book Service</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className='text-center sm:text-left'>
              <h3 className='text-sm font-semibold mb-3 text-white'>Our Services</h3>
              <ul className='space-y-1.5'>
                <li><a href="/services/Air Conditioner" className='text-gray-300 hover:text-white transition-colors text-xs'>AC Repair</a></li>
                <li><a href="/services/LED TV Repair" className='text-gray-300 hover:text-white transition-colors text-xs'>LED TV Repair</a></li>
                <li><a href="/services/Washing Machine" className='text-gray-300 hover:text-white transition-colors text-xs'>Washing Machine</a></li>
                <li><a href="/services/Fridge & Dispensor" className='text-gray-300 hover:text-white transition-colors text-xs'>Fridge Repair</a></li>
                <li><a href="/services/Other Electronics" className='text-gray-300 hover:text-white transition-colors text-xs'>Other Electronics</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className='text-center sm:text-left'>
              <h3 className='text-sm font-semibold mb-3 text-white'>Contact Info</h3>
              <div className='space-y-2'>
                <div className='flex items-center justify-center sm:justify-start gap-2'>
                  <span className='text-blue-400 text-sm'>📍</span>
                  <div className='text-left'>
                    <p className='text-gray-300 text-xs'>Ameen Plaza Shop #01</p>
                    <p className='text-gray-300 text-xs'>Airline Society, Lahore</p>
                  </div>
                </div>
                <div className='flex items-center justify-center sm:justify-start gap-2'>
                  <span className='text-blue-400 text-sm'>📞</span>
                  <div className='text-left'>
                    <p className='text-gray-300 text-xs'>+92 323 7209988</p>
                    <p className='text-gray-300 text-xs'>+92 323 4499881</p>
                  </div>
                </div>
                <div className='flex items-center justify-center sm:justify-start gap-2'>
                  <span className='text-blue-400 text-sm'>✉️</span>
                  <p className='text-gray-300 text-xs'>coolstarservices99@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Trust Indicators - Compact Horizontal Layout */}
          <div className='border-t border-gray-800 pt-4'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 text-center'>
              <div className='flex flex-col items-center'>
                <div className='text-xl font-bold text-blue-400'>24/7</div>
                <div className='text-gray-300 text-xs'>Emergency</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-xl font-bold text-green-400'>2hrs</div>
                <div className='text-gray-300 text-xs'>Response</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-xl font-bold text-yellow-400'>100%</div>
                <div className='text-gray-300 text-xs'>Satisfaction</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='text-xl font-bold text-purple-400'>5000+</div>
                <div className='text-gray-300 text-xs'>Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-Compact Bottom Section */}
        <div className='border-t border-gray-800 pt-4'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-3'>
            <p className='text-gray-400 text-xs text-center sm:text-left'>
              © {currentYear} CoolStar Services. All Rights Reserved.
            </p>
            <div className='flex items-center gap-3 text-xs'>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Privacy</a>
              <span className='text-gray-600'>•</span>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Terms</a>
              <span className='text-gray-600'>•</span>
              <a href="#" className='text-gray-400 hover:text-white transition-colors'>Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
