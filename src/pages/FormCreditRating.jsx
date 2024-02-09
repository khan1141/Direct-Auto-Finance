/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import FooterForm from "../component/FooterForm.jsx";

function FormCreditRating({
  formData,
  setFormData,
  goToPrev,
  slideDirection,
  currentStep,
}) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const handleBlockedNavigation = (event) => {
      event.preventDefault();
      event.returnValue = ""; // For older browsers
    };

    window.addEventListener("beforeunload", handleBlockedNavigation);

    return () => {
      window.removeEventListener("beforeunload", handleBlockedNavigation);
    };
  }, []);

  const onSubmit = (data) => {
    // Update formData with the new data
    const updatedFormData = { ...formData, creditRating: data.choice };
    setFormData(updatedFormData);

    // Prepare and send the email
    sendEmail(updatedFormData);
  };

  const sendEmail = (updatedFormData) => {
    emailjs
      .send(
        "service_drhcy2x",
        "template_rfrggla",
        updatedFormData,
        "HRNu54C_Mrrz6_X9D"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          navigate("/success");
          // Handle success here (e.g., navigate to a success page or show a message)
        },
        (error) => {
          console.log("FAILED...", error);
          // Handle errors here (e.g., show an error message)
        }
      );
  };

  var n = 100 / 4;

  return (
    <>
      <NavBar />
      <div className="custom-Formgradient sm:h-screen sm:h-full h-screen flex flex-col items-center px-0 sm:px-5">
        <div className="flex flex-col items-center px-4 w-full sm:w-full md:w-2/5 lg:w-2/5">
          <p className="text-white mt-40">1 Minutes to Finish!</p>
          <div className="progressbar bg-gray-700 flex flex-col h-full mt-2 mx-auto w-full lg:w-3/5">
          <div
            style={{ width: `${currentStep * n}%` }}
            className="progressbar-fill w-full"
          ></div>
        </div>
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center px-4 w-full"
            initial={{ opacity: 0, x: slideDirection === "right" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: slideDirection === "right" ? -100 : 100 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-white text-center text-2xl mt-20 mb-6">
              What is your estimated credit rating?
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full  lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Good (Over 650)"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Good (Over 650)</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Fair (550-650)"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Fair (550-650)</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Poor (Under 550)"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Poor (Under 550)</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Current Bankruptcy"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Current Bankruptcy</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="No Credit / Unsure"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">No Credit / Unsure</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center mt-5 space-x-2 w-full sm:w-full lg:w-3/5">
              <button
                type="button" // Change type to button
                onClick={goToPrev} // Use handleSubmit on button click
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded w-full"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded w-full"
              >
               Submit
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <FooterForm/>
    </>
  );
}

export default FormCreditRating;
