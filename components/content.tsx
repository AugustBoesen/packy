'use client';
import Modal from './MinMap_Table';
import { useState } from 'react';
import toast from 'react-hot-toast';

let chosenArray: any[] = [];

export let correctAmount: boolean = false;
let finishSignal: boolean = false;

console.log('finishSignal: ' + finishSignal);
export function setCorrectAmount(value: boolean) {
  correctAmount = value;
}
console.log(correctAmount);

function setfinishSignal() {
  // tähän voi laittaa filttereä
  finishSignal = true;
  console.log('finishSignal: ' + finishSignal);
}

export default function Content({ setCurrentContent }: any) {
  const [datafromMinMap, setDatafromMinMap] = useState([]);
  const handleDatafromMinMap = (newDatafromMinMap: any) => {
    setDatafromMinMap(newDatafromMinMap);
  };

  const handleContentChange = (newContent: any) => {
    toast.success('Saved to list');
    setCurrentContent(newContent);
    if (newContent.id !== undefined) {
      const existingObjectIndex = chosenArray.findIndex(
        (item) => item.code === newContent.code
      );

      if (existingObjectIndex === -1) {
        chosenArray.push(newContent);
      } else {
        // Update the existing object with the same id instead of pushing a new one
        chosenArray[existingObjectIndex] = newContent;
      }
    }
    correctAmount = true;

    console.log(correctAmount);
    console.log(chosenArray);
  };

  return (
    <div>
      <Modal
        handleDatafromMinMap={handleDatafromMinMap}
        mmfinishSignal={setfinishSignal}
      />
      <div className='flex w-full justify-center text-center rounded-fullh-24'>
        <button
          className='rounded-full z-50 h-32 w-32 -mt-80 font-bold bg-teal-500 hover:scale-125 transition-all duration-500 border hover:border-dashed hover:border-slate-300 hover:bg-teal-200 hover:text-black'
          onClick={() => handleContentChange(datafromMinMap)}
        >
          Add to plan
        </button>
      </div>
    </div>
  );
}
