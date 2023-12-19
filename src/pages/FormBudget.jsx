import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function FormBudget() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the submitted data
  };

  return (
    <div className="bg-orange-300 h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-3xl mb-4">What is your Budget?</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-2/5"
      >
        <div className="w-full flex flex-col items-center">
          <div className="bg-white shadow-md rounded mb-4 w-4/5">
            <label className="block text-center py-4 flex justify-start items-center">
              <input
                type="radio"
                value="Option 1"
                {...register("choice")}
                className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
              />
              <span className="text-lg align-middle w-full">
                Under $400 / Month
              </span>
            </label>
          </div>

          <div className="bg-white shadow-md rounded mb-4 w-4/5">
            <label className="block text-center py-4 flex justify-start items-center">
              <input
                type="radio"
                value="Option 1"
                {...register("choice")}
                className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
              />
              <span className="text-lg align-middle w-full">
                $400 - $499 / Month
              </span>
            </label>
          </div>

          <div className="bg-white shadow-md rounded mb-4 w-4/5">
            <label className="block text-center py-4 flex justify-start items-center">
              <input
                type="radio"
                value="Option 1"
                {...register("choice")}
                className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
              />
              <span className="text-lg align-middle w-full">
                $500 - $600 / Month
              </span>
            </label>
          </div>

          <div className="bg-white shadow-md rounded mb-4 w-4/5">
            <label className="block text-center py-4 flex justify-start items-center">
              <input
                type="radio"
                value="Option 1"
                {...register("choice")}
                className="form-radio h-5 w-5 text-blue-600 inline-block ml-3"
              />
              <span className="text-lg align-middle w-full">
                Above $600 / Month
              </span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center mt-5 space-x-2 w-4/5">
          <Link to="/form" className="w-full">
            <button
              //  type="button" // Change type to button
              //  onClick={handleSubmit(onSubmit)} // Use handleSubmit on button click
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded w-full"
            >
              Next
            </button>
          </Link>

          <Link to="/form" className="">
            <button
              //  type="button" // Change type to button
              //  onClick={handleSubmit(onSubmit)} // Use handleSubmit on button click
              className="bg-white hover:bg-[#e5e5e5] text-black font-semibold py-3 px-5 rounded"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormBudget;
