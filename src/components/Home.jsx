import "../styles/home.css";
import Slider from "./Slider";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="home" id="inicio">
      <Nav className="nav" />
      <Slider />
      <div className="title">
        <h1>Convertí tu viaje en una experiencia <br /> memorable disfrutando con nosotros</h1>
        <p>Garantizamos un servicio profesional y único pensado para que disfrutes de cada detalle.</p>
        <a href="https://wa.link/0davau" className="cta">
          <span>MÁS INFORMACIÓN</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
