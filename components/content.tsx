'use client';
import Modal from './MinMap_Table';
import { useState } from 'react';

export default function Content({ setCurrentContent }: any) {
  const [datafromMinMap, setDatafromMinMap] = useState([]);
  const handleDatafromMinMap = (newDatafromMinMap: any) => {
    setDatafromMinMap(newDatafromMinMap);
  };

  const handleContentChange = (newContent: any) => {
    setCurrentContent(newContent);
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
