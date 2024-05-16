'use client';
import Modal from './MinMap_Table';
import { useState } from 'react';
import toast from 'react-hot-toast';

let chosenArray: any[] = [];

let finishSignal: boolean = false;

function setfinishSignal() {
  // Tähänkin voi laittaa filttereitä
  finishSignal = true;
  console.log('NYT TOIMII');
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
          className='rounded-full h-24 w-24 -mt-12 bg-emerald-500'
          onClick={() => handleContentChange(datafromMinMap)}
        >
          Add to plan
        </button>
      </div>
    </div>
  );
}
