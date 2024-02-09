/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import FooterForm from "../component/FooterForm.jsx";
import "../App.css";

//import Logo from "../assets/images/Logo.png"
//import NavvBarr from "../component/NavvBarr";

function FormSubmitted() {
  return (
    <>
      <NavBar/>
      <div className="custom-Formgradient px-5 mx-auto sm:px-40 py-10 sm:py-40 h-screen">
        <h1 className="text-white text-center text-4xl mb-4">Congratulations!</h1>
        <div className=" flex justify-center ">
         <p className="text-white text-lg">Form has been succesfully submitted!<br/> Our dealership will reach out to you within a few days!</p>
         
         
        </div>
      </div>

      <FooterForm/>
    </>
  );
}

export default FormSubmitted;

