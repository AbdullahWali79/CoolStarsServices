import React, { useState } from 'react'

const Testimonials = () => {
  const [expandedReviews, setExpandedReviews] = useState(new Set())

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      location: "Gulberg, Lahore",
      rating: 5,
      service: "AC Repair",
      comment: "Excellent service! The technician arrived within 2 hours and fixed my AC cooling issue. Very professional and affordable. Highly recommended!",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      name: "Fatima Ali",
      location: "DHA, Lahore",
      rating: 5,
      service: "Washing Machine",
      comment: "My washing machine was making strange noises. The team diagnosed and fixed it perfectly. Same-day service and great warranty. Thank you!",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      name: "Muhammad Hassan",
      location: "Johar Town, Lahore",
      rating: 5,
      service: "LED TV Repair",
      comment: "Professional LED TV repair service. Fixed the display issue and updated the software. Very knowledgeable technicians and fair pricing.",
      avatar: "👨‍💻"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      location: "Model Town, Lahore",
      rating: 5,
      service: "Fridge Repair",
      comment: "Quick response and excellent fridge repair service. The technician was punctual and fixed the cooling problem efficiently. Great value for money!",
      avatar: "👩‍🔧"
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ))
  }

  const toggleReviewExpansion = (reviewId) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }

  return (
    <section className='py-12 bg-gray-50 relative overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 opacity-5'>
        <img 
          src='https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop&crop=center' 
          alt="" 
          className='w-full h-full object-cover'
        />
      </div>
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        {/* Section Header - Reduced spacing */}
        <div className='text-center mb-10'>
          <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mb-3'>
            <span>⭐</span>
            <span>Customer Reviews</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            What Our Customers
            <span className='block text-blue-600'>Say About Us</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            Don't just take our word for it. Here's what our satisfied customers have to say about our 
            professional appliance repair services.
          </p>
        </div>

        {/* Stats Summary - Compact Cards */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
          {/* Overall Rating Card */}
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white text-center'>
            <div className='text-3xl mb-2'>⭐</div>
            <div className='text-2xl font-bold mb-1'>4.9</div>
            <div className='text-blue-100 text-xs mb-2'>Out of 5 Stars</div>
            <div className='flex justify-center gap-1 mb-2'>
              {renderStars(5)}
            </div>
            <div className='text-xs text-blue-100'>
              Based on 500+ Reviews
            </div>
          </div>

          {/* Stats Cards */}
          <div className='bg-white rounded-xl p-4 text-center shadow-lg'>
            <div className='text-2xl font-bold text-blue-600 mb-1'>5000+</div>
            <div className='text-gray-600 text-sm'>Happy Customers</div>
          </div>

          <div className='bg-white rounded-xl p-4 text-center shadow-lg'>
            <div className='text-2xl font-bold text-green-600 mb-1'>95%</div>
            <div className='text-gray-600 text-sm'>Success Rate</div>
          </div>

          <div className='bg-white rounded-xl p-4 text-center shadow-lg'>
            <div className='text-2xl font-bold text-orange-600 mb-1'>2hrs</div>
            <div className='text-gray-600 text-sm'>Avg Response</div>
          </div>
        </div>

        {/* Customer Reviews Table - Compact Format */}
        <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8'>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              {/* Table Header */}
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Customer</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Service</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Rating</th>
                  <th className='px-4 py-3 text-left text-sm font-semibold text-gray-900'>Review</th>
                  <th className='px-4 py-3 text-center text-sm font-semibold text-gray-900'>Action</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className='divide-y divide-gray-200'>
                {testimonials.map((testimonial) => {
                  const isExpanded = expandedReviews.has(testimonial.id)
                  return (
                    <React.Fragment key={testimonial.id}>
                      {/* Main Row */}
                      <tr className='hover:bg-gray-50 transition-colors duration-200'>
                        {/* Customer Info */}
                        <td className='px-4 py-3'>
                          <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg'>
                              {testimonial.avatar}
                            </div>
                            <div>
                              <div className='font-semibold text-gray-900 text-sm'>{testimonial.name}</div>
                              <div className='text-xs text-gray-500'>{testimonial.location}</div>
                            </div>
                          </div>
                        </td>
                        
                        {/* Service */}
                        <td className='px-4 py-3'>
                          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium'>
                            <span>🔧</span>
                            <span>{testimonial.service}</span>
                          </div>
                        </td>
                        
                        {/* Rating */}
                        <td className='px-4 py-3'>
                          <div className='flex items-center gap-1'>
                            {renderStars(testimonial.rating)}
                          </div>
                        </td>
                        
                        {/* Review Preview */}
                        <td className='px-4 py-3'>
                          <div className='max-w-xs'>
                            <p className='text-sm text-gray-600 line-clamp-2 leading-relaxed mb-2'>
                              "{testimonial.comment}"
                            </p>
                            <button
                              onClick={() => toggleReviewExpansion(testimonial.id)}
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
                        
                        {/* Action */}
                        <td className='px-4 py-3'>
                          <div className='flex items-center justify-center'>
                            <button
                              onClick={() => toggleReviewExpansion(testimonial.id)}
                              className='text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center gap-1 px-3 py-1.5 rounded border border-blue-200 hover:bg-blue-50'
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
                      
                      {/* Expanded Review Row */}
                      {isExpanded && (
                        <tr className='bg-blue-50'>
                          <td colSpan="5" className='px-4 py-4'>
                            <div className='bg-white rounded-lg p-4 border border-blue-200'>
                              <h4 className='font-semibold text-gray-900 mb-3 flex items-center gap-2'>
                                <span>💬</span>
                                Complete Customer Review
                              </h4>
                              <div className='prose prose-sm max-w-none'>
                                <blockquote className='text-gray-700 leading-relaxed italic text-lg'>
                                  "{testimonial.comment}"
                                </blockquote>
                              </div>
                              <div className='mt-3 pt-3 border-t border-gray-200'>
                                <button
                                  onClick={() => toggleReviewExpansion(testimonial.id)}
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

        {/* Bottom CTA - Reduced spacing */}
        <div className='text-center mt-12'>
          <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Join Our Happy Customers!</h3>
            <p className='text-gray-600 mb-4 max-w-2xl mx-auto'>
              Experience the same excellent service that our customers rave about. 
              Book your repair today and see why we're the #1 choice in Lahore.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <a 
                href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <span>📱</span>
                Book on WhatsApp
              </a>
              <a 
                href="tel:+923001234567"
                className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300'
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
