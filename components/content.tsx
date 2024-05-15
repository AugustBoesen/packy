'use client';
import Modal from './MinMap_Table';
import { useState } from 'react';

let chosenArray: any[] = [];

export default function Content({ setCurrentContent }: any) {
  const [datafromMinMap, setDatafromMinMap] = useState([]);
  const handleDatafromMinMap = (newDatafromMinMap: any) => {
    setDatafromMinMap(newDatafromMinMap);
  };

  const handleContentChange = (newContent: any) => {
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
      <Modal handleDatafromMinMap={handleDatafromMinMap} />
      <button onClick={() => handleContentChange(datafromMinMap)}>
        Click me
      </button>
    </div>
  );
}
