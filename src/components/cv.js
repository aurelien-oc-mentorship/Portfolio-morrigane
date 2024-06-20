import React, { useState, useContext, useRef } from 'react';
import '../assets/App.css';
import { LanguageContext } from './languagecontext';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { Collapse } from 'react-collapse';
const Experience = () => {
  const [isActive, setIsActive] = useState(false);
  const { language } = useContext(LanguageContext);

  const toggleCard = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="experience">
      <h2 className="section-title">{language === 'fr' ? 'Expériences' : 'Experiences'}</h2>
      <div className="subsection">
        <h3 className="section-title">{language === 'fr' ? 'Stage' : 'Internship'}</h3>
        <div className="card-container">
          <div className={`card ${isActive ? 'active' : ''}`}>
            <h4>{language === 'fr' ? 'Assistante de direction' : 'Executive assistant'} · SURFRIDER ·{language === 'fr' ? 'Novembre 2021 à Décembre 2021' : 'November 2021 to December 2021'} Novembre 2021 à Décembre 2021</h4>
            <ul>
              <li>{language === 'fr' ? 'Tri de documents' : 'Sorting documents'}</li>
              <li>{language === 'fr' ? 'Pointage d’information' : 'Information scoring'}</li>
              <li>{language === 'fr' ? 'Vérification des données' : 'Data verification'}</li>
              <li>{language === 'fr' ? 'Archivage de documents' : 'Archiving documents'}</li>
            </ul>
          </div>
          <div className={`card ${isActive ? 'active' : ''}`}>
            <h4>{language === 'fr' ? 'Secrétaire Comptable' : 'Accounting Secretary'}· LA CHAMBRE DES METIER ET DE L’ARTISANAT (BAYONNE) ·{language === 'fr' ? 'Juin 2022 à Juillet 2022' : 'June 2022 to July 2022'} </h4>
            <ul>
              <li>{language === 'fr' ? 'Accueil de personnes' : 'Welcoming people'}</li>
              <li>{language === 'fr' ? 'Tri du courrier' : 'Mail sorting'}</li>
              <li>{language === 'fr' ? 'Agenda pour le prêt de voitures et vérification des disponibilités' : 'Car loan agenda and availability check'}</li>
              <li>{language === 'fr' ? 'Calcul des nuitées étudiant pour remboursement' : 'Calculation of student nights for refund'}</li>
            </ul>
          </div>
        </div>
        <h3 className="section-title">{language === 'fr' ? 'Emploi' : 'Job'}</h3>
        <div className="card-container">
        <div className={`card ${isActive ? 'active' : ''}`}>
        <h4>{language === 'fr' ? 'Equipière polyvalente' : 'Crew member'}· McDonald ·{language === 'fr' ? '18 octobre 2022 à 30 juillet 2023' : 'October 18, 2022 to July 30, 2023'} </h4>
            <ul>
              <li>{language === 'fr' ? 'Coaching des nouveaux employés' : 'Coaching of new employees'} </li>
              <li>{language === 'fr' ? 'Ménage du restaurant' : 'Restaurant cleanings'} </li>
              <li>{language === 'fr' ? 'Réassort' : 'restocking'}</li>
              <li>{language === 'fr' ? 'Prise en charge de la caisse et accueil des clients' : 'Cashier handling and customer reception'}</li>
              <li>Close</li>
            </ul>
</div>
<div className={`card ${isActive ? 'active' : ''}`}>
        <h4>{language === 'fr' ? 'Vendeuse de vin à la salle de vente ' : 'Wine seller at the sales room'}
· LOS VINEROS DE ALCOHUAZ · ALCOHUAZ (CHILI) ·{language === 'fr' ? 'Septembre 2019 à Décembre 2019' : 'September 2019 to December 2019'} </h4>
            <ul>
              <li>{language === 'fr' ? 'Vente de vin' : 'Wine sale'}</li>
              <li>{language === 'fr' ? 'Prise en charge de la caisse' : 'Checkout support'} </li>
              <li>{language === 'fr' ? 'Réassort de vin' : 'Wine restocking'} </li>
              <li>{language === 'fr' ? 'Conseil à la clientèle' : 'Customer advice'}</li>
              <li>{language === 'fr' ? 'Dégustation de vin' : 'Wine tasting'}</li>
              <li>{language === 'fr' ? 'Utilisation de différents langages pour conseiller les clients (Anglais, Espagnol, Français)' : 'Use of different languages ​​to advise customers (English, Spanish, French)'}</li>
            </ul>
            </div>
            <div className={`card ${isActive ? 'active' : ''}`} >
              <h4>{language === 'fr' ? 'Equipière polyvalente' : 'Crew member'}  · FUFU RAMEN · {language === 'fr' ? '20 Novembre 2022 à 14 Octobre 2022' : 'November 20 , 2022 to October 14, 2022'}</h4><ul>
              <li>{language === 'fr' ? 'Préparation de ramen' : 'Ramen preparation'}</li>  
              <li>{language === 'fr' ? 'Cuisson des gyoza' : 'Cooking gyoza'}</li>
              <li>{language === 'fr' ? 'Ménage du restaurant en fin de service' : 'Cleaning the restaurant at the end of service'}</li> 
              <li>{language === 'fr' ? 'Réassort' : 'Restocking'}</li>
              <li>{language === 'fr' ? 'Préparation commande Uber eat' : 'Uber eat order preparation'} </li>
       </ul>
</div>
      </div>
      </div>
    </section>
  );
};

