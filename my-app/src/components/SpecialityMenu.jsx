import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <section className='py-12 bg-gradient-to-b from-gray-50 to-white' id='speciality'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header - Reduced spacing */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3'>
            <span>🔧</span>
            <span>Professional Services</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Expert Repair Services
            <span className='block text-blue-600'>for All Appliances</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Our certified technicians provide fast, reliable, and affordable repair services. 
            We fix it right the first time, guaranteed!
          </p>
        </div>

        {/* Services Table - Compact Format */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              {/* Table Header */}
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Service</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Description</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Features</th>
                  <th className='px-4 py-3 text-center text-sm font-semibold text-gray-900'>Action</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className='divide-y divide-gray-200'>
                {specialityData.map((item, index) => (
                  <tr 
                    key={index}
                    className='hover:bg-gray-50 transition-colors duration-200'
                  >
                    {/* Service Icon & Name */}
                    <td className='px-4 py-3'>
                      <div className='flex items-center gap-3'>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getServiceIconStyle(item.speciality)}`}>
                          <span className='text-2xl'>{getServiceIcon(item.speciality)}</span>
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-900 text-sm'>{item.speciality}</h3>
                        </div>
                      </div>
                    </td>
                    
                    {/* Service Description */}
                    <td className='px-4 py-3'>
                      <div className='max-w-xs'>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                          {getServiceDescription(item.speciality)}
                        </p>
                      </div>
                    </td>
                    
                    {/* Service Features */}
                    <td className='px-4 py-3'>
                      <div className='space-y-1'>
                        {getServiceFeatures(item.speciality).slice(0, 3).map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-2 text-xs text-gray-600'>
                            <span className='text-green-500'>✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                    
                    {/* Action Buttons */}
                    <td className='px-4 py-3'>
                      <div className='flex items-center justify-center gap-2'>
                        <a 
                          href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className='bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1'
                        >
                          <span>📱</span>
                          Book
                        </a>
                        <Link 
                          to={`/services/${item.speciality}`}
                          onClick={() => scrollTo(0, 0)}
                          className='bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors'
                        >
                          View
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA - Reduced spacing */}
        <div className='text-center mt-12'>
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white'>
            <h3 className='text-xl font-bold mb-3'>Need Emergency Repair?</h3>
            <p className='text-blue-100 mb-4 max-w-2xl mx-auto'>
              Don't wait for tomorrow! Our technicians are available 24/7 for emergency repairs. 
              Get same-day service and save your appliances.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <a 
                href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
              >
                📱 WhatsApp Emergency
              </a>
              <a 
                href="#contact"
                className='bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-white/30'
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to get beautiful service icons
const getServiceIcon = (speciality) => {
  const icons = {
    'Air Conditioner': '❄️',
    'LED TV Repair': '📺',
    'Washing Machine': '🧺',
    'Fridge & Dispensor': '🧊',
    'Other Electronics': '⚡',
    'Kitchen Hood': '🍳'
  }
  return icons[speciality] || '🔧'
}

// Helper function to get beautiful icon styles with gradients
const getServiceIconStyle = (speciality) => {
  const styles = {
    'Air Conditioner': 'bg-gradient-to-br from-blue-400 to-blue-600 text-white shadow-lg',
    'LED TV Repair': 'bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg',
    'Washing Machine': 'bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg',
    'Fridge & Dispensor': 'bg-gradient-to-br from-cyan-400 to-cyan-600 text-white shadow-lg',
    'Other Electronics': 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg',
    'Kitchen Hood': 'bg-gradient-to-br from-red-400 to-red-600 text-white shadow-lg'
  }
  return styles[speciality] || 'bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-lg'
}

// Helper functions to get service descriptions and features
const getServiceDescription = (speciality) => {
  const descriptions = {
    'Air Conditioner': 'Professional AC repair, maintenance, and gas refilling services. We handle all brands and models.',
    'LED TV Repair': 'Expert TV repair services including display issues, power problems, and software solutions.',
    'Washing Machine': 'Complete washing machine repair and maintenance. We fix all types and brands.',
    'Fridge & Dispensor': 'Refrigerator repair, maintenance, and water dispenser services with genuine parts.',
    'Other Electronics': 'Specialized repair services for microwaves, kitchen hoods, and other appliances.',
    'Kitchen Hood': 'Professional kitchen hood installation, repair, and maintenance services.'
  }
  return descriptions[speciality] || 'Professional repair service with certified technicians.'
}

const getServiceFeatures = (speciality) => {
  const features = {
    'Air Conditioner': ['Same-day service', 'Gas refilling', 'All brands supported', 'Warranty included'],
    'LED TV Repair': ['Display repair', 'Power issues', 'Software problems', 'Parts replacement'],
    'Washing Machine': ['Mechanical repair', 'Electronic issues', 'Water problems', 'Full maintenance'],
    'Fridge & Dispensor': ['Cooling issues', 'Water dispenser', 'Ice maker repair', 'Energy efficiency'],
    'Other Electronics': ['Microwave repair', 'Kitchen appliances', 'Electronic diagnosis', 'Quality parts'],
    'Kitchen Hood': ['Installation', 'Maintenance', 'Filter replacement', 'Duct cleaning']
  }
  return features[speciality] || ['Professional service', 'Quality guarantee', 'Fast response', 'Affordable rates']
}

export default SpecialityMenu
