import React, { useContext } from 'react';
import { LanguageContext } from './languagecontext'; 
import github from '../assets/Github-desktop-logo-symbol.svg.png';
import envelope from '../assets/envelope.png';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
      <nav>
        <section id="basdepage" className="footer">
          <a href="mailto:morriganegb@gmail.com" className="wow fadeInUp animated" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
            <img src={envelope} alt="Email" />
          </a>
          <a href="https://github.com/Teen-raven">
            <img src={github} alt="Github" className="social-icon" />
          </a>
          <a href="https://discord.gg/GXZY5wkR4B" target="_blank" rel="noopener noreferrer">
            {language === 'fr' ? 'Rejoignez notre Discord' : 'Join our Discord'}
          </a>
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
