import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from './languagecontext';
import flagFrance from '../assets/drapeauxfr.png';
import flagUK from '../assets/drapeauxuk.png';

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const renderFlag = () => {
    if (language === 'fr') {
      return <img src={flagUK} alt="English" onClick={toggleLanguage} />;
    } else {
      return <img src={flagFrance} alt="Français" onClick={toggleLanguage} />;
    }
  };

  return (
    <header>
      <h2>{language === 'fr' ? 'Mon portfolio' : 'My portfolio'}</h2>
      <nav className="navbar">
        <NavLink to="/" exact activeClassName="active">
          {language === 'fr' ? 'Accueil' : 'Home'}
        </NavLink>
        <NavLink to="/cv" activeClassName="active">
          CV
        </NavLink>
        {renderFlag()}
      </nav>
    </header>
  );
}

export default Header;
