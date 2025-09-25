import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const TopServices = () => {
  const navigate = useNavigate()
  const { services } = useContext(AppContext)
  const [expandedServices, setExpandedServices] = useState(new Set())

  const toggleServiceExpansion = (serviceId) => {
    const newExpanded = new Set(expandedServices)
    if (newExpanded.has(serviceId)) {
      newExpanded.delete(serviceId)
    } else {
      newExpanded.add(serviceId)
    }
    setExpandedServices(newExpanded)
  }

  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header - Reduced spacing */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3'>
            <span>🏆</span>
            <span>Popular Services</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Most Requested
            <span className='block text-blue-600'>Repair Services</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            These are our most popular and highly-rated appliance repair services. 
            Trusted by thousands of customers across Lahore.
          </p>
        </div>

        {/* Services Cards Grid - Beautiful Card Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8'>
          {services.slice(0, 8).map((service, index) => {
            const isExpanded = expandedServices.has(service._id)
            return (
              <div key={index} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105'>
                {/* Card Header with Service Icon */}
                <div className='relative p-6 bg-gradient-to-br from-gray-50 to-gray-100'>
                  <div className='absolute top-3 right-3'>
                    <span className='bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium animate-pulse'>
                      Popular
                    </span>
                  </div>
                  
                  <div className='flex flex-col items-center text-center'>
                    <div className='w-16 h-16 rounded-xl overflow-hidden mb-3 transform group-hover:scale-110 transition-transform duration-300 shadow-lg'>
                      <img 
                        src={getServiceImage(service.speciality)} 
                        alt={service.speciality}
                        className='w-full h-full object-cover'
                      />
                    </div>
                    
                    <h3 className='font-bold text-gray-900 text-lg mb-2 leading-tight'>
                      {service.name}
                    </h3>
                    
                    <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'>
                      <span className='w-4 h-4 rounded-full overflow-hidden'>
                        <img 
                          src={getServiceImage(service.speciality)} 
                          alt={service.speciality}
                          className='w-full h-full object-cover'
                        />
                      </span>
                      <span>{service.speciality}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className='p-6'>
                  {/* Experience and Rating */}
                  <div className='flex items-center justify-between mb-4'>
                    <div className='flex items-center gap-2 text-sm text-gray-600'>
                      <span className='text-blue-500'>⭐</span>
                      <span className='font-medium'>{service.experience}</span>
                    </div>
                    <div className='text-right'>
                      <div className='text-2xl font-bold text-green-600'>Rs. {service.fees}</div>
                      <div className='text-xs text-gray-500'>Starting Price</div>
                    </div>
                  </div>

                  {/* Service Description Preview */}
                  <div className='mb-4'>
                    <p className='text-sm text-gray-600 leading-relaxed line-clamp-3'>
                      {getServiceDescriptionPreview(service.about)}
                    </p>
                    <button
                      onClick={() => toggleServiceExpansion(service._id)}
                      className='text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 mt-2'
                    >
                      <span>👁️</span>
                      {isExpanded ? 'Show Less' : 'Read More'}
                    </button>
                  </div>

                  {/* Expanded Description */}
                  {isExpanded && (
                    <div className='mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
                      <div className='text-sm text-gray-700 leading-relaxed'>
                        {service.about.length > 200 
                          ? `${service.about.substring(0, 200)}...` 
                          : service.about
                        }
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className='flex gap-2'>
                    <a 
                      href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 hover:scale-105 transform duration-200'
                    >
                      <span>📱</span>
                      Book Now
                    </a>
                    <button 
                      onClick={() => navigate(`/appointments/${service._id}`)}
                      className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:scale-105 transform duration-200'
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        <div className='text-center'>
          <button 
            onClick={() => {
              navigate('/services')
              scrollTo(0, 0)
            }} 
            className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
          >
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}

// Helper function to get service images
const getServiceImage = (speciality) => {
  const images = {
    'Air Conditioner': '/src/assets/ac01.png',
    'LED TV Repair': '/src/assets/led01.png',
    'Washing Machine': '/src/assets/wm01.png',
    'Fridge & Dispensor': '/src/assets/fridge01.png',
    'Other Electronics': '/src/assets/mc01.png',
    'Kitchen Hood': '/src/assets/oven01.png'
  }
  return images[speciality] || '/src/assets/appliance.png'
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

// Helper function to get service description preview
const getServiceDescriptionPreview = (description) => {
  if (!description) return 'Professional repair service with certified technicians.';
  
  // Clean up the description and get a meaningful preview
  const cleanDescription = description
    .replace(/\.{3,}/g, '. ') // Replace multiple dots with single dot
    .replace(/\.{2,}/g, '. ') // Replace double dots with single dot
    .replace(/\d+\./g, '') // Remove numbered bullets
    .trim();
  
  // Get first meaningful sentence
  const firstSentence = cleanDescription.split('.')[0];
  
  if (firstSentence && firstSentence.length > 20) {
    return firstSentence + '.';
  }
  
  // If first sentence is too short, get more content
  const words = cleanDescription.split(' ').slice(0, 20);
  return words.join(' ') + '...';
}

export default TopServices
