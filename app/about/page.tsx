export default function About() {
  return (
    <main>
      <h1>About us:</h1>
      <h3>Shape your vision</h3>
      <p>
        Packy was launched as a project in our Software Engineering course,
        where we planned and prepared different aspects of our project. Towards
        the end of the course, we held a sprint week dedicated to implementing
        our first prototype.
      </p>
      <div>
        <h2>Our Team:</h2>
        <p>
          Our team at Packy comprises passionate students who combine their
          knowledge, creativity, and desire to learn to deliver an easy-to-use
          tool that helps you visualize application architecture design
        </p>
        {/* kuvat ei oo pakollisia  */}
        <p>Meet Our Visionaries:</p>
        <div className="flex gap-2 text-center">
          <div className="flex flex-col">
            {/* esimerkki next js imagen käytöstä, kun kuvat vaihdettu picsumista oikeisiin kuviin <Image
      src="/kuva.png"
      width={200}
      height={200}
      alt="Picture of person"
    /> */}

            <img src="https://picsum.photos/200/200" alt="testi" />
            <p>Eelis Pekkarinen</p>
          </div>
          <div className="flex flex-col">
            <img src="https://picsum.photos/200/200" alt="testi" />
            <p>Petri Paasila</p>
          </div>
          <div className="flex flex-col">
            <img src="https://picsum.photos/200/200" alt="testi" />
            <p>Inka Männikkö</p>
          </div>
          <div className="flex flex-col">
            <img src="https://picsum.photos/200/200" alt="testi" />
            <p>Severi Boesen</p>
          </div>
          <div className="flex flex-col">
            <img src="https://picsum.photos/200/200" alt="testi" />
            <p>Veikka Liljander</p>
          </div>
        </div>
      </div>
    </main>
  );
}
