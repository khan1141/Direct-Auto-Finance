import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function FormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-orange-300 h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl mb-4">
        Get Pre-Approved for the Car You Want at a Price You Can Afford
      </h1>
      <h2 className="text-white text-2xl mb-4">
        What Vehicle are you looking for?
      </h2>

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
              <span className="text-lg align-middle w-full">SUV</span>
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
              <span className="text-lg align-middle w-full">Coupe</span>
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
              <span className="text-lg align-middle w-full">Minivan</span>
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center w-full">
          <Link to="/formBudget">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded">
              Continue
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default FormPage;
