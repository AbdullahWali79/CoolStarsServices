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

        {/* Services Table - Compact Format with Expandable Descriptions */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              {/* Table Header */}
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Service</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Speciality</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Experience</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Starting Price</th>
                  <th className='px-4 py-3 text-center text-sm font-semibold text-gray-900'>Action</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className='divide-y divide-gray-200'>
                {services.slice(0, 8).map((service, index) => {
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
                              <div className='flex items-center gap-2 mt-1'>
                                <span className='bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-medium'>Popular</span>
                              </div>
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
                            <span className='text-blue-500'>⭐</span>
                            <span>{service.experience}</span>
                          </div>
                        </td>
                        
                        {/* Starting Price */}
                        <td className='px-4 py-3'>
                          <div className='text-sm font-semibold text-green-600'>
                            Rs. {service.fees}
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
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleServiceExpansion(service._id)
                              }}
                              className='text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1 px-2 py-1 rounded border border-blue-200 hover:bg-blue-50'
                            >
                              {isExpanded ? (
                                <>
                                  <span>👁️</span>
                                  Less
                                </>
                              ) : (
                                <>
                                  <span>👁️</span>
                                  More
                                </>
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Description Row */}
                      {isExpanded && (
                        <tr className='bg-blue-50'>
                          <td colSpan="5" className='px-4 py-4'>
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

// Helper function to get service icons
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

export default TopServices
