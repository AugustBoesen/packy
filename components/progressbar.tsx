/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useState } from 'react';
import { correctAmount } from './content';
import { setCorrectAmount } from './content';

function ProgressBar({
  pbcurrentStep,
  pbsetCurrentStep,
  clearDesc,
  pbfinishSignal,
}: any) {
  // Tässä määritellään tila missä progres bar on ja se käytää useStatea ja se alkaa tilasta 1

  const maxSteps = 7; // Tämä muuttuja määrittää monta steppiä on yhteensä
  const barSteps = maxSteps - 1; // sama mutta joissakin kohdissa tarvitaan tätä ettö kaikki menee oikein

  const handleNextStep = () => {
    // tänä fucktio lisää yhden SetCurrenStep muttujaan ja pitää huolen että se ei ylitä maximia
    pbsetCurrentStep((prevStep: number) => Math.min(prevStep + 1, barSteps));
    clearDesc();
  };

  const handlePreviousStep = () => {
    // tämä tekee saman kun aiemman mutta miinustaa setCurrentSteppiä
    pbsetCurrentStep((prevStep: number) => Math.max(prevStep - 1, 0));
    clearDesc();
  };
  // tekee ne ympyrät sen barin yläpuolella
  const circles = Array.from({ length: maxSteps }, (_, index) => index + 1);

  return (
    // pallojen ja baarin div
    <div className=" w-full flex flex-col">
      {/* tästä alkaa pallojen div */}
      <div className=" flex -mb-6 w-full justify-between">
        {circles.map((step) => (
          <div
            key={step}
            className={`z-50 w-8 h-8 flex items-center justify-center rounded-full border    ${
              step <= pbcurrentStep
                ? 'bg-emerald-600 text-white transition-all duration-500 scale-125'
                : 'bg-white text-black transition-all duration-500'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      {/* tästä alkaa baarin div */}
      <div className=" bg-gray-200 rounded-full dark:bg-gray-700 w-full">
        <div
          className="bg-emerald-500 py-2 rounded-full transition-all ease-in-out duration-300"
          style={{ width: `${(pbcurrentStep / barSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        {' '}
        {/* nappula jolla mennään taakse päin progress barissa*/}
        <button
          hidden={pbcurrentStep <= 0}
          className="z-50 absolute left-4 bottom-[50vh] h-20 w-20 rounded-full bg-emerald-500 text-white hover:bg-white hover:text-black transition-all hover:scale-125 duration-300"
          onClick={handlePreviousStep}
        >
          Previous
        </button>
        {/* nappula joka vaihtaa pääsivun näkymää eli tuo uuden tiedon ja siirtää progress baria eteenpäin */}
        <button
          hidden={correctAmount === false}
          className="z-50 absolute right-4 bottom-[50vh] h-20 w-20 rounded-full bg-emerald-500 text-white hover:bg-white hover:text-black transition-all hover:scale-125 duration-300"
          onClick={() => {
            if (pbcurrentStep >= barSteps) {
              pbfinishSignal();
            } else {
              handleNextStep();
              setCorrectAmount(false);
            }
          }}
        >
          {pbcurrentStep === barSteps ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
