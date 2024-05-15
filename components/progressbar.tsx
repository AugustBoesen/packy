'use client';
import React, { useState } from 'react';

function ProgressBar() {
  // Tässä määritellään tila missä progres bar on ja se käytää useStatea ja se alkaa tilasta 1
  const [currentStep, setCurrentStep] = useState(1);
  const maxSteps = 7; // Tämä muuttuja määrittää monta steppiä on yhteensä

  const handleNextStep = () => {
    // tänä fucktio lisää yhden SetCurrenStep muttujaan ja pitää huolen että se ei ylitä maximia
    setCurrentStep((prevStep) => Math.min(prevStep + 1, maxSteps));
  };

  const handlePreviousStep = () => {
    // tämä tekee saman kun aiemman mutta miinustaa setCurrenSteppiä
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };
  // tekee ne ympyrät sen barin yläpuolella
  const circles = Array.from({ length: maxSteps }, (_, index) => index + 1);

  return (
    // pallojne ja baarin div
    <div className="flex flex-col items-center w-4/5 ">
      {/* tästä alkaa pallojen div */}
      <div className=" flex mb-2 gap-20 ">
        {circles.map((step) => (
          <div
            key={step}
            className={`w-8 h-8 flex items-center justify-center rounded-full border   ${
              step <= currentStep
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-black'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      {/* tästä alkaa baarin div */}
      <div className="w-4/5 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="bg-emerald-500    p-2 leading-none rounded-full"
          style={{ width: `${(currentStep / maxSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
          onClick={handlePreviousStep}
        >
          Previous Step
        </button>
        <button
          className="px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
