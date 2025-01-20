import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <h2 className="footer__title">Contacto</h2>
        <p className="footer__address">Calle Ejemplo 123, Ciudad, País</p>
        <p className="footer__phone">Tel: +123 456 7890</p>
        <p className="footer__email">email@biblioteca.com</p>
      </div>

      <div className="footer__socials">
        <h2 className="footer__title">Síguenos</h2>
        <ul className="footer__social-links">
          <li className="footer__social-item">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaFacebook />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaInstagram />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaTwitter />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <FaWhatsapp />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <p className="footer__text">© 2025 Biblioteca Online. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;