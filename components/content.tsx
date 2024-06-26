// Komponentti hallitsee sovelluksen näkymää (näyttää joka vaiheessa oikeat objektit),
//tieto kulkee MinMap_Tablesta tähän komponenttiin, joka välittää tiedon mindmap
//moduulissa olevaan page.tsxään

'use client';
import Modal from './MinMap_Table';
import { useState } from 'react';
import toast from 'react-hot-toast';

let chosenArray: any[] = [];

export let correctAmount: boolean = false;

export function setCorrectAmount(value: boolean) {
  correctAmount = value;
}

export default function Content({ setCurrentContent }: any) {
  const [finishSignal, setFinishSignal] = useState(false);
  function setfinishSignal() {
    setFinishSignal(true);
  }
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
      <div className="flex w-full justify-center text-center rounded-fullh-24">
        <button
          className="rounded-full z-50 h-32 w-32 -mt-80 font-bold bg-teal-500 hover:scale-125 transition-all duration-500 border hover:border-dashed hover:border-slate-300 hover:bg-teal-200 hover:text-black"
          onClick={() => handleContentChange(datafromMinMap)}
        >
          Add to plan
        </button>
      </div>
      {finishSignal == true && (
        <ul className="absolute h-[80vh] w-full bg-slate-800 top-[10vh] z-[60] px-6">
          <h3 className="pt-4">Chosen tools:</h3>
          {chosenArray.map((item, index) => (
            <>
              <div className="border-t flex flex-row mt-6">
                <li className="font-bold shadow-inner min-w-40" key={index}>
                  {item.name}
                </li>
                <li className="shadow-inner" key={index}>
                  {item.description}
                </li>
              </div>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
