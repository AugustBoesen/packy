/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';

function ProgressBar({ pbcurrentStep, pbsetCurrentStep }: any) {
  const [currentStep, setCurrentStep] = useState(0);
  // Tässä määritellään tila missä progres bar on ja se käytää useStatea ja se alkaa tilasta 1

  const maxSteps = 7; // Tämä muuttuja määrittää monta steppiä on yhteensä
  const barSteps = maxSteps - 1;

  const handleNextStep = () => {
    // tänä fucktio lisää yhden SetCurrenStep muttujaan ja pitää huolen että se ei ylitä maximia
    pbsetCurrentStep((prevStep: number) => Math.min(prevStep + 1, barSteps));
  };

  const handlePreviousStep = () => {
    // tämä tekee saman kun aiemman mutta miinustaa setCurrentSteppiä
    pbsetCurrentStep((prevStep: number) => Math.max(prevStep - 1, 0));
  };
  // tekee ne ympyrät sen barin yläpuolella
  const circles = Array.from({ length: maxSteps }, (_, index) => index + 1);

  return (
    // pallojne ja baarin div
    <div className=' w-full flex flex-col'>
      {/* tästä alkaa pallojen div */}
      <div className=' flex -mb-6 bg-red-500 w-full justify-between'>
        {circles.map((step) => (
          <div
            key={step}
            className={`z-50 w-8 h-8 flex items-center justify-center rounded-full border    ${
              step <= pbcurrentStep
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-black'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      {/* tästä alkaa baarin div */}
      <div className=' bg-gray-200 rounded-full dark:bg-gray-700 w-full'>
        <div
          className='bg-emerald-500 py-2 rounded-full transition-all ease-in-out duration-300'
          style={{ width: `${(pbcurrentStep / barSteps) * 100}%` }}
        ></div>
      </div>
      <div className='flex justify-between mt-2'>
        {' '}
        <button
          className='px-6 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600'
          onClick={handlePreviousStep}
        >
          Previous Step
        </button>
        <button
          className='px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600'
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
