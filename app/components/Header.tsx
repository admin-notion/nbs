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

  const handleMenuClick = (menu: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu));
    event.stopPropagation(); // Prevent event propagation
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

    const handleScroll = () => {
      if (isOpen) {
        closeSubMenu();
      }
    };

    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const closeSubMenu = () => {

    setIsOpen(false);
    setActiveMenu(null);
  };


  const renderSubMenu = (menu: string) => {
    if (activeMenu === menu) {
      let submenuContent: JSX.Element | null = null;
      if (menu === "industries") {
        submenuContent = (
          <div className="fixed inset-0  bg-black z-50 md:max-w-5xl md:max-h-fit md:pb-80  md:mt-24 mx-auto md:right-64 px-4 py-8 md:px-6 lg:px-8 xl:px-10">
            <div className="container mx-auto px-4 py-10  ">
              <ul className="list-none ">
                <div className="  text-center text-white">
                  <li className=" text-4xl  text-center justify-center align-middle   items-center font-Oswald ">
                    <Link href="/about-us">About Us</Link>
                  </li>
                  <div className="grid md:grid-cols-3  text-center justify-center  items-center  md:mt-11 " >
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/about">Overview</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/careers">Careers</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/policyPrivacy">Privacy Policy</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        );
      } else if (menu === "services") {
        submenuContent = (
          <div className="fixed inset-0  bg-black z-50 md:max-w-5xl md:max-h-fit md:pb-80  md:mt-24 mx-auto md:right-64 px-4 py-8 md:px-6 lg:px-8 xl:px-10">
            <div className="container mx-auto px-4 py-10">
              <ul>
                <div className=" align-middle text-white">
                  <li className="text-4xl  text-center font-Oswald">
                    <Link href="/services">Services</Link>
                  </li>
                  <div className="grid md:grid-cols-3  text-center justify-center  items-center  md:mt-11 ">
                    <li className="pt-6  underline underline-offset-4 ">
                      <Link href="/applicationServices">Application Services</Link>
                    </li>
                    <li className=" pt-6  underline underline-offset-4 ">
                      <Link href="/devops">Dev Ops</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/itStaff">IT Staffing</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/testing">QA & Testing</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/product">Product Engineering</Link>
                    </li>
                    <li className="pt-6 underline underline-offset-4 ">
                      <Link href="/migration">System Migration</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        );
      } else if (menu === "contact") {
        submenuContent = (
          <div className="fixed inset-0  bg-black z-50 md:max-w-5xl md:max-h-fit md:pb-72  md:mt-24 mx-auto md:right-64 px-4 py-8 md:px-6 lg:px-8 xl:px-10">
            <div className="container mx-auto px-4 md:py-10">
              <ul>
                <div className="  align-middle text-white">
                  <li className="text-4xl  text-center font-Oswald">
                    <Link href="/industries">Industries</Link>
                  </li>
                  <div className="grid md:grid-cols-3 gap-2  text-center justify-center  items-center  md:mt-14">
                    <li className=" pt-2 md:pt-0  underline underline-offset-4 ">
                      <Link href="/startup">Start up</Link>
                    </li>
                    <li className="pt-2 md:pt-0    underline underline-offset-4 ">
                      <Link href="/retailSector">Retail Sector</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/professional">Professional Services</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/notForProfit">Not for Profit</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4  ">
                      <Link href="/manufacturing">Manufacturing and Distribution</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/healthCare">Health Care and Life Science</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/food">Food and Beverage</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/finTech">Fin Tech</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/engineering">Engineering</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/energy">Energy</Link>
                    </li>
                    <li className="pt-2 md:pt-0   underline underline-offset-4 ">
                      <Link href="/education">Education</Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        );

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
          <div ref={submenuRef} className="lg:flex lg:items-left ">
            {/* hamburger menu for large screen */}
            <div className="sm:isOpen">
              <button
                ref={
                  hamburgerRef}
                onClick={toggleNavbar}
                className="text-black focus:outline-none focus:border-none md:mr-10 mr-5 "
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
                ref={submenuRef}
                className={`absolute left-0 md:left-auto right-0 md:max-h-fit md:pb-96  py-10 md:px-3 bg-white shadow-lg ${isOpen ? "block" : "hidden"}`}
                style={{
                  transition: "opacity 1.5s ease, top 1.5s ease",
                  opacity: isOpen ? 1 : 0,
                  top: isOpen ? "100%" : "calc(-100% - 2rem)",
                }}
              >
                <ul className="mt-4 ">
                  <li
                    className="border-b md:pb-8 pb-4  list-none md:pr-24 text-black md:text-xl  text-2xl font-normal font-Oswald hover:text-opacity-50 ml-4 relative group"
                    onClick={(event) =>
                      handleMenuClick("industries", event)
                    }
                  >
                    <a href="#hamburger">About Us</a>
                    {renderSubMenu("industries")}
                  </li>
                  <li
                    className="border-b md:pb-8 pb-4 pt-6 list-none md:pr-24 text-black md:text-xl text-2xl font-normal font-Oswald hover:text-opacity-50 ml-4 relative group"
                    onClick={(event) =>
                      handleMenuClick("services", event)
                    }
                  >
                    <a href="#hamburger">Services</a>
                    {renderSubMenu("services")}
                  </li>
                  <li
                    className="border-b md:pb-8 pb-4  pt-6 list-none md:pr-24 text-black md:text-xl text-2xl font-normal font-Oswald hover:text-opacity-50 ml-4 relative group"
                    onClick={(event) =>
                      handleMenuClick("contact", event)
                    }
                  >
                    <a href="#hamburger">Industries</a>
                    {renderSubMenu("contact")}
                  </li>
                  <li
                    className="border-b md:pb-8 pb-4 pt-6 list-none md:pr-24 text-black md:text-xl text-2xl font-normal font-Oswald hover:text-opacity-50 ml-4 relative group"
                    onClick={(event) =>
                      handleMenuClick("enquire", event)
                    }
                  >
                    <a href="/enquire">Contact Us</a>
                    {renderSubMenu("enquire")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
