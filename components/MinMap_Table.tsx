/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { MouseEventHandler } from 'react';
import React, { useState } from 'react';
//importoidaan data
import jsonData from '../db/packy.json';

import ProgressBar from './progressbar';

let currentContentId = 2;

//luodaan interface datan tietoja varten jossa data tyypitetään
interface Item {
  contentId: number;
  currentContent: [
    { code: string; id: number; name: string; description: string }
  ];
}

//määritellään muuttuja parseData joka on tyyppiä Item[], sisältää item tyyppisiä objekteja
const parsedData: Item[] = jsonData as Item[];

//määritellään funktio ParsedDataComponent(), joka exportataan
export default function ParsedDataComponent({ handleDatafromMinMap }: any) {
  let [currentDescription, setCurrentDescription] = useState('');
  let [currentlySelectedContent, setCurrentlySelectedContent] = useState({});

  function selectOption(content: {
    id: number;
    name: string;
    description: string;
  }): MouseEventHandler<HTMLButtonElement> {
    return (event) => {
      setCurrentlySelectedContent(content);
      setCurrentDescription(content.description);

      currentContentId = content.id;
      // console.log('id on minmapissa: ' + currentContentId);
      // console.log(JSON.stringify(content)); // Pass content directly
      handleDatafromMinMap(content); // Pass content here
    };
  }
  const clearDescription = () => {
    setCurrentDescription(''); // Tyhjennä kuvaus
  };
  // Nuolibutton
  let [currentStep, setCurrentStep] = useState(0);
  // Tässä määritellään tila missä progres bar on ja se käytää useStatea ja se alkaa tilasta 1
  //luodaan funktio getItemByCode, joka on tyyppiä Item[], jonka parametriksi tulee string tyyppinen parametri
  function getItemByCode(code: string): Item[] {
    //alustetaan Item[] tyyppinen tyhjä taulukko i
    let i: Item[] = [];
    //käydään läpi parsedData taulukon alkioiden code propertyt ja jos ne ovat samankaltaisia kuin 'app'
    //ne pushataan i taulukkoon.
    parsedData.forEach((item) => {
      // Item.contentId:tä verrataan numeroon, joka saadaan määritteenä mindmapin page.tsx:stä
      if (item.contentId === currentStep) {
        i.push(item);
      }
    });
    //Lopuksi palautetaan i taulukko
    return i;
  }

  //määritellään muuttuja app, joka sisältää funktion getItemByCoden palautusarvon
  const app = getItemByCode('app');
  //määritellään funktio renderData joka ottaa parametrikseen item[] tyyppisen data objektin
  function renderData(data: Item[]) {
    return (
      <>
        <ProgressBar
          pbcurrentStep={currentStep}
          pbsetCurrentStep={setCurrentStep}
          pbCurrentDescription={currentDescription}
          clearDesc={clearDescription}
        />
        <ul className="flex flex-row justify-center w-[90vw] bg-slate-900">
          {data.map((item) => (
            <li key={item.currentContent[0].id}>
              {item.currentContent.map((content, i) => (
                <div key={content.id}>
                  <div className="w-[45vw] h-24 flex justify-center">
                    <button
                      onClick={selectOption(content)}
                      className=" w-40 font-bold border p-3 my-5 transition-all rounded-lg hover:bg-slate-200 hover:text-black hover:border-double hover:border-x-8 hover:border-slate-400 text-xl"
                    >
                      {content.name}
                    </button>
                  </div>
                </div>
              ))}
            </li>
          ))}
          <div className="[45vw]">
            <p className="flex bg-slate-800 w-[40vw] h-full mt-auto text-center justify-center">
              {currentDescription}
            </p>
          </div>
        </ul>
      </>
    );
  }
  //funktio ParsedDataComponent() palauttaa objektin joka sisältää tiedot joita renderData funktio palauttaa
  return <div>{app && renderData(app)}</div>;
}
