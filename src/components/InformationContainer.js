import React from 'react';
import '../styles/components/informationcontainer.sass';
import { AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

function InformationContainer() {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Campinas, São Paulo</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>Email</h3>
          <p>cindy.nsc1@gmail.com</p>
        </div>
      </div>
    </section>
  );
}

export default InformationContainer;