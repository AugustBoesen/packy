import '../styles/header.css';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {' '}
        <a href="/">PACKY</a>
      </div>

      <ul className="nav-list">
        <li>
          <h3 className=" hover:text-emerald-500 ease-out hover:translate-y-1 transition-all rounded">
            <a href="/mindmap">Start</a>
          </h3>
        </li>
        <li>
          <h3 className="hover:text-emerald-500 ease-out hover:translate-y-1 transition-all rounded">
            <a href="/about">About</a>
          </h3>
        </li>
        <li>
          <h3 className="hover:text-yellow-300 ease-out hover:translate-y-1 transition-all rounded">
            <a href="https://bitcoin.org/en/choose-your-wallet" target="_blank">
              Donate
            </a>
          </h3>
        </li>
      </ul>
    </header>
  );
}
