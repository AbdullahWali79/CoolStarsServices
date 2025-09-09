import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedServices from '../components/RelatedDoctors'

export default function Appointments() {
  const { serviceId } = useParams()
  const { services, currencySymbol } = useContext(AppContext)
  const [serviceInfo, setServiceInfo] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)

  useEffect(() => {
    if (services.length > 0 && serviceId) {
      const foundService = services.find(service => service._id === serviceId)
      setServiceInfo(foundService)
      if (foundService?.image) {
        setSelectedImage(foundService.image)
      }
    }
  }, [services, serviceId])

  if (!serviceInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    )
  }

  const openImageModal = (image) => {
    setSelectedImage(image)
    setIsImageModalOpen(true)
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
  }

  const toggleDescriptionExpansion = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600">Home</a>
            <span>→</span>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <span>→</span>
            <span className="text-gray-900 font-medium">{serviceInfo.name}</span>
          </nav>
        </div>

        {/* Main Service Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          {/* Top Section - Image and Basic Info Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image Section */}
            <div className="relative bg-gray-100 p-8 flex items-center justify-center">
              <div className="relative group cursor-pointer" onClick={() => openImageModal(serviceInfo.image)}>
                <img 
                  className="w-full h-72 object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  src={serviceInfo.image} 
                  alt={serviceInfo.name}
                />
                {/* Zoom Indicator */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Service Status Badge */}
              <div className="absolute top-6 left-6">
                <div className="bg-green-500 text-white px-3 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Available Now
                </div>
              </div>
          </div>

            {/* Right Side - Service Information */}
            <div className="p-8 flex flex-col justify-center">
              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    <span>{getServiceIcon(serviceInfo.speciality)}</span>
                    <span>{serviceInfo.speciality}</span>
                  </div>
                  <img className="w-6 h-6" src={assets.verified_icon} alt="Verified" />
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              {serviceInfo.name}
                </h1>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500">🎓</span>
                    <span>{serviceInfo.degree}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500">⏱️</span>
                    <span>{serviceInfo.experience}</span>
                  </div>
                </div>
              </div>

              {/* Quick Service Description Preview */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <img src={assets.info_icon} alt="" className="w-5 h-5" />
                  Service Overview
                </h3>
                <p className="text-gray-600 leading-relaxed text-base line-clamp-4">
                  {getServiceDescriptionPreview(serviceInfo.about)}
                </p>
                <button 
                  onClick={() => document.getElementById('full-description').scrollIntoView({ behavior: 'smooth' })}
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2 text-sm flex items-center gap-1"
                >
                  Read Full Description ↓
                </button>
               </div>

              {/* Pricing and CTA */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-6">
               <div>
                    <p className="text-sm text-gray-500">Fee Starting From</p>
                    <p className="text-3xl font-bold text-blue-600">{currencySymbol} {serviceInfo.fees}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Response Time</p>
                    <p className="text-lg font-semibold text-green-600">2 Hours</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span>📱</span>
                    Book on WhatsApp
                  </a>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-blue-600 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 border-2 border-blue-600 hover:border-blue-700">
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Service Description Section */}
        <div id="full-description" className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Service Details</h2>
          
          {/* Service Description with Show More/Less */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <img src={assets.info_icon} alt="" className="w-6 h-6" />
              About This Service
            </h3>
            
            {/* Description Preview (Always Visible) */}
            <div className="text-gray-600 leading-relaxed text-base mb-4">
              {getServiceDescriptionPreview(serviceInfo.about)}
            </div>
            
            {/* Show More/Less Button */}
            <button 
              onClick={toggleDescriptionExpansion}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              {isDescriptionExpanded ? (
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
            
            {/* Expanded Description Content */}
            {isDescriptionExpanded && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-gray-600 leading-relaxed text-base">
                  {formatServiceDescription(serviceInfo.about)}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={toggleDescriptionExpansion}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2"
                  >
                    <span>👁️</span>
                    Show Less
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Information Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Service Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-500 text-2xl">✓</span>
              What's Included
            </h3>
            
            {/* Features Preview (Always Visible) */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Professional Diagnosis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Genuine Parts</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Warranty Coverage</span>
              </div>
            </div>
            
            {/* Show More/Less Button */}
            <button 
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg border border-green-200 hover:bg-green-50 transition-all duration-300"
            >
              {isDescriptionExpanded ? (
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
            
            {/* Expanded Features */}
            {isDescriptionExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Doorstep Service</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Same Day Repair</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Free Estimates</span>
                </div>
              </div>
            )}
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-blue-500 text-2xl">⭐</span>
              Why Choose Us
            </h3>
            
            {/* Benefits Preview (Always Visible) */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>24/7 Emergency Service</span>
              </div>
            </div>
            
            {/* Show More/Less Button */}
            <button 
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              {isDescriptionExpanded ? (
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
            
            {/* Expanded Benefits */}
            {isDescriptionExpanded && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Affordable Pricing</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Warranty on All Repairs</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Services */}
        <RelatedServices serviceId={serviceId} speciality={serviceInfo.speciality} />
               </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt={serviceInfo.name}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
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

function formatServiceDescription(description) {
  if (!description) return '';

  // Split by common separators and format professionally
  const sections = description.split(/\.{3,}|\.{2,}/);
  
  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        const trimmedSection = section.trim();
        if (!trimmedSection) return null;

        // Check if it's a numbered list item
        if (/\d+\./.test(trimmedSection)) {
          const parts = trimmedSection.split(/(\d+\.)/);
          if (parts.length >= 3) {
            const number = parts[1];
            const content = parts.slice(2).join('').trim();
            return (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {number.replace('.', '')}
                </div>
                <p className="text-gray-600 leading-relaxed">{content}</p>
              </div>
            );
          }
        }

        // Check if it's a question
        if (trimmedSection.includes('?')) {
          return (
            <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-800 font-medium">{trimmedSection}</p>
            </div>
          );
        }

        // Check if it's a heading (contains keywords like "What Included", "Why", "Common Problems")
        if (/\b(What|Why|Common|Services|Expert|Professional|Available|All|We|Our)\b/i.test(trimmedSection) && trimmedSection.length < 100) {
          return (
            <h4 key={index} className="text-lg font-semibold text-gray-800 mt-6 mb-3">
              {trimmedSection}
            </h4>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="text-gray-600 leading-relaxed">
            {trimmedSection}
          </p>
        );
      })}
    </div>
  );
}

function getServiceDescriptionPreview(description) {
  if (!description) return '';
  const preview = description.split(/\.{3,}|\.{2,}/)[0]; // Take the first sentence or paragraph
  return preview.length > 150 ? preview.substring(0, 150) + '...' : preview;
}

