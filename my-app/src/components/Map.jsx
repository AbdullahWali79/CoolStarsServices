import React from 'react';

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row w-full bg-white relative">
      {/* Google Map Section */}
      <div className="md:w-1/2 w-full h-[400px] md:h-auto">
        <iframe
          src="https://maps.google.com/maps?q=Star%20solution%27s%20Ameen%2C%20Jan%20Muhammad%20Road%2C%20Lahore%20District%2C%2054770%2C%20PK&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Star solution's Ameen, Jan Muhammad Road, Lahore District, 54770, PK"
          className="rounded-lg shadow-md"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="md:w-1/2 w-full bg-gray-50 p-8 md:p-12 flex items-center">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form
            action="mailto:coolstarservices99@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Contact Number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF]"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f6FFF]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#5f6FFF] hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
