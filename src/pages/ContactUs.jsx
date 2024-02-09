import React from "react";
import NavBar from "../NavBar.jsx";
import FooterForm from "../component/FooterForm.jsx";
function ContactUs() {
  return (
    <>
    <NavBar/>
    <div className="h-screen custom-gradient mx-15">
      <div className="px-5 mx-auto sm:px-40 py-10 sm:py-40">
        <h1 className="text-5xl text-center text-white font-bold mb-10 ">Contact Us</h1>
        <p className="text-lg text-center text-white">
          Feel free to reach out to me! <br />
          <br /> Email: khan.mohammedfar@hotmail.com
        </p>
      </div>
    </div>
    <FooterForm/>
    </>
  );
}

export default ContactUs;
