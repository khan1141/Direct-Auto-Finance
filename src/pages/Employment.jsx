//What is your estimated credit rating?

/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
//import React, { useState } from "react";
import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
import NavBar from "../NavBar.jsx";
import FooterForm from "../component/FooterForm.jsx";

function Employment({
  formData,
  setFormData,
  goToNext,
  goToPrev,
  slideDirection,
  currentStep,
}) {
  const { register, handleSubmit } = useForm();
  //const [slideDirection, setSlideDirection] = useState("right");
  const onSubmit = (data) => {
    setFormData({ ...formData, employmentChoice: data.choice });

    goToNext();
  };

  var n = 100 / 4;
  return (
    <>
      <NavBar />
      <div className="custom-Formgradient sm:h-screen sm:w-full h-screen h-max flex flex-col items-center px-0 sm:px-5">
        <div className="flex flex-col items-center px-4 w-full sm:w-full md:w-2/5 lg:w-2/5">
          <p className="text-white mt-40">2 Minutes to Finish!</p>
          <div className="progressbar bg-gray-700 flex flex-col h-full mt-2 mx-auto w-full  lg:w-3/5">
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
              What is your employment status?
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full  lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Employed"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Employed</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full  lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Self-Employed"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Self-Employed</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Student"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Student</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Retired / Pension"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Retired / Pension</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Other"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Other</span>
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
                Next
              </button>
            </div>
          </motion.form>
        </div>
      </div>
      <FooterForm />
    </>
  );
}

export default Employment;
