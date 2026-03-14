// components/Navbar.jsx
"use client";

import { useState } from "react";
import {
  Home,
  Info,
  Shield,
  Beaker,
  Users,
  Phone,
  Menu,
  X,
  ChevronDown,
  Building2,
  Trophy,
  Microscope,
  Atom,
  Biohazard,
  ThermometerSnowflake,
  Flame,
  ScanSearch,
  Droplets,
  Wind,
  Wheat,
  FlaskConical,
  ChevronRight,
} from "lucide-react";
import { logo } from "@/assets";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const navItems = [
    { name: "HOME", icon: Home, href: "/" },
    {
      name: "ABOUT US",
      icon: Info,
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { name: "WHO WE ARE", icon: Users, href: "/about/who-we-are" },
        { name: "ENVICHEM STRENGTH", icon: Trophy, href: "/about/strength" },
        {
          name: "FACILITY TOUR",
          icon: Building2,
          href: "/about/facility-tour",
        },
        {
          name: "RESEARCH & DEVELOPMENT",
          icon: Microscope,
          href: "/about/research",
        },
      ],
    },
    { name: "CAPABILITIES", icon: Shield, href: "/capabilities" },
    {
      name: "PRODUCTS",
      icon: Beaker,
      href: "/products",
      hasDropdown: true,
      dropdownItems: [
        { name: "POLYMERS", icon: Atom },
        { name: "BIOCIDES", icon: Biohazard },
        { name: "COOLING WATER TREATMENT", icon: ThermometerSnowflake },
        { name: "BOILER WATER TREATMENT", icon: Flame },
        { name: "BOILER FIRESIDE TREATMENT", icon: Flame },
        { name: "REVERSE OSMOSIS TREATMENT", icon: Droplets },
        { name: "DESCALENT", icon: ScanSearch },
        { name: "EFFLUENT WATER TREATMENT", icon: Droplets },
        { name: "ANTIFOAMERS AND DEFOAMERS", icon: Wind },
        { name: "SUGAR PROCESS CHEMICALS", icon: Wheat },
      ],
    },
    { name: "OUR CLIENTS", icon: Users, href: "/clients" },
    { name: "CONTACT US", icon: Phone, href: "/contact" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setOpenMobileDropdown(openMobileDropdown === index ? null : index);
  };

  // Close dropdowns when clicking outside
  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar with Company Name */}
      <div className="container mx-auto px-8 py-3 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <FlaskConical className="w-8 h-10 text-green-600" />
          <div>
            <Image
              src={logo}
              alt="Envichem logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div
          className="hidden lg:flex items-center space-x-2`
        +"
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasDropdown && toggleDropdown(index)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center space-x-1"
                onClick={() =>
                  item.hasDropdown
                    ? toggleDropdown(index)
                    : (window.location.href = item.href)
                }
              >
                <item.icon className="w-4 h-4 text-green-600" />
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && openDropdown === index && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                  {item.dropdownItems.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={
                        item.name === "PRODUCTS"
                          ? `/products/${dropdownItem.name.toLowerCase().replace(/\s+/g, "-")}`
                          : dropdownItem.href
                      }
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 flex items-center space-x-3 group"
                    >
                      <dropdownItem.icon className="w-5 h-5 text-green-600" />
                      <span>{dropdownItem.name}</span>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-green-600" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-md hover:bg-green-50 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-green-600" />
          ) : (
            <Menu className="w-6 h-6 text-green-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-green-600" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        openMobileDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Mobile Dropdown Content */}
                  {openMobileDropdown === index && (
                    <div className="ml-6 mt-2 space-y-1 border-l-2 border-green-200 pl-2">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={
                            item.name === "PRODUCTS"
                              ? `/products/${dropdownItem.name.toLowerCase().replace(/\s+/g, "-")}`
                              : dropdownItem.href
                          }
                          className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center space-x-2"
                        >
                          <dropdownItem.icon className="w-4 h-4 text-green-600" />
                          <span>{dropdownItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors duration-200 flex items-center space-x-2"
                >
                  <item.icon className="w-5 h-5 text-green-600" />
                  <span>{item.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
