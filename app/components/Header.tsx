"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        closeSubMenu();
      }
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const closeSubMenu = () => {
    setActiveMenu(null);
  };

  const renderSubMenu = (menu: string) => {
    if (activeMenu === menu) {
      let submenuContent: JSX.Element | null = null;



      if (menu === "industries") {
        submenuContent = (
          <div className="fixed md:top-32 left-1/2 transform -translate-x-1/2 w-full md:max-w-6xl bg-black text-white z-50">
            <div className="container mx-auto px-4 py-10">
              <ul className="list-none">
                <div className="grid md:grid-cols-8 sm:grid-cols-1 gap-2">
                  <li className="text-4xl  text-center font-Oswald ">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <li className="md:col-start-6  underline underline-offset-4 ">
                    <Link href="/about">Overview</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/policyPrivacy">Privacy Policy</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        );
      } else if (menu === "services") {
        submenuContent = (
          <div className="fixed md:top-32 left-1/2 transform -translate-x-1/2 w-full md:max-w-6xl bg-black text-white z-50">
            <div className="container mx-auto px-4 py-10">
              <ul>
                <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-2">
                  <li className="text-4xl  text-center font-Oswald">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="md:col-start-3  underline underline-offset-4 ">
                    <Link href="/applicationServices">Application Services</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/devops">Dev Ops</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/itStaff">IT Staffing</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/testing">QA & Testing</Link>
                  </li>
                  <li className="underline underline-offset-4 md:col-start-3 ">
                    <Link href="/product">Product Engineering</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/migration">System Migration</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        );
      } else if (menu === "contact") {
        submenuContent = (
          <div className="fixed md:top-32 left-1/2 transform -translate-x-1/2 w-full md:max-w-6xl bg-black text-white z-50">
            <div className="container mx-auto px-4 py-10">
              <ul>
                <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-2">
                  <li className="text-4xl  text-center font-Oswald">
                    <Link href="/industries">Industries</Link>
                  </li>
                  <li className="md:col-start-3  underline underline-offset-4 ">
                    <Link href="/startup">Start up</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/retailSector">Retail Sector</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/professional">Professional Services</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/notForProfit">Not for Profit</Link>
                  </li>
                  <li className="underline underline-offset-4 md:col-start-3 ">
                    <Link href="/manufacturing">Manufacturing and Distribution</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/healthCare">Health Care and Life Science</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/food">Food and Beverage</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/finTech">Fin Tech</Link>
                  </li>
                  <li className="underline underline-offset-4 md:col-start-3">
                    <Link href="/engineering">Engineering</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/energy">Energy</Link>
                  </li>
                  <li className="underline underline-offset-4 ">
                    <Link href="/education">Education</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        );
        // } else if (menu === "enquire") {
        //   submenuContent = (
        //     <div className="fixed md:top-32 left-1/2 transform -translate-x-1/2 w-full md:max-w-6xl bg-black text-white z-50">
        //       <div className="container mx-auto px-4 py-10">
        //         <ul>
        //           <div className="grid md:grid-cols-8 sm:grid-cols-1 gap-2">
        //             <li className="text-4xl  text-center font-Oswald">
        //               <Link href="/contact-us">Contact Us</Link>
        //             </li>

        //           </div>
        //         </ul>
        //       </div>
        //     </div>
        //   );
      }

      return submenuContent;
    }
    return null;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white">
      <nav className="max-w-7xl mx-auto bg-white text-black p-4 row top-0 z-50 transition-transform duration-100 ease-in-out relative">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <img
              className="md:h-9 ml-8 md:ml-12"
              src="/images/Notion_Logo-02.svg"
              alt="Your Company"
              width="127"
              height="21"
            />
          </Link>
          <div ref={submenuRef} className="lg:flex lg:items-center hidden">
            <li
              className="list-none pr-11 text-black text-xl font-normal font-Oswald hover:text-orange-300 ml-4 relative group"
              onClick={() => handleMenuClick("industries")}
            >
              <a href="#">About Us</a>
              {renderSubMenu("industries")}
            </li>
            <li
              className="list-none pr-11 text-black text-xl font-normal font-Oswald hover:text-orange-300 ml-4 relative group"
              onClick={() => handleMenuClick("services")}
            >
              <a href="#">Services</a>
              {renderSubMenu("services")}
            </li>
            <li
              className="list-none pr-11 text-black text-xl font-normal font-Oswald hover:text-orange-300 ml-4 relative group"
              onClick={() => handleMenuClick("contact")}
            >
              <a href="#">Industries</a>
              {renderSubMenu("contact")}
            </li>
            <li
              className="list-none pr-11 text-black text-xl font-normal font-Oswald hover:text-orange-300 ml-4 relative group"
              onClick={() => handleMenuClick("enquire")}
            >
              <a href="/enquire">Contact Us</a>
              {renderSubMenu("enquire")}
            </li>
          </div>
          <div className="lg:hidden"  >
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
            <div

              className={`lg:hidden ${isOpen ? "block" : "hidden"} absolute left-0 right-0 top-full bg-white shadow-lg`}
            >
              <ul className="mt-4">
                <li
                  className="list-none pr-11 text-black md:text-xl text-2xl font-normal font-['Work Sans'] hover:text-orange-300 ml-4 relative group"
                  onClick={() => handleMenuClick("industries")}
                >
                  <a href="#footers">About Us</a>
                  {renderSubMenu("industries")}
                </li>
                <li
                  className="list-none pr-11 text-black md:text-xl text-2xl font-normal font-['Work Sans'] hover:text-orange-300 ml-4 relative group"
                  onClick={() => handleMenuClick("services")}
                >
                  <a href="#footers">Services</a>
                  {renderSubMenu("services")}
                </li>
                <li
                  className="list-none pr-11 text-black md:text-xl text-2xl font-normal font-['Work Sans'] hover:text-orange-300 ml-4 relative group"
                  onClick={() => handleMenuClick("contact")}
                >
                  <a href="#footers">Industries</a>
                  {renderSubMenu("contact")}
                </li>
                <li
                  className="list-none pr-11 text-black md:text-xl text-2xl font-normal font-['Work Sans'] hover:text-orange-300 ml-4 relative group"
                  onClick={() => handleMenuClick("enquire")}
                >
                  <a href="/enquire">Contact Us</a>
                  {renderSubMenu("enquire")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;