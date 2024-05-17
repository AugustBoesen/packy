import Image from 'next/image';
export default function About() {
  return (
    <main>
      <h2 className='self-center mb-16 -mt-24'>About us</h2>
      <div className='flex gap-20'>
        <div className='text-center flex flex-col gap-12'>
          <div>
            <h3>Shape your vision</h3>
            <p className=''>
              Packy was launched as a project in our Software Engineering
              course, where we planned and prepared different aspects of our
              project. Towards the end of the course, we held a sprint week
              dedicated to implementing our first prototype.
            </p>
          </div>
          <div>
            <h3>Our Team:</h3>
            <p>
              Our team at Packy comprises passionate students who combine their
              knowledge, creativity, and desire to learn to deliver an
              easy-to-use tool that helps you visualize application architecture
              design.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <div className='flex gap-2 text-center'>
            <div className='flex flex-col'>
              <Image
                src={'/group.jpg'}
                alt='Our team'
                width={1000}
                height={200}
                className='rounded-xl'
              />
              <p>
                Veikka Liljander, Petri Paasila, Severi Boesen, Inka Männikkö,
                Eelis Pekkarinen
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
