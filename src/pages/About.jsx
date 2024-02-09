/* eslint-disable react/no-unescaped-entities */
import React from "react";
import NavBar from "../NavBar.jsx";
import Footer from "../component/Footer.jsx";

function About() {
  return (
    <>
      <NavBar />
      <div className="custom-gradient mx-15">
        <div className="px-5 mx-auto sm:px-40 py-10 sm:py-40">
        <h1 className="text-5xl text-white font-bold mb-10 ">
            About
          </h1>
          <p className="text-white text-lg">
            Welcome to Direct Auto Finance, the ultimate destination for
            seamless car financing solutions. Founded in 2024, our mission has
            been to simplify the car buying process, making it accessible and
            stress-free for everyone. With years of experience in the automotive
            and financial industries, we{"'"}ve honed our expertise to offer you the
            best financing options tailored to your needs.<br/><br/> Our journey began
            with a clear vision: to transform the traditional, often cumbersome
            car financing process into a straightforward, transparent, and
            user-friendly experience. We believe that everyone deserves to drive
            their dream car without navigating through complex financial
            hurdles. That{"'"}s why we{"'"}ve created a platform where customers can
            easily understand their financing options, calculate monthly
            payments, and get pre-approved quickly, all from the comfort of
            their homes.<br/><br/> At Direct Auto Finance, we pride ourselves on our
            commitment to customer satisfaction. Our dedicated team of financing
            experts is always on hand to guide you through every step of your
            financing journey, ensuring you feel confident and informed. We{"'"}ve
            partnered with leading financial institutions to offer competitive
            rates and flexible terms, catering to a wide range of credit
            profiles.<br/><br/> Beyond just financing, we{"'"}re passionate about educating
            our customers. Our website features a wealth of resources, including
            financing tips, vehicle buying guides, and insightful articles, all
            designed to help you make the best decisions for your financial
            situation.<br/><br/> As we look to the future, Direct Auto Finance remains
            committed to innovation, constantly updating our services and
            platform to meet the evolving needs of our customers. We{"'"}re more
            than just a financing company; we{"'"}re your trusted partner in making
            your car ownership dreams a reality.<br/><br/> Thank you for choosing Direct
            Auto Finance. Let{"'"}s drive into a brighter future together.
          </p>
        </div>
      </div>
<Footer/>
    </>
  );
}

export default About;
