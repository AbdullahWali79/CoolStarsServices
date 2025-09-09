import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-gradient-to-b from-gray-50 to-white'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white'>
        <div className='max-w-7xl mx-auto px-6 text-center'>
          <div className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <span>🏢</span>
            <span>About CoolStar</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Your Trusted Partner in
            <span className='block text-yellow-300'>Appliance Repair</span>
          </h1>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed'>
            With over a decade of experience, we've been keeping homes comfortable and appliances running smoothly across Lahore. 
            Our commitment to quality, reliability, and customer satisfaction makes us the #1 choice for appliance repair.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            {/* Image Section */}
            <div className='relative'>
              <div className='relative z-10'>
                <img 
                  className='w-full rounded-2xl shadow-2xl' 
                  src={assets.about_image} 
                  alt="CoolStar Team" 
                />
              </div>
              {/* Decorative Elements */}
              <div className='absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20'></div>
              <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400 rounded-full opacity-20'></div>
            </div>

            {/* Content Section */}
            <div className='space-y-8'>
              <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium'>
                <span>⭐</span>
                <span>Established 2013</span>
              </div>
              
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
                Leading Appliance Repair Service in Lahore
              </h2>
              
              <div className='space-y-6 text-lg text-gray-600 leading-relaxed'>
                <p>
                  CoolStar Services has been the trusted name in appliance repair across Lahore for over 10 years. 
                  We specialize in repairing LED TVs, ACs, refrigerators, washing machines, and all types of home electronics 
                  with unmatched expertise and dedication.
                </p>
                <p>
                  Our team of certified technicians brings years of experience and technical knowledge to every repair job. 
                  We believe in providing honest, reliable, and affordable service that keeps your appliances running like new.
                </p>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-6 pt-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-600 mb-2'>10+</div>
                  <div className='text-sm text-gray-600'>Years Experience</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-green-600 mb-2'>5000+</div>
                  <div className='text-sm text-gray-600'>Happy Customers</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-yellow-600 mb-2'>24/7</div>
                  <div className='text-sm text-gray-600'>Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {/* Vision */}
            <div className='bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200'>
              <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6'>
                <span className='text-white text-2xl'>👁️</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Vision</h3>
              <p className='text-gray-700 leading-relaxed'>
                To become the most trusted and preferred appliance repair service provider in Pakistan, 
                delivering exceptional quality, reliability, and customer satisfaction while maintaining 
                the highest standards of professional service.
              </p>
            </div>

            {/* Mission */}
            <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200'>
              <div className='w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6'>
                <span className='text-white text-2xl'>🎯</span>
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>Our Mission</h3>
              <p className='text-gray-700 leading-relaxed'>
                To provide fast, reliable, and affordable appliance repair services that exceed customer expectations. 
                We strive to deliver solutions that restore functionality and extend the life of your valuable appliances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Why Choose
              <span className='block text-blue-600'>CoolStar Services?</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              We're not just another repair service. We're your trusted partner in keeping your 
              appliances running smoothly and efficiently.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Efficiency */}
            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-white text-2xl'>⚡</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                Efficiency & Speed
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Our expert technicians provide fast, efficient repairs with same-day service availability. 
                We understand that appliance breakdowns can disrupt your daily routine, so we work quickly 
                to get your appliances back to working condition.
              </p>
            </div>

            {/* Convenience */}
            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-white text-2xl'>🏠</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors'>
                Doorstep Convenience
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                We bring our workshop to your doorstep! No need to transport heavy appliances. 
                Our mobile technicians arrive with all necessary tools and genuine parts to complete 
                repairs right in your home.
              </p>
            </div>

            {/* Personalization */}
            <div className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                <span className='text-white text-2xl'>👨‍🔧</span>
              </div>
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors'>
                Personalized Service
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                Every customer receives personalized attention and customized solutions. We take the time 
                to understand your specific needs and provide tailored repair services that ensure 
                long-lasting results and complete satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
              Our Core
              <span className='block text-blue-600'>Values</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              { icon: '🤝', title: 'Trust', description: 'Building lasting relationships through honesty and transparency' },
              { icon: '🔧', title: 'Quality', description: 'Delivering superior workmanship with every repair' },
              { icon: '⏰', title: 'Reliability', description: 'Consistent service you can count on, every time' },
              { icon: '💡', title: 'Innovation', description: 'Staying updated with latest repair techniques and technology' }
            ].map((value, index) => (
              <div key={index} className='text-center group'>
                <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-white text-3xl'>{value.icon}</span>
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>{value.title}</h3>
                <p className='text-gray-600 text-sm leading-relaxed'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-blue-600 to-blue-700'>
        <div className='max-w-4xl mx-auto px-6 text-center text-white'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>
            Ready to Experience the CoolStar Difference?
          </h2>
          <p className='text-xl text-blue-100 mb-8 leading-relaxed'>
            Join thousands of satisfied customers who trust us with their appliance repair needs. 
            Fast, reliable, and professional service guaranteed.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href="/services"
              className='bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              View Our Services
            </a>
            <a 
              href="/contact"
              className='bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30'
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
