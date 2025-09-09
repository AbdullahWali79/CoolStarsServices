import React from 'react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: "⚡",
      title: "Lightning Fast Service",
      description: "Get same-day repair service. Our technicians arrive within 2 hours of your call.",
      features: ["2-hour response time", "Same-day repairs", "24/7 availability"]
    },
    {
      icon: "🔧",
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years of experience in appliance repair.",
      features: ["Licensed technicians", "Brand certified", "Continuous training"]
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Save up to 70% compared to buying new appliances. Transparent pricing with no hidden fees.",
      features: ["No hidden charges", "Free estimates", "Competitive rates"]
    },
    {
      icon: "🛡️",
      title: "100% Guarantee",
      description: "We stand behind our work with comprehensive warranties and satisfaction guarantee.",
      features: ["Parts warranty", "Service guarantee", "Money-back promise"]
    },
    {
      icon: "🚚",
      title: "Doorstep Service",
      description: "No need to move heavy appliances. We come to you with all necessary tools and parts.",
      features: ["Home service", "Mobile workshop", "No transportation needed"]
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description: "Book your repair service online or over the phone. Simple and convenient process.",
      features: ["Online booking", "Phone support", "WhatsApp booking"]
    }
  ]

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4'>
            <span>🏆</span>
            <span>Why Choose CoolStar</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            The Smart Choice for
            <span className='block text-blue-600'>Appliance Repair</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            We're not just another repair service. We're your trusted partner in keeping your 
            appliances running smoothly and efficiently.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {reasons.map((reason, index) => (
            <div key={index} className='group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200'>
              {/* Icon */}
              <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                {reason.icon}
              </div>
              
              {/* Title */}
              <h3 className='text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors'>
                {reason.title}
              </h3>
              
              {/* Description */}
              <p className='text-gray-600 mb-6 leading-relaxed'>
                {reason.description}
              </p>
              
              {/* Features */}
              <div className='space-y-2'>
                {reason.features.map((feature, idx) => (
                  <div key={idx} className='flex items-center gap-2 text-sm text-gray-600'>
                    <span className='text-green-500'>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center'>
          <h3 className='text-3xl font-bold mb-6'>Ready to Experience the Difference?</h3>
          <p className='text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed'>
            Join thousands of satisfied customers who trust CoolStar for their appliance repair needs. 
            Fast, reliable, and professional service guaranteed.
          </p>
          
          {/* Stats Row */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
            <div className='text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>10+</div>
              <div className='text-blue-100'>Years Experience</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>5000+</div>
              <div className='text-blue-100'>Happy Customers</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>24/7</div>
              <div className='text-blue-100'>Service Available</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-bold text-yellow-300 mb-2'>100%</div>
              <div className='text-blue-100'>Satisfaction Rate</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href="https://api.whatsapp.com/send/?phone=923234499881&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
            >
              <span>📱</span>
              Book on WhatsApp
            </a>
            <a 
              href="tel:+923001234567"
              className='bg-white/20 backdrop-blur-sm hover:bg-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 border border-white/30'
            >
              📞 Call for Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
