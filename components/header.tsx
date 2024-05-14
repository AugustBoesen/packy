import '../styles/header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        {' '}
        <a href="/">PACKY</a>
      </div>
      <ul className="nav-list">
        <li>
          <h3>
            <a href="/mindmap">Start</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="/about">About</a>
          </h3>
        </li>
        <li>
          <h3>
            <a href="https://bitcoin.org/en/choose-your-wallet" target="_blank">
              Donate
            </a>
          </h3>
        </li>
      </ul>
    </header>
  );
}
