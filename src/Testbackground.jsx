import React from "react";

function Testbackground() {
  return (
    <div className="bg-orange-300 h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-white text-4xl mb-4">
        Form has been succesfully submitted!
      </h1>
      <div className=" flex justify-center w-2/5">
        <Link to="/">
          <button
            //  type="button" // Change type to button
            //  onClick={handleSubmit(onSubmit)} // Use handleSubmit on button click
            className="bg-white hover:bg-[#e5e5e5] text-black font-semibold py-3 px-5 rounded"
          >
            Back to menu
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Testbackground;
