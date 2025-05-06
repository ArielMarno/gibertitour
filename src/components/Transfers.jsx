import '../styles/transfers.css';
import TransfersAnimation from './TransfersAnimation';


const Transfers = () => {
  return (
    <div className='transfers' id='translados'>
      <aside>
        <TransfersAnimation />
      </aside>
      <section>
        <div className="content">
          <h2 data-aos="fade-up">Traslados privados</h2>
          <div className="texts" data-aos="fade-up">
            <p data-aos="fade-up">En <span>Giberti Tour</span> ofrecemos un servicio exclusivo de traslados privados con unidades 0 km, incluyendo autos, vans y combis adaptadas a tus necesidades.</p>
            <p data-aos="fade-up">Realizamos transfers desde y hacia los aeropuertos de Tucumán, Santiago del Estero, Río Hondo, Salta y Catamarca, garantizando confort y puntualidad.</p>
            <p data-aos="fade-up">Nuestros traslados privados están disponibles para excursiones personalizadas, viajes exclusivos o el transporte de grupos. Además, contamos con vehículos especiales para el traslado de bolsos de golf.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transfers