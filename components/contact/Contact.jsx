// app/contact/page.js (for Next.js 13+ App Router)
// or pages/contact.js (for Pages Router)
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Get in touch with our team for inquiries,supporty,or to visit our
            facilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 ">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter subject"
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Select a subject <span className="text-red-500">*</span>
                </label>
                <select className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors bg-white">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-green-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-none"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            {/* Contact Info Cards */}
            <div className="bg-gray-100 rounded-2xl shadow-xl p-6 md:p-8 border-gray-50">
              <h2 className="text-2xl font-bold text-green-800 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <FaPhone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Phone</h3>
                    <p className="text-green-600">9421800066</p>
                    <p className="text-green-600">7053211211</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <FaEnvelope className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Email</h3>
                    <p className="text-green-600">ishanient@gmail.com</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-emerald-100 p-3 rounded-lg group-hover:bg-emerald-200 transition-colors">
                    <FaWhatsapp className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">WhatsApp</h3>
                    <p className="text-emerald-600">8208095812</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 ">
              <h3 className="font-semibold text-green-800 mb-4">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-all transform hover:scale-110 hover:rotate-6 shadow-md"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-all transform hover:scale-110 hover:rotate-6 shadow-md"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white p-3 rounded-lg transition-all transform hover:scale-110 hover:rotate-6 shadow-md"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-emerald-400 hover:bg-emerald-500 text-white p-3 rounded-lg transition-all transform hover:scale-110 hover:rotate-6 shadow-md"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Corporate Office Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 ">
              <h3 className="font-semibold text-green-800 mb-4">
                Corporate Office
              </h3>
              <div className="flex items-start space-x-4 group">
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors flex-shrink-0">
                  <MdLocationOn className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-green-800">
                    Ishani Enterprises Designer Studio
                  </p>
                  <p className="text-green-600 mt-1">
                    Shop No.2 Benchmark Complex,
                    <br />
                    Sri Ravishankar Marg, Khode Nagar
                    <br />
                    Canal Rd, Vadala, Nashik - 422006
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
