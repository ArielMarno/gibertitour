import '../styles/about.css';
import check from '../assets/about/check.webp';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import rsp0 from '../assets/about/slider-about.webp';
import rsp1 from '../assets/about/slider-about1.webp';
import rsp2 from '../assets/about/slider-about2.webp';

const About = () => {

  return (
    <div className='about' id='quienessomos'>
      <main>
        <section>
          <h2 data-aos="fade-up">Transformá tu viaje en <br /> una aventura única</h2>
          <h4 data-aos="fade-up">Somos <span>Carolina y Juan José</span>, dos guías de turismo que cumplieron su sueño de tener su propia agencia. </h4>
          <div className='about-line' data-aos="fade-up"></div>
          <div className='carousel-rsp'>
            <Carousel autoPlay stopOnHover infiniteLoop swipeable={false} className='carousel'>
              <div>
                <img src={rsp0} alt='photo'/>
              </div>
              <div>
                <img src={rsp1} alt='photo'/>
              </div>
              <div>
                <img src={rsp2} alt='photo'/>
              </div>
            </Carousel>
          </div>
          <div className='about-text'>
            <p data-aos="fade-up">Junto con nuestro equipo de trabajo, de amplia experiencia, trabajamos día a día para brindar un servicio de excelencia. Nos avalan más de 18 años de trayectoria y nos eligen más de 50 empresas de distintas partes del país. Somos la única empresa distinguida con normas SIGO, avaladas por la Secretaría de Turismo de la Nación.</p>
          </div>
          <div className='about-checks' data-aos="fade-up">
            <div className='about-checks-item'><img src={check} alt="check" /> <p>Calidad en el transporte.</p></div>
            <div className='about-checks-item'><img src={check} alt="check" /> <p>Guías especializados.</p></div>
            <div className='about-checks-item'><img src={check} alt="check" /> <p>Coordinación profesional.</p></div>
            <div className='about-checks-item'><img src={check} alt="check" /> <p>Eventos corportivos.</p></div>
          </div>
        </section>
        <aside>
        <Carousel autoPlay stopOnHover infiniteLoop swipeable={false} className='carousel'>
            <div>
              <img src={rsp0} alt='photo'/>
            </div>
            <div>
              <img src={rsp1} alt='photo'/>
            </div>
            <div>
              <img src={rsp2} alt='photo'/>
            </div>
          </Carousel>
        </aside>
      </main>
    </div>
  )
}

export default About