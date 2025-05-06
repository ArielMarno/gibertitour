import React from 'react';
import '../styles/tours.css';
//importación de imagenes para tarjetas
import tucuman from '../assets/tours/tucuman.webp';
import cadillal from '../assets/tours/cadillal.webp';
import tafi from '../assets/tours/tafi.webp';
import catamarca from '../assets/tours/catamarca.webp';
import antula from '../assets/tours/antula.webp';
import citytour from '../assets/tours/citytour.webp';
import santiagomoderno from '../assets/tours/santiagomoderno.webp';
import santiagohistorico from '../assets/tours/santiagohistorico.webp';
import patiosantiagueño from '../assets/tours/patiosantiagueño.webp';
import cafayate from '../assets/tours/cafayate.webp';
import cerros from '../assets/tours/cerros.webp';
//icono mapa
import map from '../assets/tours/map.webp';
//flechas
import left from '../assets/tours/left.webp';
import right from '../assets/tours/right.webp'

const tours = [
  { id: 1, imagen: tucuman, titulo: 'Tucumán', recorrido: 'Parque 9 De Julio, Centro, Iglesia Catedral, Plaza Independencia, Casa histórica de la Independencia.', link:"https://wa.link/7ju89c"},
  { id: 2, imagen: cadillal, titulo: 'Tucumán con Cadillal', recorrido: 'Recorrido por Tucumán, Parque 9 de Julio, Museo de la Industria Azucarera, Casa Histórica de la Independencia, Predio Dique El Cadillal. Paseo en catamarán. Aerosilla (opcional).', link: "https://wa.link/aez5z4"},
  { id: 3, imagen: tafi, titulo: 'Tafí del Valle', recorrido: 'Monumento al Indio, Selva Tucumana, Lago la Angostura, Poblado de Tafi.', link: "https://wa.link/2mpyky"},
  { id: 4, imagen: catamarca, titulo: 'Catamarca', recorrido: 'Parada en Paseo artesanal el Portezuelo, Iglesia catedral de Nuestra señora del Valle, Gruta de Choya, Dique el Jumeal, Museo virgen del Valle.', link:"https://wa.link/5gfjb1"},
  { id: 5, imagen: antula, titulo: 'Mamá Antula', recorrido: 'Villa Silípica, lugar de nacimiento de Mamá Antula. Visita a capilla y templete. Regreso por Santiago.', link: "https://wa.link/g2u47y"},
  { id: 6, imagen: citytour, titulo: 'City Tour Termas', recorrido: 'Centro, Mercado, Balneario la Olla, Avenida Costanera, nueva cancha de golf, Dique Frontal, Autódromo, Museo del automóvil.', link: "https://wa.link/gmhvd5"},
  { id: 7, imagen: santiagomoderno, titulo: 'Santiago Moderno', recorrido: 'Estadio Único Madre de Ciudades, Estación tren el desarrollo, Jardín Botánico, Parque del encuentro, Centro, Complejo Casa Taboada.', link: "https://wa.link/0kdz77"},
  { id: 8, imagen: santiagohistorico, titulo: 'Santiago Histórico' , recorrido: 'Estadio Único Madre de Ciudades, Parque Aguirre, Centro, Iglesia Catedral.', link: "https://wa.link/x96udq"},
  { id: 9, imagen: patiosantiagueño, titulo: 'Patio Santiagueño', recorrido: 'Patio Folclórico José Froilán Gonzales (El Indio) Luthier más importante de la provincia, tarde a puro folclore.', link: "https://wa.link/dh1otk"},
  { id: 10, imagen: cafayate, titulo: 'Cafayate', recorrido: 'Selva Tucumana, Poblado de TafÍ, Abra del Infiernillo, Ruinas de Quilmes, Cafayate centro, Iglesia Catedral, Bodega Vasija secreta.', link: "https://wa.link/wgxxwy"},
  { id: 11, imagen: cerros, titulo: 'Cerros Tucumanos', recorrido: ' Dique El Cadillal, El Siambón, Raco, descenso por cerro San Javier.', link: "https://wa.link/is7at4"}
];

const Tours = () => {

  const scrollRef = React.useRef(null);
  
    //distancia de la transicion dependiendo la anchura de la ventana
    const scroll = (direction) => {
      const { current } = scrollRef;
      const windowWidth = window.innerWidth;
      let distance;
  
      if (windowWidth > 1540) {
        distance = 470;
      } else if (windowWidth > 1260) {
        distance = 390;
      } else if (windowWidth > 1025) {
        distance = 385;
      } else if (windowWidth > 768){
        distance = 380;
      } else if (windowWidth > 480){
        distance = 380;
      } else {
        distance = 350;
      }
  
      const start = current.scrollLeft;
      const end = direction === 'left' ? start - distance : start + distance;
      const duration = 100; //duración de la animación en milisegundos
      const startTime = performance.now();
  
      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        current.scrollLeft = start + (end - start) * progress;
  
        if (progress < 1) {
          window.requestAnimationFrame(animateScroll);
        }
      };
  
      window.requestAnimationFrame(animateScroll);
    };
  
    //manejar cambios en el tamaño de la ventana
    window.addEventListener('resize', () => {
      scroll('left');
    });

  return (
    <div className='tours' id='excursiones'>
      <div className='tours-title'>
        <div className='main-title'>
          <div className='line'></div>
          <h2 data-aos="fade-up">Excursiones</h2>
          <div className='line'></div>
        </div>
        <p data-aos="fade-up">No te pierdas la oportunidad de agendar alguno de los increíbles recorridos que tenemos preparados para vos. </p>
      </div>
      <div className='slider' data-aos="fade-up">
        <div className='card-container' ref={scrollRef}>
          {tours.map((tour) => (
            <div className='tour' key={tour.id}>
              <div className='img-container'>
                <img src={tour.imagen} alt={tour.imagen} />
              </div>
             <section>
                <h3>{tour.titulo}</h3>
                <div className='line'></div>
              </section>
              <div className='description'>
                <div className='route'>
                  <img src={map} alt="mapa" />
                  <h5>Visitando:</h5>
                </div>
                <div className='tour-cta'>
                  <p>{tour.recorrido}</p>
                  <a href={tour.link}>MÁS INFORMACIÓN</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='arrow-container'>
          <img src={left} alt='flecha izquierda' id="left" className="arrow-izq" onClick={()=> scroll('left')}/>
          <img src={right} alt='flecha derecha' id="right" className="arrow-der" onClick={()=> scroll('right')}/>
        </div>
      </div>


    </div>
  )
}

export default Tours