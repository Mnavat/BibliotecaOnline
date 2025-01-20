import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/Home6.jpg';
import ExampleCarouselImagetwo from '../assets/images/Home4.jpg';
import ExampleCarouselImagethree from '../assets/images/home1.png';
import lastImage from '../assets/images/home7.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import BookList from './BookList';

const Home = ({ books }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return(
    <div>
      <section className="home__welcome" >
        <div className="home__welcome-content">
          <h1 className="home__welcome-title">Bienvenido</h1>
        </div>
      </section>
      <section className="home__first">
        <div>
        <h1>Biblioteca online es la puerta a un mundo lleno de historias.</h1>
        <h3>Las historias que te inspiran, emocionan y transforman están aquí. Explora un mundo de géneros literarios, ¡y déjate llevar por el encanto de la lectura en cada párrafo!</h3>
        </div>
      </section>
      <section className='home__releases'>
        <h3>Lo más nuevo</h3>
        <BookList books={books}/>
      </section>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={ExampleCarouselImage} alt='imagen1' className="d-block w-100"/>
          <Carousel.Caption>
            <h3>Ve a libros</h3>
            <p>¡y descubre la basta selección que tenemos para ti!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ExampleCarouselImagetwo} alt='imagen1' className="d-block w-100"/>
          <Carousel.Caption>
            <h3>Selecciona el libro que quieres alquilar</h3>
            <p>Y enamorate de una nueva historia</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ExampleCarouselImagethree} alt='imagen1' className="d-block w-100"/>
          <Carousel.Caption>
            <h3>Comparte con amigos</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className='home__Last'>  
        {/* Lado izquierdo: Imagen */}
          <div className="imagen-container">
            <img
              src= {lastImage}
              alt="Quiénes Somos"
              className="imagen"
            />
          </div>

          {/* Lado derecho: Título y párrafo */}
          <div className="texto-container">
            <h1 className="titulo">Quiénes Somos</h1>
            <p className="parrafo">
            Somos Biblioteca virtual, un espacio dedicado a fomentar el amor por la lectura, el aprendizaje y la creatividad. Desde nuestros inicios, nos hemos comprometido a ser un lugar donde las ideas cobren vida, ofreciendo a nuestra comunidad acceso a un vasto mundo de conocimiento, entretenimiento y exploración.
            </p><p className="parrafo">
            En nuestra biblioteca encontrarás:
            </p><p className="parrafo">
            Una colección diversa y accesible: Contamos con miles de libros que abarcan desde clásicos de la literatura hasta las últimas novedades, así como revistas, periódicos y recursos digitales para todas las edades.
            </p><p className="parrafo">
            Eventos y actividades culturales: Talleres de escritura, clubes de lectura, exposiciones artísticas y conferencias para enriquecer el desarrollo cultural y social de nuestros usuarios.
            </p><p className="parrafo">
            Nuestra misión es ser un faro de conocimiento y creatividad, inspirando a personas de todas las edades a descubrir, crecer y compartir. Creemos firmemente que una biblioteca es mucho más que un lugar para libros; es un refugio donde las ideas florecen y las historias cobran vida.

            Te invitamos a visitarnos y ser parte de nuestra comunidad. En Biblioteca Aurora, siempre hay algo nuevo por descubrir.
            </p>
          </div>
          </section>
    </div>
  );
}

export default Home