// components/Footer.jsx
import Link from "next/link";
import { FaGoogle, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from "next/image";
import { logo } from "@/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section - Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <Image
                src={logo} // or "/images/logo-footer.png"
                alt="Ishani Enterprises Logo"
                width={180}
                height={60}
                className="object-contain"
                priority={false}
              />
            </div>
            {/* <MdPhone className="text-green-600 flex-shrink-0" size={20} />
            <h3 className="text-xl font-semibold text-gray-700 ">Contact Us</h3> */}
            <div className="flex items-center space-x-3">
              <MdPhone className="text-green-600" size={20} />
              <div className="space-x-3">
                <h1 className="text-xl font-semibold text-green-500">
                  Contact Us
                </h1>
              </div>
            </div>

            <p className="text-gray-500 mb-4">
              Got something to say? Please drop us a line.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <IoLocationOutline
                  className="text-green-600 mt-1 flex-shrink-0"
                  size={20}
                />
                <h4 className="text-lg font-medium text-gray-700">
                  Corp. Office:
                </h4>
              </div>
              <p className="text-gray-500 ml-7">
                Ishani Enterprises Designer Studio
                <br />
                Shop No.2 Benchmark Complex,
                <br />
                Sri Ravishankar Marg, Khode Nagar
                <br />
                Canal Rd, Vadala, Nashik - 422006
              </p>

              <div className="flex items-center space-x-3">
                <MdEmail className="text-green-600" size={20} />
                <a
                  href="mailto:ishanient@gmail.com"
                  className="text-gray-500 hover:text-gray-700 transition"
                >
                  ishanient@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MdPhone className="text-green-600" size={20} />
                <div className="space-x-3">
                  <a
                    href="tel:9421800066"
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    9421800066
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href="tel:7053211211"
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    7053211211
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Stay Connected */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">
              Stay Connected
            </h3>

            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition group"
              >
                <FaGoogle
                  className="text-green-600 group-hover:scale-110 transition"
                  size={24}
                />
                <span>Google: Keep up to date with news & announcements</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition group"
              >
                <FaFacebook
                  className="text-green-600 group-hover:scale-110 transition"
                  size={24}
                />
                <span>Facebook: See our latest portfolio & gallery</span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition group"
              >
                <FaLinkedin
                  className="text-green-600 group-hover:scale-110 transition"
                  size={24}
                />
                <span>
                  LinkedIn: Connect with us & explore professional insights
                </span>
              </a>

              <a
                href="#"
                className="flex items-center space-x-3 text-gray-500 hover:text-gray-700 transition group"
              >
                <FaYoutube
                  className="text-green-600 group-hover:scale-110 transition"
                  size={24}
                />
                <span>YouTube: Watch our videos & success stories</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Ishani Enterprises. All Rights Reserved by{" "}
              <a
                href="#"
                className="text-green-600 hover:text-green-700 transition font-medium"
              >
                Rich System Solution
              </a>
            </p>

            <div className="flex space-x-4 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-green-600 transition"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="#"
                className="text-gray-500 hover:text-green-600 transition"
              >
                Security Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
