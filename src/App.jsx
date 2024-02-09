/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import BackgroundImage from "./assets/images/backgroundimage5.jpg";
import Coupe from "./assets/images/coupe.png";
import Customer_1 from "./assets/images/customer-1.jpg";
import Customer_2 from "./assets/images/customer-2.jpg";
import Customer_3 from "./assets/images/customer-3.jpg";
import Hatchback from "./assets/images/hatchback.png";
import Minivan from "./assets/images/minivan.png";
import Sedan from "./assets/images/sedan.png";
import Suv from "./assets/images/suv.png";
import Truck from "./assets/images/truck.png";
import Footer from "./component/Footer";
//import Maincar from "./assets/images/car.png";
import Carinterior from "./assets/images/carInterior.jpg";
//import Checklistcar from "./assets/images/checklist-car.png";
import { useIsVisible } from "./component/useIsVisible";

export default function Component() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  //const ref4 = useRef();
  //const isVisible4 = useIsVisible(ref4);
  //background: `url(${BackgroundImage}) no-repeat center center fixed`,
  //backgroundSize: 'cover',

  return (
    <motion.div
      className="bg-[#050507]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Navbar className="z-20" />
      <div
        className=" sm:h-screen lg:h-screen"
        style={{
          background: `url(${BackgroundImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-1 py-20 mt- text-center text-white z-10 h-screen">
          <h1 className="text-5xl text-white font-bold mb-6 mt-40">
            Drive Your Dreams, Finance Your Future
          </h1>
          <p className="mb-8 text-white">
            Get pre-approved for a new car today!.
          </p>
          <div className="flex justify-center">
            <Link to="/form">
              <button className="mt-8 inline-block rounded border-black bg-[#f70202] px-12 py-3 text-md font-medium text-white transition hover:bg-[#690c05] focus:outline-none focus:ring">
                Get Pre-Approved
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*className="bg-gradient-to-b from-[#050507] via-[#E3311D] to-[#050507]" */}
      <div
        className="custom-gradient"
        style={{
          paddingTop: "170px",
          paddingBottom: "170px",
        }}
      >
        <div className="container mx-auto px-10 sm:px-24 text-white flex justify-between">
          <div
            ref={ref1}
            className={`transition-opacity ease-in duration-500 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Your content div */}
            <h2 className="text-3xl font-bold mb-6">
              Shop For a Car With Confidence
            </h2>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-center">
                <CheckCircleIcon className="text-[#00aeef] mr-2" />
                <span>
                  Apply for financing online using our simple application.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="text-[#00aeef] mr-2 " />
                <span>
                  We{"'"}ll match you with a local dealership who will show you
                  vehicle options you are pre-approved for.
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="text-[#00aeef] mr-2" />
                <span>
                  Pick the car you want and drive away! No more wasted time. No
                  more rejection.
                </span>
              </li>
            </ul>
            <Link to="/form">
              <button className="mt-8 inline-block rounded border border-[#f70202] bg-[#f70202] px-12 py-3 text-sm font-medium text-White hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring active:text-indigo-500">
                Get Pre-Approved
              </button>
            </Link>
            <div className="flex justify-center">
              {/* Your image 
            <img 
              src={Checklistcar}
              style={{
                aspectRatio: "340/150",
                height: "150px",
                objectFit: "cover",
                width: "340px",
              }}  
            />*/}
            </div>
          </div>
        </div>
      </div>
      {/*light-green:2BAE66    gray:C0C0C0  gray2:c0c4c7   teal:66b2b2   bright teal:00fcf2  glowy teal:01e6dd  mint:#d1ede1
    
    
    */}
      <section className="custom-gradient lg:h-5/6">
        <div className="mx-auto max-w-screen-2xl  px-4 py-16 sm:px-6 lg:px-8">
          <div
            ref={ref2}
            className={`transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:h-5/6 lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt="Car Interior"
                    src={Carinterior}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Effortless Car Financing: Your Gateway to a Smoother Ride
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Direct Auto Finance stands out for its user-friendly design
                    and streamlined financing process, making it easier than
                    ever to finance your dream car. We understand that
                    navigating car financing options can be complex, which is
                    why our platform is designed with simplicity and efficiency
                    in mind. Our online application process is quick and easy,
                    requiring just a few steps to get you pre-approved.
                  </p>

                  <Link
                    to="/form"
                    className="mt-8 inline-block rounded border border-[#f70202] bg-[#f70202] px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-black hover:border-black focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* bg-gradient-to-b from-[#050507] to-[#E3311D]*/}
      <section className="bg-[#080824] custom-gradientOne flex justify-center py-10">
        <div
          className="max-w-screen-xl px-4 py-15
        my-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
        >
          <div
            ref={ref3}
            className={`transition-opacity ease-in duration-700 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                <h2 className="text-3xl font-bold sm:text-4xl text-neutral-50">
                  Discover Your Dream Car with Quick Pre-Approval!
                </h2>

                <p className="mt-4 text-neutral-50">
                  Explore our extensive inventory of vehicles, offering a wide
                  range of options to suit every preference and budget. With
                  just a few simple questions, you can swiftly secure
                  pre-approval, streamlining your car financing process
                  effortlessly. Choose from our diverse selection and get on the
                  road to your dream car today!
                </p>

                <Link
                  to="/form"
                  className="mt-8 inline-block rounded border border-[#f70202] bg-[#f70202] px-12 py-3 text-sm font-medium text-white transition text-White hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Hatchback} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">
                    Hatchback
                  </h2>
                </Link>

                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Minivan} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">
                    Minivan
                  </h2>
                </Link>

                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Coupe} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">
                    Coupe
                  </h2>
                </Link>

                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Truck} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">
                    Truck
                  </h2>
                </Link>

                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Suv} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">SUV</h2>
                </Link>

                <Link
                  className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-white hover:ring hover:ring-gray-200 focus:outline-none focus:ring"
                  to="/form"
                >
                  <img alt="Car Interior" src={Sedan} className="mt-2" />

                  <h2 className="mt-2 text-center text-white font-bold">
                    Sedan
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-testimonials py-20">
        <div className="mx-30">
          <h2 className="review">Our customers can{"'"}t live without us</h2>
        </div>
        <div className="line flex flex-col items-center px-4 mx-auto max-w-md"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-5 sm:px-40 py-10 mr-17 ml-17">
          <div className="px-10">
            <blockquote className="mb">
              Effortless financing experience! Transparent rates and smooth
              approval process made it a breeze to secure my car loan. Highly
              recommended.
              <cite>
                <img className="flex justify-end" src={Customer_1} />
                Alberto Duncan
              </cite>
            </blockquote>
          </div>
          <div className="px-10">
            <blockquote>
              Simple and clear from start to finish. Quick pre-approval and
              fantastic customer service. This site takes the stress out of car
              financing.
              <cite>
                <img className="flex justify-end" src={Customer_2} />
                Joana Silva
              </cite>
            </blockquote>
          </div>
          <div className="px-10">
            <blockquote>
              A game changer in car financing. Intuitive and user-friendly, with
              competitive rates. It{"'"}s my top choice for hassle-free financing.
              <cite>
                <img className="flex justify-end" src={Customer_3} />
                Milton Chapman
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* bg-gradient-to-b from-[#E3311D] to-black*/}

      <Footer />
    </motion.div>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f70202"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
//color: ff7f50
