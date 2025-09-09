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
      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Page Header - Reduced spacing */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3'>
            <span>🔧</span>
            <span>Professional Services</span>
          </div>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Our Appliance
            <span className='block text-blue-600'>Repair Services</span>
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Expert technicians with years of experience in repairing all types of home appliances. 
            Fast, reliable, and affordable service guaranteed.
          </p>
        </div>

        {/* Filter Section - Reduced spacing */}
        <div className='mb-8'>
          <div className='flex flex-col sm:flex-row items-start gap-4'>
            {/* Mobile Filter Button */}
            <button 
              className={`py-2.5 px-5 border rounded-xl text-sm transition-all sm:hidden ${showFilter ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300'}`} 
              onClick={() => setShowFilter(prev => !prev)}
            >
              {showFilter ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            {/* Filter Categories */}
            <div className={`flex flex-wrap gap-2 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Count */}
        <div className='mb-6'>
          <p className='text-gray-600'>
            Showing <span className='font-semibold text-blue-600'>{filteredServices.length}</span> services
            {selectedCategory !== 'All Services' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Services Table - Compact Format with Expandable Descriptions */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              {/* Table Header */}
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Service</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Speciality</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Experience</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Starting Price</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Description</th>
                  <th className='px-4 py-3 text-center text-sm font-semibold text-gray-900'>Action</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className='divide-y divide-gray-200'>
                {filteredServices.map((service, index) => {
                  const isExpanded = expandedServices.has(service._id)
                  return (
                    <React.Fragment key={index}>
                      {/* Main Row */}
                      <tr 
                        className='hover:bg-gray-50 transition-colors duration-200 cursor-pointer'
                        onClick={() => navigate(`/appointments/${service._id}`)}
                      >
                        {/* Service Icon & Name */}
                        <td className='px-4 py-3'>
                          <div className='flex items-center gap-3'>
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getServiceIconStyle(service.speciality)}`}>
                              <span className='text-lg'>{getServiceIcon(service.speciality)}</span>
                            </div>
                            <div>
                              <h3 className='font-semibold text-gray-900 text-sm'>{service.name}</h3>
                              <p className='text-xs text-gray-500'>{service.degree}</p>
                            </div>
                          </div>
                        </td>
                        
                        {/* Speciality */}
                        <td className='px-4 py-3'>
                          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium'>
                            <span>{getServiceIcon(service.speciality)}</span>
                            <span>{service.speciality}</span>
                          </div>
                        </td>
                        
                        {/* Experience */}
                        <td className='px-4 py-3'>
                          <div className='flex items-center gap-2 text-sm text-gray-600'>
                            <span className='text-green-500'>⏱️</span>
                            <span>{service.experience}</span>
                          </div>
                        </td>
                        
                        {/* Starting Price */}
                        <td className='px-4 py-3'>
                          <div className='text-sm font-semibold text-green-600'>
                            Rs. {service.fees}
                          </div>
                        </td>
                        
                        {/* Description with Show In/Out Button */}
                        <td className='px-4 py-3'>
                          <div className='max-w-xs'>
                            <p className='text-sm text-gray-600 line-clamp-2 leading-relaxed mb-2'>
                              {getServiceDescriptionPreview(service.about)}
                            </p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleServiceExpansion(service._id)
                              }}
                              className='text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1'
                            >
                              {isExpanded ? (
                                <>
                                  <span>👁️</span>
                                  Show Less
                                </>
                              ) : (
                                <>
                                  <span>👁️</span>
                                  Show More
                                </>
                              )}
                            </button>
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
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>📱</span>
                              Book
                            </a>
                            <button 
                              onClick={() => navigate(`/appointments/${service._id}`)}
                              className='bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors'
                            >
                              View
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Description Row */}
                      {isExpanded && (
                        <tr className='bg-blue-50'>
                          <td colSpan="6" className='px-4 py-4'>
                            <div className='bg-white rounded-lg p-4 border border-blue-200'>
                              <h4 className='font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                                <span>📋</span>
                                Complete Service Details
                              </h4>
                              <div className='prose prose-sm max-w-none'>
                                <div className='text-gray-700 leading-relaxed whitespace-pre-line'>
                                  {service.about}
                                </div>
                              </div>
                              <div className='mt-3 pt-3 border-t border-gray-200'>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleServiceExpansion(service._id)
                                  }}
                                  className='text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-2'
                                >
                                  <span>👁️</span>
                                  Show Less
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  )
                })}
              </tbody>
            </table>
          </div>
          
          {/* No Services Message */}
          {filteredServices.length === 0 && (
            <div className='text-center py-16 px-4'>
              <div className='w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-3xl'>🔍</span>
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
