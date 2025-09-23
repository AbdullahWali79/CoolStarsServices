import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import React from "react"

const Services = () => {
  const { speciality } = useParams()
  const [filteredServices, setFilteredServices] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(speciality || 'All Services')
  const [expandedServices, setExpandedServices] = useState(new Set())

  const navigate = useNavigate()
  const { services } = useContext(AppContext)

  const serviceCategories = [
    { name: 'All Services', value: 'all', icon: '🔧' },
    { name: 'Air Conditioner', value: 'Air Conditioner', icon: '❄️' },
    { name: 'LED TV Repair', value: 'LED TV Repair', icon: '📺' },
    { name: 'Washing Machine', value: 'Washing Machine', icon: '🧺' },
    { name: 'Fridge & Dispensor', value: 'Fridge & Dispensor', icon: '🧊' },
    { name: 'Other Electronics', value: 'Other Electronics', icon: '⚡' },
    { name: 'Kitchen Hood', value: 'Kitchen Hood', icon: '🍳' }
  ]

  const applyFilter = () => {
    if (speciality && speciality !== 'all') {
      setFilteredServices(services.filter(service => service.speciality === speciality))
      setSelectedCategory(speciality)
    } else {
      setFilteredServices(services)
      setSelectedCategory('All Services')
    }
  }

  useEffect(() => {
    applyFilter()
  }, [services, speciality])

  const handleCategoryClick = (category) => {
    if (category.value === 'all') {
      navigate('/services')
      setSelectedCategory('All Services')
    } else {
      navigate(`/services/${category.value}`)
      setSelectedCategory(category.name)
    }
  }

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
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12'>
        {/* Page Header - Mobile Optimized */}
        <div className='text-center mb-6 sm:mb-8 md:mb-10'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3'>
            <span>🔧</span>
            <span>Professional Services</span>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Our Appliance
            <span className='block text-blue-600'>Repair Services</span>
          </h1>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2'>
            Expert technicians with years of experience in repairing all types of home appliances. 
            Fast, reliable, and affordable service guaranteed.
          </p>
        </div>

        {/* Filter Section - Mobile Optimized */}
        <div className='mb-6 sm:mb-8'>
          <div className='flex flex-col sm:flex-row items-start gap-3 sm:gap-4'>
            {/* Mobile Filter Button */}
            <button 
              className={`py-2.5 px-4 sm:px-5 border rounded-xl text-sm transition-all sm:hidden w-full ${showFilter ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}`} 
              onClick={() => setShowFilter(prev => !prev)}
            >
              {showFilter ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {/* Filter Categories - Mobile Scrollable */}
            <div className={`${showFilter ? 'flex' : 'hidden sm:flex'} flex-wrap gap-2 w-full`}>
              <div className='flex gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0'>
                {serviceCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                    className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className='hidden xs:inline sm:inline'>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Count */}
        <div className='mb-4 sm:mb-6'>
          <p className='text-sm sm:text-base text-gray-600 px-1'>
            Showing <span className='font-semibold text-blue-600'>{filteredServices.length}</span> services
            {selectedCategory !== 'All Services' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Services Display - Beautiful Cards Layout for All Devices */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
          {filteredServices.length === 0 ? (
            <div className='col-span-full text-center py-16 px-4'>
              <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-4xl'>🔧</span>
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>No Services Found</h3>
              <p className='text-gray-600 mb-4'>We couldn't find any services matching your criteria.</p>
              <button 
                onClick={() => navigate('/services')}
                className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors'
              >
                View All Services
              </button>
            </div>
          ) : (
            filteredServices.map((service, index) => {
              const isExpanded = expandedServices.has(service._id)
              return (
                <div key={index} className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group hover:scale-105'>
                  {/* Card Header with Service Icon */}
                  <div className='relative p-4 sm:p-6 bg-gradient-to-br from-gray-50 to-gray-100'>
                    <div className='flex flex-col items-center text-center'>
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 ${getServiceIconStyle(service.speciality)} transform group-hover:scale-110 transition-transform duration-300`}>
                        <span className='text-lg sm:text-2xl'>{getServiceIcon(service.speciality)}</span>
                      </div>
                      
                      <h3 className='font-bold text-gray-900 text-sm sm:text-lg mb-2 leading-tight text-center'>
                        {service.name}
                      </h3>
                      
                      <div className='inline-flex items-center gap-1 sm:gap-2 bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
                        <span>{getServiceIcon(service.speciality)}</span>
                        <span className='truncate'>{service.speciality}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className='p-4 sm:p-6'>
                    {/* Experience and Rating */}
                    <div className='flex items-center justify-between mb-4'>
                      <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-600'>
                        <span className='text-blue-500'>⭐</span>
                        <span className='font-medium'>{service.experience}</span>
                      </div>
                      <div className='text-right'>
                        <div className='text-lg sm:text-2xl font-bold text-green-600'>Rs. {service.fees}</div>
                        <div className='text-xs text-gray-500'>Starting</div>
                      </div>
                    </div>

                    {/* Service Description Preview */}
                    <div className='mb-4'>
                      <p className='text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3'>
                        {getServiceDescriptionPreview(service.about)}
                      </p>
                      <button
                        onClick={() => toggleServiceExpansion(service._id)}
                        className='text-blue-600 hover:text-blue-700 text-xs sm:text-sm font-medium flex items-center gap-1 mt-2'
                      >
                        <span>👁️</span>
                        {isExpanded ? 'Show Less' : 'Read More'}
                      </button>
                    </div>

                    {/* Expanded Description */}
                    {isExpanded && (
                      <div className='mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200'>
                        <div className='text-xs sm:text-sm text-gray-700 leading-relaxed'>
                          {service.about.length > 300 
                            ? `${service.about.substring(0, 300)}...` 
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
                        className='flex-1 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1 sm:gap-2 hover:scale-105 transform duration-200'
                      >
                        <span>📱</span>
                        <span className='hidden xs:inline sm:inline'>Book</span>
                        <span className='xs:hidden sm:hidden'>📱</span>
                      </a>
                      <button 
                        onClick={() => navigate(`/appointments/${service._id}`)}
                        className='flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-colors hover:scale-105 transform duration-200'
                      >
                        <span className='hidden xs:inline sm:inline'>View</span>
                        <span className='xs:hidden sm:hidden'>👁️</span>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>


        {/* Bottom CTA Section - Reduced spacing */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white'>
            <h2 className='text-2xl font-bold mb-4'>Need Emergency Repair?</h2>
            <p className='text-lg text-blue-100 mb-6 max-w-2xl mx-auto leading-relaxed'>
              Don't wait for tomorrow! Our technicians are available 24/7 for emergency repairs. 
              Get same-day service and save your appliances.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <a 
                href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
              >
                📱 WhatsApp Emergency
              </a>
              <a 
                href="/contact"
                className='bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-3 rounded-xl font-semibold transition-all duration-300 border border-white/30'
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper function to get service icons
function getServiceIcon(speciality) {
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
function getServiceIconStyle(speciality) {
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
function getServiceDescriptionPreview(description) {
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
  const words = cleanDescription.split(' ').slice(0, 15);
  return words.join(' ') + '...';
}

export default Services
