import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { assets } from '../assets/assets';

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300 px-4 sm:px-6 bg-white shadow-sm sticky top-0 z-40'>
      {/* Logo - responsive sizing */}
      <img 
        onClick={()=>navigate('/')} 
        className='w-32 sm:w-36 md:w-40 cursor-pointer' 
        src={logo} 
        alt="Logo" 
      />

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 hover:text-primary transition-colors'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/services'>
          <li className='py-1 hover:text-primary transition-colors'>Our Services</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 hover:text-primary transition-colors'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 hover:text-primary transition-colors'>Contact</li> 
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>
      </ul> 

      {/* Right side buttons and mobile menu */}
      <div className='flex items-center gap-4'>
        {/* Desktop CTA Button */}
        <button className='bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-light hidden md:block hover:bg-primary/90 transition-colors'>
          Cool Star
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={()=>setShowMenu(true)} 
          className='w-8 h-8 md:hidden flex items-center justify-center'
          aria-label="Open menu"
        >
          <img className='w-6' src={assets.menu_icon} alt="Menu" />
        </button>

        {/*----------- Mobile Menu Overlay --------*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 ease-in-out`}>
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between px-5 py-6 border-b border-gray-200'>
            <img className='w-32' src={logo} alt="Logo" />
            <button
              className='w-8 h-8 flex items-center justify-center'
              onClick={()=>setShowMenu(false)}
              aria-label="Close menu"
            >
              <img className='w-6' src={assets.cross_icon} alt="Close" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className='flex flex-col gap-1 mt-8 px-5 text-lg font-medium'>
            <NavLink onClick={()=>setShowMenu(false)} to='/' className='w-full'>
              <p className='px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left'>
                🏠 Home
              </p>
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/services' className='w-full'>
              <p className='px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left'>
                🔧 Our Services
              </p>
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about' className='w-full'>
              <p className='px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left'>
                ℹ️ About
              </p>
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact' className='w-full'>
              <p className='px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full text-left'>
                📞 Contact
              </p>
            </NavLink>
          </ul>

          {/* Mobile CTA Section */}
          <div className='px-5 mt-8 pt-6 border-t border-gray-200'>
            <button className='w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors'>
              Get Service Now
            </button>
            
            {/* Quick Contact */}
            <div className='mt-4 text-center'>
              <p className='text-sm text-gray-600 mb-2'>Quick Contact</p>
              <div className='flex gap-2'>
                <a
                  href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-green-700 transition-colors'
                >
                  📱 WhatsApp
                </a>
                <a
                  href="tel:+923001234567"
                  className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition-colors'
                >
                  📞 Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {showMenu && (
          <div 
            className='fixed inset-0 bg-black/50 z-40 md:hidden'
            onClick={()=>setShowMenu(false)}
          ></div>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;