const Langue = () => {
  const { language } = useContext(LanguageContext);
  const [isB1Open, setIsB1Open] = useState(false);
  const [isC1Open, setIsC1Open] = useState(false);

  const toggleB1 = () => {
    setIsB1Open(!isB1Open);
  };

  const toggleC1 = () => {
    setIsC1Open(!isC1Open);
  };

  return (
    <section className="Langue">
      <h2 className="section-title">{language === 'fr' ? 'Langue' : 'Language'}</h2>
      <div className="subsection">
        <div className="card">
          <h3 onClick={toggleB1} style={{ cursor: 'pointer' }}>
            {language === 'fr' ? 'Anglais' : 'English'} B1 {isB1Open ? '▲' : '▼'}
          </h3>
          <Collapse isOpened={isB1Open}>
            <div className="card-details">
              <p>{language === 'fr' ? `
                B1 correspond à un niveau d'utilisateur indépendant (niveau seuil).

                Cela signifie que vous avez les capacités suivantes :

                Comprendre les points essentiels d'une discussion quand un langage clair et standard est utilisé et s'il s'agit de choses familières au travail, à l'école, aux loisirs, etc.
                Être autonome dans la plupart des situations rencontrées en voyage dans une région où la langue cible est parlée.
                Pouvoir produire un discours simple et cohérent sur des sujets familiers et dans ses domaines d'intérêt.
                Savoir raconter un événement, une expérience ou un rêve, décrire un espoir ou un but et exposer brièvement des raisons ou explications pour un projet ou une idée.
              ` : `
                B1 corresponds to an independent user level (threshold level).

                This means you have the following abilities:

                Understand the main points of a discussion when clear and standard language is used and if it concerns familiar things at work, school, leisure, etc.
                Be autonomous in most situations encountered while traveling in a region where the target language is spoken.
                Produce a simple and coherent discourse on familiar topics and in areas of interest.
                Be able to recount an event, experience, or dream, describe a hope or goal, and briefly explain reasons or explanations for a project or idea.
              `}</p>
            </div>
          </Collapse>
        </div>
        <div className='card'>
        <h3 onClick={toggleC1} style={{ cursor: 'pointer' }}>
            {language === 'fr' ? 'Espagnol' : 'Spanish'} C1 {isC1Open ? '▲' : '▼'}
          </h3>
          <Collapse isOpened={isC1Open}>
            <div className="card-details">
              <p>{language === 'fr' ? `
               C1 correspond à un niveau d'utilisateur expérimenté (niveau autonome).
               
               Cela signifie que vous avez les capacités suivantes :
               
               Comprendre des textes longs et exigeants et saisir des significations implicites
               S'exprimer spontanément et couramment sans trop devoir chercher ses mots
               Utiliser la langue de façon efficace et souple dans la vie sociale, professionnelle ou académique
               S'exprimer sur des sujets complexes de façon claire et bien structurée et manifester son contrôle des outils linguistiques d'organisation, d'articulation et de cohésion du discours
              ` : `
              C1 corresponds to an experienced user level (autonomous level).
              
              This means you have the following abilities:
              
              Understand long, demanding texts and grasp implicit meanings
              Express yourself spontaneously and fluently without having to search for words too much
              Use language effectively and flexibly in social, professional or academic life
              Express oneself on complex subjects in a clear and well-structured manner and demonstrate control of the linguistic tools of organization, articulation and cohesion of discourse
              `}</p>
            </div>
          </Collapse>
        </div>
      </div>
    </section>
  );
};

