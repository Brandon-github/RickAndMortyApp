import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">Rick and Morty App</Link>

      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">Home</Link>
        </li>
        <li className="nav__item">
          <Link to="/characters/page/1" className="nav__link">Characters</Link>
        </li>
        <li className="nav__item">
          <Link to="/search" className="nav__link">Search</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
