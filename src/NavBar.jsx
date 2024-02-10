/* eslint-disable no-unused-vars */
import { Disclosure, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/images/Logo1.jpg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  // State to manage hover
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  // Reference to the menu button to programmatically click it for toggling
  const menuButtonRef = useRef(null);

  return (
    <Disclosure as="nav" className="bg-white shadow h-20">
      {({ open }) => (
        <>
          <div className="mx-auto sm:px-6 lg:px-8 align-items">
            <div className="h-20 flex lg:justify-start justify-between items-center lg:mx-20 px-5 sm:px-10 w-auto sm:w-auto">
              {/*   <div className="flex w-full">*/}
              <div className="flex shrink-0 sm:justify-start lg:mr-10">
                <Link to="/" className="float-left">
                  <img
                    className="sm:h-16 h-12 w-auto object-contain"
                    src={Logo}
                    alt="DirectAutoFinance"
                  />
                </Link>
              </div>
              {/**  </div>     align-items justify-center hidden sm:ml-6 sm:flex*/}

              <div className="hidden lg:flex flex-row items-center space-x-8 h-full">
                {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                <Menu as="div" className="relative items-center h-full">
                  <Menu.Button className="ml-10 px-5 inline-flex items-center text-md font-medium text-gray-900 h-full">
                    Why Us
                    <ChevronDownIcon
                      className="-mr-1 ml-5 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Menu.Items
                    className="absolute z-10 w-full origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ top: "100%" }}
                  >
                    {/* Dropdown Links */}
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          className={`block px-4 py-5 text-center ${
                            active ? "bg-gray-200 rounded-md" : ""
                          }`}
                          to="/about"
                        >
                          About
                        </Link>
                      )}
                    </Menu.Item>
                    {/* Dropdown Links 
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-5 text-center ${
                            active ? "bg-gray-100" : ""
                          }`}
                          href="/service1"
                        >
                          Testimonials
                        </a>
                      )}
                    </Menu.Item>*/}
                    {/* Repeat for other dropdown links */}
                  </Menu.Items>
                </Menu>

                {/* Dropdown Links 
                <Menu as="div" className="relative px-5 items-center h-full">
                  <Menu.Button className="inline-flex items-center text-md font-medium text-gray-900 h-full">
                  Testimonials
                    <ChevronDownIcon
                      className="-mr-1 ml-5 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Menu.Button>

                  <Menu.Items
                    className="absolute z-10 w-full origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    style={{ top: "100%" }}
                  >
                    {/* Dropdown Links 
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-5 text-center ${
                            active ? "bg-" : ""
                          }`}
                          href="/about"
                        >
                          About
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={`block px-4 py-5 text-center ${
                            active ? "bg-gray-100" : ""
                          }`}
                          href="/service1"
                        >
                          Testimonials
                        </a>
                      )}
                    </Menu.Item>
                    
                  </Menu.Items>
                </Menu>*/}
              </div>

              <Link
                to="/form"
                className="hidden lg:block bg-[#3030a1] flex ml-auto align-item items-center text-center w-1/6 border-b-2 border-transparent rounded px-0 py-3 text-sm font-medium text-white hover:bg-[#191970] hover:text-gray-100 "
              >
                <p className="text-center">Get Pre-Approved</p>
              </Link>

              <div className="float-right flex justify-end mr-1 sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-end rounded-md px-2 mr-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black z-30">
            <div className="bg-black z-20 space-y-1 pb-3 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Link className="bg-transparent" to="/about">
                <Disclosure.Button
                  as="a"
                  to="/about"
                  className=" bg-transparent border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-white"
                >
                  About
                </Disclosure.Button>
              </Link>
              {/* Dropdown Links 
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Calendar
              </Disclosure.Button>*/}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
