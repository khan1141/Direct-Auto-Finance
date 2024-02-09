/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormPage from "./FormPage";
import FormBudget from "./FormBudget";
import FormCreditRating from "./FormCreditRating";
import Employment from "./Employment.jsx";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [slideDirection, setSlideDirection] = useState("right");

  const [formData, setFormData] = useState({
    vechileChoice: "",
    budgetChoice: "",
    creditRating: "",
    employmentChoice: "",
  });

  const goToPrevStep = () => {
    setSlideDirection("left");
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <FormPage
          formData={formData}
          setFormData={setFormData}
          goToNext={() => {
            setSlideDirection("right");
            setCurrentStep(2);
          }}
          slideDirection={slideDirection}
          currentStep={currentStep}
        />
      )}
      {currentStep === 2 && (
        <FormBudget
          formData={formData}
          setFormData={setFormData}
          goToNext={() => {
            setSlideDirection("right");
            setCurrentStep(3);
          }}
          goToPrev={goToPrevStep}
          slideDirection={slideDirection}
          currentStep={currentStep}
        />
      )}
      {currentStep === 3 && (
        <Employment
          formData={formData}
          setFormData={setFormData}
          goToNext={() => {
            setSlideDirection("right");
            setCurrentStep(4);
          }}
          goToPrev={goToPrevStep}
          slideDirection={slideDirection}
          currentStep={currentStep}
        />
      )}
      {currentStep === 4 && (
        <FormCreditRating
          formData={formData}
          setFormData={setFormData}
          goToPrev={goToPrevStep}
          slideDirection={slideDirection}
          currentStep={currentStep}
          
        />
      )}
    </div>
  );
}

export default MultiStepForm;
