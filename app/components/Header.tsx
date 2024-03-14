"use client";
import Link from "next/link";
import { useState } from "react";
import img from "next/image";
import Headroom from "react-headroom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Headroom>
      <nav className="bg-white text-black p-4 row slide slide--reset headroom--top top-0 w-full z-50 transition-transform duration-100 ease-in-out">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          {/* <a href="/" className="text-black text-lg font-semibold">
        YourLogo
      </a> */}
          <Link href="/">
            <img
              className="md:h-7 ml-8 md:ml-12  "
              src="/images/Logo.svg"
              alt="Your Company"
              width="127"
              height="21"
            ></img>
          </Link>

          {/* Navigation links on the right for larger screens */}
          <div className="hidden lg:flex lg:items-center">
            <a
              href="/services"
              className="pr-11  text-black text-base font-normal font-['Work Sans'] hover:text-[#fe2712] ml-4"
            >
              services
            </a>
            <a
              href="/about"
              className="pr-11 text-black text-base font-normal font-['Work Sans'] hover:text-[#fe2712] ml-4"
            >
              About
            </a>
            <a
              href="/contact"
              className="pr-11  text-black text-base font-normal font-['Work Sans'] hover:text-[#fe2712] ml-4"
            >
              Contact
            </a>
            <a
              href="/branding"
              className="pr-11  text-black text-base font-normal font-['Work Sans'] hover:text-[#fe2712] ml-4"
            >
              Branding
            </a>
          </div>

          {/* Hamburger icon on the right for small screens  */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-black focus:outline-none focus:border-none"
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <a
            href="/about"
            className="block mt-4 pl-8 text-5xl font-semibold text-black leading-normal font-['Urbanist'] hover:text-[#fe2712]"
          >
            About
          </a>
          <a
            href="/services"
            className="block mt-4 pl-8 text-5xl font-semibold text-black leading-normal font-['Urbanist']  hover:text-[#fe2712]"
          >
            Services
          </a>
          <a
            href="/contact"
            className="block mt-4 pl-8 text-5xl font-semibold text-black leading-normal font-['Urbanist'] hover:text-[#fe2712]"
          >
            Contact
          </a>
          <a
            href="/branding"
            className="block mt-4 pl-8 text-5xl font-semibold text-black leading-normal font-['Urbanist'] hover:text-[#fe2712]"
          >
            Branding
          </a>
          <div className="w-full pr-6 pt-16 pl-8 text-black text-2xl font-light font-['Urbanist'] leading-normal">
            Ready To Achieve Digital Success? Let Us Assist You
          </div>
          <button
            type="button"
            className=" bg-white rounded text-gray-800 text-base font-medium ml-8 mt-6 py-2 px-2 w-40 h-12 [font-family : 'Poppins'] hover:text-[#fe2712] leading-tight"
          >
            {" "}
            GET IN TOUCH
          </button>
        </div>
      </nav>
    </Headroom>
  );
};

export default Header;
