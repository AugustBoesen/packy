//Komponentti sisältää Packyn päätoiminnallisuudet ja välittää tietoa content komponenttiin
//eteenpäin vietäväksi

/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { MouseEventHandler } from 'react';
import React, { useState } from 'react';
//importoidaan data
import jsonData from '../db/packy.json';

import ProgressBar from './progressbar';
import Image from 'next/image';

let currentContentId = 2;

//luodaan interface datan tietoja varten jossa data tyypitetään
interface Item {
  contentId: number;
  info: string;
  currentContent: {
    code: string;
    id: number;
    name: string;
    description: string;
    image: string;
  }[];
}

//määritellään muuttuja parseData joka on tyyppiä Item[], sisältää item tyyppisiä objekteja
const parsedData: Item[] = jsonData as Item[];

//määritellään funktio ParsedDataComponent(), joka exportataan
export default function ParsedDataComponent({
  handleDatafromMinMap,
  mmfinishSignal,
}: {
  handleDatafromMinMap: any;
  mmfinishSignal: () => void | any;
}) {
  let [currentDescription, setCurrentDescription] = useState('');
  let [currentlySelectedContent, setCurrentlySelectedContent] = useState({});
  let [currentBackground, setCurrentBackground] = useState('');

  function setfinishSignal() {
    // tähän voi laittaa filttereitä
    mmfinishSignal();
  }

  function selectOption(content: {
    id: number;
    name: string;
    description: string;
    image: string;
  }): MouseEventHandler<HTMLButtonElement> {
    return (event) => {
      setCurrentlySelectedContent(content);
      setCurrentDescription(content.description);
      setCurrentBackground(content.image);

      currentContentId = content.id;
      // console.log('id on minmapissa: ' + currentContentId);
      // console.log(JSON.stringify(content)); // Pass content directly
      handleDatafromMinMap(content); // Pass content here
    };
  }
  const clearDescription = () => {
    setCurrentDescription(''); // Tyhjennä kuvaus
    setCurrentBackground('');
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
      <main className='px-0 mx-[3.4rem]'>
        <ProgressBar
          pbcurrentStep={currentStep}
          pbsetCurrentStep={setCurrentStep}
          clearDesc={clearDescription}
          pbfinishSignal={setfinishSignal}
        />
        <ul className='flex flex-row min-h-[65vh] w-full mt-6 justify-center bg-slate-900 shadow-inner border-l-4 border-slate-800 border-t-4'>
          {data.map((item) => (
            <li key={item.currentContent[0].id}>
              <h2 className='pl-20 mt-3'>{item.info}</h2>
              {item.currentContent.map((content, i) => (
                <div key={content.id}>
                  <div className='w-[50vw] h-full flex justify-evenly flex-row my-2'>
                    <button
                      onClick={selectOption(content)}
                      className='z-10 w-96 hover:w-[80%] font-bold border py-4 my-3 transition-all duration-500  rounded-lg hover:bg-slate-200 hover:text-black focus:text-emerald-500 hover:border-double hover:border-x-8 hover:border-slate-400 text-xl'
                    >
                      {content.name}
                    </button>
                  </div>
                  <Image
                    className='text-center content-center text-2xl absolute bottom-[20%] right-[16vw] opacity-30 h-[48vh] w-auto max-w-[48vw]'
                    src={currentBackground}
                    width={500}
                    height={500}
                    alt='Choose an option to view information'
                  />
                </div>
              ))}
            </li>
          ))}
          <div className='flex justify-center text-center border-r-4 mt-auto mb-auto border-slate-900 border-b-4 transition-all'>
            <p className='flex items-center font-bold text-lg justify-center bg-black bg-opacity-40 z-10 w-[50vw] px-20 h-[65vh] mt-auto text-center'>
              {currentDescription}
            </p>
          </div>
        </ul>
      </main>
    );
  }
  //funktio ParsedDataComponent() palauttaa objektin joka sisältää tiedot joita renderData funktio palauttaa
  return <div>{app && renderData(app)}</div>;
}
