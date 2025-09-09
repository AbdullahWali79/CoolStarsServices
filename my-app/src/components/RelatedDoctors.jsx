import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedServices = ({speciality, serviceId}) => {
    const { services } = useContext(AppContext)
    const navigate = useNavigate()
    const [relatedServices, setRelatedServices] = useState([])

    useEffect(() => {
        if (services.length > 0 && speciality){
            const servicesData = services.filter((service) => service.speciality === speciality && service._id !== serviceId)
            setRelatedServices(servicesData)
        }
    }, [services, speciality, serviceId])

    if (relatedServices.length === 0) return null

    return (
        <section className='py-12 bg-gradient-to-b from-gray-50 to-white'>
            <div className='max-w-7xl mx-auto px-6'>
                {/* Section Header - Reduced spacing */}
                <div className='text-center mb-8'>
                    <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3'>
                        <span>🔗</span>
                        <span>Related Services</span>
                    </div>
                    <h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-3'>
                        More {speciality} Services
                    </h2>
                    <p className='text-base text-gray-600 max-w-2xl mx-auto'>
                        Explore more services in the same category. Our expert technicians are ready to help with all your appliance needs.
                    </p>
                </div>

                {/* Services Grid - Reduced gap */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6'>
                    {relatedServices.slice(0, 8).map((service, index) => (
                        <div 
                            key={index}
                            onClick={() => {
                                navigate(`/appointments/${service._id}`)
                                scrollTo(0, 0)
                            }} 
                            className='group bg-white rounded-lg overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200'
                        >
                            {/* Beautiful Service Icon - Reduced padding */}
                            <div className='relative p-4 flex items-center justify-center bg-gray-50'>
                                <div className={`w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getServiceIconStyle(service.speciality)}`}>
                                    <span className='text-xl'>{getServiceIcon(service.speciality)}</span>
                                </div>
                                <div className='absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1'>
                                    <div className='w-1.5 h-1.5 bg-white rounded-full animate-pulse'></div>
                                    Available
                                </div>
                                
                                {/* Service Type Badge */}
                                <div className='absolute top-2 left-2'>
                                    <div className='inline-flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium'>
                                        <span>{getServiceIcon(service.speciality)}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Service Content - Reduced padding */}
                            <div className='p-3'>
                                <div className='flex items-center gap-2 text-xs text-blue-600 font-medium mb-2'>
                                    <span>{getServiceIcon(service.speciality)}</span>
                                    <span>{service.speciality}</span>
                                </div>
                                <h3 className='text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight'>
                                    {service.name}
                                </h3>
                                
                                {/* Service Description Preview */}
                                <div className='mb-2'>
                                    <p className='text-xs text-gray-600 line-clamp-2 leading-tight'>
                                        {getServiceDescriptionPreview(service.about)}
                                    </p>
                                </div>
                                
                                <div className='flex items-center justify-between text-xs text-gray-600 mb-2'>
                                    <span className='flex items-center gap-1'>
                                        <span className='text-green-500'>⏱️</span>
                                        {service.experience}
                                    </span>
                                    <span className='font-medium text-green-600'>Rs. {service.fees}</span>
                                </div>
                                
                                {/* CTA */}
                                <div className='flex items-center justify-between pt-2 border-t border-gray-100'>
                                    <a 
                                        href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='text-green-600 font-medium text-xs hover:text-green-700 transition-colors flex items-center gap-1'
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <span>📱</span>
                                        Book on WhatsApp
                                    </a>
                                    <div className='w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors'>
                                        <span className='text-blue-600 text-sm'>→</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className='text-center'>
                    <button 
                        onClick={() => {
                            navigate('/services')
                            scrollTo(0, 0)
                        }} 
                        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl'
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
    const words = cleanDescription.split(' ').slice(0, 12);
    return words.join(' ') + '...';
}

export default RelatedServices
