//importoidaan data
import jsonData from '../db/packy.json';

//luodaan interface datan tietoja varten jossa data tyypitetään
interface Item {
  code: string;
  id: number;
  name: string;
  description: string;
}

//määritellään muuttuja parseData joka on tyyppiä Item[], sisältää item tyyppisiä objekteja
const parsedData: Item[] = jsonData as Item[];

//luodaan funktio getItemByCode, joka on tyyppiä Item[], jonka parametriksi tulee string tyyppinen parametri
function getItemByCode(code: string): Item[] {
  //alustetaan Item[] tyyppinen tyhjä taulukko i
  let i: Item[] = [];
  //käydään läpi parsedData taulukon alkioiden code propertyt ja jos ne ovat samankaltaisia kuin 'app'
  //ne pushataan i taulukkoon.
  parsedData.forEach((item) => {
    if (item.code === 'app') {
      i.push(item);
    }
  });
  //Lopuksi palautetaan i taulukko
  return i;
}

//määritellään funktio ParsedDataComponent(), joka exportataan
export default function ParsedDataComponent() {
  //määritellään muuttuja app, joka sisältää funktion getItemByCoden palautusarvon
  const app = getItemByCode('app');

  //määritellään funktio renderData joka ottaa parametrikseen item[] tyyppisen data objektin
  function renderData(data: Item[]) {
    //funktio palauttaa listan jokaisen nimen ja descriptionin data parametrista
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>
            <br />
            <strong>{item.description}</strong>
          </li>
        ))}
      </ul>
    );
  }
  //funktio ParsedDataComponent() palauttaa objektin joka sisältää tiedot joita renderData funktio palauttaa
  return (
    <div>
      <h1>Application type</h1>
      {app && renderData(app)}
    </div>
  );
}
