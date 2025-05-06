import '../styles/corporate.css';

import check from '../assets/corporate/check.webp';
import travel from '../assets/corporate/corporate.webp';

const Corporate = () => {
  return (
    <div className='corporate' id='eventoscorporativos' >
      <div className='corp-content'>
      <div className='corp-title'>
          <h2 data-aos="fade-up">Eventos corporativos</h2>
          <h3 data-aos="fade-up">En <span>Giberti Tour</span> brindamos soluciones logísticas integrales para congresos, convenciones y eventos corporativos en Termas de Río Hondo.</h3>
          <div className='corp-line' data-aos="fade-up"></div>
          <h5 data-aos="fade-up">Nos especializamos en transporte eficiente y coordinado, además de ofrecer servicios adicionales como:</h5>
        </div>
        <div className='corp-items'>
          <div data-aos="fade-up"><img src={check} alt="tilde"/><p>Coordinación de grupos.</p></div>
          <div data-aos="fade-up"><img src={check} alt="tilde"/><p>Guías bilingües.</p></div>
          <div data-aos="fade-up"><img src={check} alt="tilde"/><p>Gestión de pasajes aéreos.</p></div>
          <div data-aos="fade-up"><img src={check} alt="tilde"/><p>Paquetes con alojamiento.</p></div>
        </div>
        <p data-aos="fade-up">Si tu evento requiere soluciones personalizadas, nos encargamos de cada detalle para garantizar una experiencia fluida y profesional.</p>
      </div>

      <aside>
        <div className='img-container'>
          <img src={travel} alt="travel" />
        </div>
      </aside>



    </div>
  )
}

export default Corporate