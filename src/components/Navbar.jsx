import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/libro-de-lectura.png';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src ={logo} alt='logo'></img>
        <h1>Biblioteca Online</h1>
      </div>
      <button className="navbar__toggle" onClick={toggleMenu}>
        Menú
      </button>
      <ul className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Inicio</Link>
        </li>
        <li className="navbar__item">
          <Link to="/libros" className="navbar__link">Libros</Link>
        </li>
        <li className="navbar__item">
          <Link to="/buscar" className="navbar__link">Buscar</Link>
        </li>
        <li className="navbar__item">
          <Link to="/alquiler" className="navbar__link">Préstamos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
