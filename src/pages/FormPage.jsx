/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
//import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import React, { useState } from "react";
import NavBar from "../NavBar.jsx";

import FooterForm from "../component/FooterForm.jsx";

function FormPage({
  formData,
  setFormData,
  goToNext,
  slideDirection,
  currentStep,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setFormData({ ...formData, vehicleChoice: data.choice });
    goToNext();
  };
  var n = 100 / 4;

  return (
    <>
      <NavBar />
      <div className="custom-Formgradient  h-max flex flex-col items-center px-0 sm:px-5">
        <div className="flex flex-col items-center px-4 w-full sm:w-full md:w-2/5 lg:w-2/5">
          <p className="text-white mt-10 sm:mt-40">3 Minutes to Finish!</p>
          <div className="progressbar bg-gray-700 flex flex-col h-full mt-2 mb-5 mx-auto w-full  lg:w-3/5">
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
            <div className="flex flex-col justify-center text-center items-center sm:w-full md:w-3/5 lg:w-3/5">
              <h1 className="text-white text-4xl mb-1 mt-5">
                Get Pre-Approved for the Car You Want at a Price You Can Afford
              </h1>
              <h2 className="text-white text-center text-2xl mt-5 sm:mt-20 mb-6">
                What Vehicle are you looking for?
              </h2>
            </div>
            <div className="w-full flex flex-col items-center">
              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full  lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="SUV & Crossover"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">SUV & Crossover</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="COUPE"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Coupe</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="MINIVAN"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Minivan</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Hatchback"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Hatchback</span>
                </label>
              </div>

              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Sedan"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Sedan</span>
                </label>
              </div>
              <div className="bg-white shadow-md rounded mb-4 w-full sm:w-full lg:w-3/5">
                <label className="block text-center py-4 flex justify-start items-center">
                  <input
                    type="radio"
                    value="Truck"
                    {...register("choice")}
                    className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
                  />
                  <span className="text-lg align-middle w-full">Truck</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center mt-5 mb-5 space-x-2 w-full sm:w-full md:w-3/5 lg:w-3/5">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded w-full"
              >
                Next
              </button>
            </div>
          </motion.form>
        </div>
        {/* <div className="flex items-center justify-center mt-5 space-x-2 w-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded w-full"
              >
                Next
              </button>
            </div>*/}
      </div>
      <FooterForm />
    </>
  );
}

export default FormPage;
