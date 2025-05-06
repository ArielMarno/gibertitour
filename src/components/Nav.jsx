import '../styles/nav.css';
import React, { useState } from 'react';
import logo from "../assets/logo.webp";
import Menu from './Menu';

const Nav = () => {

    //establecer el opuesto cuando se identifica si esta abierto el menu
    const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen);
        };
        
    //booleano para apertura y cierre del menu desplegable al hacer click en los links del navegador
    const handleLinkClick = () => {
      setIsOpen(false);
    };

  return (
    <nav>
        <figure>
          <a href="#inicio"><img src={logo} alt="Giberti Tour" /></a>
        </figure>
        <main className={`menu ${isOpen ? 'open' : ''}`}>
          <a href="#quienessomos" onClick={handleLinkClick}>Quienes Somos</a>
          <a href="#excursiones" onClick={handleLinkClick}>Excursiones</a>
          <a href="#translados" onClick={handleLinkClick}>Traslados Privados</a>
          <a href="#eventoscorporativos" onClick={handleLinkClick}>Eventos Corporativos</a>
          <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
        </main>
        <div className='burguer'>
          <Menu toggleMenu={toggleMenu} isOpen={isOpen}/>
        </div>
    </nav>
  )
}

export default Nav