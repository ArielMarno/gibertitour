import React, { useState } from 'react';
import '../styles/contact.css';

import logo from '../assets/logo.webp';

import fb from '../assets/contact/fb.webp';
import ig from '../assets/contact/ig.webp';
import wp from '../assets/contact/wp.webp';

import ubi from '../assets/contact/ubi.webp';
import mail from '../assets/contact/mail.webp';
import phone from '../assets/contact/phone.webp';

const Contact = () => {

      //estado para almacenar los datos del formulario
      const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        consulta: ''
      });
    
      //resetear cambios en los inputs
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

  return (
    <div className='contact' id='contacto'>
      <main>
        <div className='form'>
          <div className='form-title'>
            <h2 data-aos="fade-up">¡Contactanos!</h2>
            <p data-aos="fade-up">Dejanos tu consulta y te responderemos a la brevedad.</p>
          </div>
          <form data-aos="fade-up" action="">
            <input type="text"
                  id="nombre"
                  name='nombre'
                  placeholder='Nombre' 
                  value={formData.name}
                  autoComplete="off"
                  onChange={handleInputChange}
                  required/>
            <input type="number" 
                  id="telefono"
                  name='telefono'
                  placeholder='Teléfono' 
                  value={formData.name}
                  autoComplete="off"
                  onChange={handleInputChange}
                  required />
            <textarea id="consulta"
                  name='consulta'
                  placeholder='Consulta' 
                  value={formData.name}
                  autoComplete="off"
                  onChange={handleInputChange}
                  required></textarea>
            <button type='submit'>ENVIAR</button>
          </form>
        </div>
        <div className='contact-content'>
          <div className='contact-content_logo'> 
            <img src={logo} alt="logo" data-aos="fade-up"/>
            <h3 data-aos="fade-up">En Termas de Río Hondo,
              <br /> tu agencia de confianza.</h3>
          </div>
          <div className='contact-content_info'>
            <h3 data-aos="fade-up">Contacto</h3>
            <div className='info'>
              <div className='item'>
                <img src={mail} alt="email" data-aos="fade-up"/>
                <p data-aos="fade-up">gibertiturismo@hotmail.com</p>
              </div>
              <div className='item'>
                <img src={ubi} alt="ubicación" data-aos="fade-up"/>
                <p data-aos="fade-up">Francisco Solano 264 (local 2), Termas de Río Hondo, Santiago del Estero.</p>
              </div>
              <div className='item'>
                <img src={phone} alt="teléfono" data-aos="fade-up" />
                <div data-aos="fade-up">
                  <p className='item-phone'>Oficina central</p>
                  <p>+54 9 3858 48-0049</p>
                </div>
              </div>
              <div className='item'>
                <img src={phone} alt="teléfono" data-aos="fade-up"/>
                <div data-aos="fade-up">
                  <p className='item-phone' >Venta online</p>
                  <p>+54 9 11 6168-3941</p>
                </div>
              </div>
              <div className='contact-content_social'>
                <a href="https://www.facebook.com/gibertitour" data-aos="fade-up"><img src={fb} alt="Facebook" /></a>
                <a href="https://www.instagram.com/gibertitour" data-aos="fade-up"><img src={ig} alt="Instagram" /></a>
                <a href="https://wa.link/0davau" data-aos="fade-up"><img src={wp} alt="Whatsapp" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-nav' > 
          <h3 data-aos="fade-up">Giberti Turismo</h3>
          <a href="#quienessomos" data-aos="fade-up">Quienes Somos</a>
          <a href="#excursiones" data-aos="fade-up">Excursiones</a>
          <a href="#traslados" data-aos="fade-up">Traslados Privados</a>
          <a href="#eventos" data-aos="fade-up">Eventos Corporativos</a>
        </div>
      </main>
      <footer>
        <div className='footer-line'></div>
        <div className='footer-content'>
          <p className='copy'>Copyright © {new Date().getFullYear()} Giberti Tour. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por <a href="https://sunfloweragencia.com/">SunFlower Agencia</a>.</p>
        </div>
      </footer>
    </div>
  )
}

export default Contact