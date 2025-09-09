import React, { useState } from 'react'
import call from '../assets/call.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appliance: '',
    issue: '',
    address: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you within 2 hours.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      appliance: '',
      issue: '',
      address: ''
    })
  }

  return (
    <div className='py-20 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <span>📞</span>
            <span>Get In Touch</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Contact Us
            <span className='block text-blue-600'>for Fast Service</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Need appliance repair? Contact us now and get same-day service. 
            Our expert technicians are ready to help you 24/7.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
            <h2 className='text-2xl font-bold text-gray-900 mb-6'>Get Free Quote</h2>
            <p className='text-gray-600 mb-8'>
              Fill out the form below and we'll get back to you within 2 hours with a free estimate.
            </p>
            
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Full Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Phone Number *</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                    placeholder='+92 300 1234567'
                  />
                </div>
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Email Address</label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                  placeholder='your@email.com'
                />
              </div>
              
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Appliance Type *</label>
                  <select
                    name='appliance'
                    value={formData.appliance}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                  >
                    <option value=''>Select appliance</option>
                    <option value='Air Conditioner'>Air Conditioner</option>
                    <option value='LED TV'>LED TV</option>
                    <option value='Washing Machine'>Washing Machine</option>
                    <option value='Refrigerator'>Refrigerator</option>
                    <option value='Microwave'>Microwave</option>
                    <option value='Kitchen Hood'>Kitchen Hood</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>Issue Type</label>
                  <select
                    name='issue'
                    value={formData.issue}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                  >
                    <option value=''>Select issue</option>
                    <option value='Not Working'>Not Working</option>
                    <option value='Making Noise'>Making Noise</option>
                    <option value='Poor Performance'>Poor Performance</option>
                    <option value='Leaking'>Leaking</option>
                    <option value='Other'>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>Service Address *</label>
                <textarea
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows='3'
                  className='w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
                  placeholder='Enter your complete address'
                />
              </div>
              
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl'
              >
                Get Free Quote Now
              </button>
              
              <p className='text-sm text-gray-500 text-center'>
                By submitting this form, you agree to our terms and privacy policy.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Office Info */}
            <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                <span>🏢</span>
                Our Office
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <span className='text-blue-600 text-xl'>📍</span>
                  <div>
                    <p className='font-medium text-gray-900'>Ameen Plaza Shop #01</p>
                    <p className='text-gray-600'>Airline Society, Lahore</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-blue-600 text-xl'>📞</span>
                  <div>
                    <p className='font-medium text-gray-900'>+92 323 7209988</p>
                    <p className='text-gray-600'>Main Office</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-blue-600 text-xl'>📱</span>
                  <div>
                    <p className='font-medium text-gray-900'>+92 323 4499881</p>
                    <p className='text-gray-600'>WhatsApp</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='text-blue-600 text-xl'>✉️</span>
                  <div>
                    <p className='font-medium text-gray-900'>coolstarservices99@gmail.com</p>
                    <p className='text-gray-600'>Email Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white'>
              <h3 className='text-xl font-bold mb-6'>Need Immediate Help?</h3>
              <div className='space-y-4'>
                <a 
                  href="tel:+923237209988"
                  className='flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300'
                >
                  📞 Call Emergency Line
                </a>
                <a 
                  href="https://wa.me/923234499881"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 px-6 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300'
                >
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className='bg-white rounded-2xl p-8 shadow-xl border border-gray-100'>
              <h3 className='text-xl font-bold text-gray-900 mb-6 flex items-center gap-2'>
                <span>🕒</span>
                Business Hours
              </h3>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Monday - Friday</span>
                  <span className='font-medium'>8:00 AM - 8:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Saturday</span>
                  <span className='font-medium'>9:00 AM - 6:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Sunday</span>
                  <span className='font-medium'>10:00 AM - 4:00 PM</span>
                </div>
                <div className='pt-3 border-t border-gray-200'>
                  <div className='flex justify-between'>
                    <span className='text-green-600 font-medium'>Emergency Service</span>
                    <span className='text-green-600 font-medium'>24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact