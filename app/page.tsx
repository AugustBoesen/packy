import Image from 'next/image';
import Link from 'next/link';

const greetingsList = [
  'Good morning, early bird!',
  'Good afternoon, friend!',
  'Good evening, night owl!',
];
let greeting = '';
const currentDateTime = new Date();
const currentHour = currentDateTime.getHours();
if (currentHour < 12 && currentHour > 5) {
  greeting = greetingsList[0];
}
if (currentHour < 18 && currentHour > 12) {
  greeting = greetingsList[1];
}
if (currentHour > 18 || currentHour < 5) {
  greeting = greetingsList[2];
}

export default function Index() {
  return (
    <main className='flex-row'>
      <div className='flex flex-col pr-6 md:w-[50vw] justify-center'>
        <h1 className='absolute font-bold blur-xl -z-10 top-32 opacity-100'>
          {greeting}
        </h1>
        <h1 className='font-bold bg-gradient-to-r from-emerald-400 via-green-200 to-indigo-200 inline-block text-transparent bg-clip-text'>
          {greeting}
        </h1>

        <p className='w-[26rem]'>
          Nowadays, grasping the scope of modern application development can be
          difficult at times.
        </p>
        <p className='w-[32rem]'>
          Packy is a visual tool designed for developers of all skill levels to
          figure out the desired development tools for a project.
        </p>
        <p className='w-[36rem] mb-[5vh]'>
          It guides you through the basic steps for creating your desired
          application, taking into account both essential and quality-of-life
          tools.
        </p>
        <h2 className='mb-[5vh] text-center w-full italic bg-gradient-to-r from-emerald-400 via-green-200 to-indigo-200 inline-block text-transparent bg-clip-text'>
          Shape your vision.
        </h2>
        <Link
          className='indexbtn bg-emerald-500 hover:bg-emerald-200'
          href='/mindmap'
        >
          Start planning your project
        </Link>
        <Link className='indexbtn bg-teal-500 hover:bg-teal-200' href='/about'>
          Learn more about us
        </Link>
        <div className='bg-emerald-200 w-1/2 blur-3xl h-96 absolute bottom-40 opacity-20' />
        <Link className='indexbtn bg-cyan-500 hover:bg-cyan-200' href='/donate'>
          Become a Patreon
        </Link>
      </div>
      <div>
        <Image
          className='opacity-20 absolute top-72 animate-bounce-slow'
          src={'/appdesign.png'}
          alt='appdesign'
          width={700}
          height={700}
        />
      </div>
      <Image
        className='-z-50 absolute -left-[40rem] -bottom-[40rem] animate-spin-slow opacity-40'
        src={'/appdesign2.png'}
        alt='mainbg'
        width={1300}
        height={1300}
      />
    </main>
  );
}