const Formation = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="formation">
      <h2 className="section-title">{language === 'fr' ? 'Etude' : 'Study'}</h2>
      <div className="card-container">
        <div className="card">
          <h4>{language === 'fr' ? 'Secrétaire Comptable' : 'Accounting Secretary'}· L’AFPA BAYONNE ·{language === 'fr' ? 'Janvier 2022 à Juillet 2022' : 'January 2022 to July 2022'}</h4>
        </div>
        <div className="card">
          <h4>Bac STMG option SIG · LYCEE LOUIS DE FOIX BAYONNE · {language === 'fr' ? 'Septembre 2015 Juillet à 2016' : 'September 2015 July to 2016'}</h4>
        </div>
      </div>
    </section>
  );
};

const Competence = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="competence">
      <h2 className="section-title">{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
      <div className="card-container">
        <div className="card">
          <h4>{language === 'fr' ? 'Générales' : 'General'}</h4>
          <ul>
          <li>{language === 'fr' ? 'Réalisation de la gestion administrative du courrier' : 'Carrying out administrative mail management'}</li>
            <li>{language === 'fr' ? 'Saisie des documents numériques' : 'Entering digital documents'}</li>
            <li>{language === 'fr' ? 'Classification des documents' : 'Classification of documents'}</li>
            <li>{language === 'fr' ? 'Organisation des déplacements professionnels' : 'Organization of business trips'}</li>
            <li>{language === 'fr' ? 'Définition des besoins en approvisionnement' : 'Defining supply needs'}</li>
            <li>{language === 'fr' ? 'Suivi de létat des stocks' : 'Monitoring stock status'}</li>
            <li>{language === 'fr' ? 'Préparation des commandes' : 'Preparation of commands'}</li>
            <li>{language === 'fr' ? 'Accueil client' : 'Customer reception'}</li>
            <li>{language === 'fr' ? 'Archivage (documents papiers et numériques)' : 'Archiving (paper and digital documents)'}</li>
          </ul>
        </div>
        <div className="card">
          <h4>{language === 'fr' ? 'Secrétariat' : 'Secretariat'}</h4>
          <ul>
            <li>{language === 'fr' ? 'Maîtrise du pack office' : 'Mastery of the pack Office'}</li>
            <li>{language === 'fr' ? 'Logiciel CIEL' : 'Software CIEL'}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { language } = useContext(LanguageContext);
  return (
    <section className="competence">
      <h2 className="section-title">{language === 'fr' ? 'Coordonnées' : 'Contact details'}</h2>
      <div className="card-container">
        <div className="card">
          <h4>Chatenay-Malabry</h4>
          <h4>Mail : morriganegomez@gmail.com</h4>
          <h4>Tel : 06.95.42.69.46</h4>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const appRef = useRef();

  const exportToPDF = () => {
    const input = appRef.current;
    html2canvas(input, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
      })
      .catch((error) => console.error('Error generating PDF:', error));
  };

  const exportToWord = () => {
    const content = appRef.current.innerHTML;
    const converted = htmlDocx.asBlob(content);
    saveAs(converted, 'cv.docx');
  };

  return (
    <div className="App experience-page" ref={appRef}>
      <Contact />
      <Langue />
      <Experience />
      <Formation />
      <Competence />
      <div className="export-buttons">
        <button onClick={exportToPDF}>CV PDF</button>
        <button onClick={exportToWord}>CV Word</button>
      </div>
    </div>
  );
};

export default App;
