import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const questions = [
  'What Vehicle are you looking for?',
  'What is your credit score?',
  // Add more questions as needed
];

const options = [
  ['SUV', 'Coupe', 'Sedan'],
  ['Poor', 'Fair', 'Good'],
  // Add more options for other questions
];

function FormTest() {
  const { register, handleSubmit } = useForm();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const onSubmit = (data) => {
    console.log(data); // Do something with the submitted data
    // Here you might perform actions with the data or move to the next question
    // For now, let's move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderCurrentQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="mb-4 w-full">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {questions[currentQuestionIndex]}
              </label>
              {/* Render options based on current question index */}
              {options[currentQuestionIndex]?.map((option, index) => (
                <div key={index} className="mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value={option}
                      {...register('choice')}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full">
              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      );
    } else {
      // If there are no more questions, render a message or component indicating the end of the form
      return (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center">
          <h1 className="text-gray-700 text-2xl">Thank you for submitting the form!</h1>
        </div>
      );
    }
  };

  return (
    <div>
      {renderCurrentQuestion()}
    </div>
  );
}

export default FormTest;
