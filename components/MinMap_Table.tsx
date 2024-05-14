('');
const OhjelmointiKielet = ['java script', 'typescript', 'ubuntu'];

function Modal({ taulukko }: { taulukko: string[] }) {
  return (
    <ul>
      {taulukko.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default function Kakka() {
  return (
    <>
      <h2>tähän otsikko</h2>
      <Modal taulukko={OhjelmointiKielet} />
    </>
  );
}
