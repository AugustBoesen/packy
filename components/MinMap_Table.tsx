//importoidaan data
import jsonData from '../db/packy.json';

//luodaan interface datan tietoja varten jossa data tyypitetään
interface Item {
  contentId: number;
  currentContent: [{ id: number; name: string; description: string }];
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
    // TÄMÄ NUMERO PITÄÄ SAADA INTERAKTIIVISENA MINDMAPIN PAGETSX:STÄ
    if (item.contentId === 3) {
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
    return (
      <ul>
        {data.map((item) => (
          <li key={item.currentContent[0].id}>
            {item.currentContent.map((content, i) => (
              <div key={content.id}>
                <strong>{content.name}</strong>
                <br />
                <strong>{content.description}</strong>
              </div>
            ))}
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
