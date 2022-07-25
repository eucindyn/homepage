import React from 'react';
import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';
import Avatar from '../img/profile.png';
import '../styles/components/sidebar.sass';

function Sidebar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Cindy" />
      <p className="title">Desenvolvedora Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eucindyn/" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default Sidebar;