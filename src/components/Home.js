import React, { useContext, useState } from 'react';
import { LanguageContext } from './languagecontext';
import ProjectCard from './projectcard'; // Assurez-vous que le chemin est correct
import ContactForm from './ContactForm'; // Importez le nouveau composant
import nina from '../assets/nina.png';
import ohmyfood from '../assets/ohmyfood.png';
import argentbank from '../assets/argentbank.png';
import kasa from '../assets/Kasa.png';

function Home() {
  const { language } = useContext(LanguageContext);

  // Liste de tous les projets avec leurs catégories et images
  const projects = [
    { title: 'ninacarduci.github.io', category: 'React', image: nina, githubLink: 'https://github.com/Teen-raven/ninacarduci.github.io' },
    { title: 'Ohmyfoode', category: 'React', image: ohmyfood, githubLink: 'https://github.com/Teen-raven/Ohmyfoode' },
    { title: 'ArgentBank-website', category: 'React', image: argentbank, githubLink: 'https://github.com/Teen-raven/ArgentBank-website' },
    { title: 'kasa-24052024', category: 'React', image: kasa, githubLink: 'https://github.com/Teen-raven/kasa-24052024' },
  ];
  

  // État pour stocker la catégorie sélectionnée
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Fonction de filtrage des projets par catégorie
  const filteredProjects = selectedCategory === 'all' ? projects : projects.filter(project => project.category === selectedCategory);

  // Fonction pour mettre à jour la catégorie sélectionnée
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Fonction pour calculer l'âge
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const birthDate = '1997-10-10'; // Remplacez par votre date de naissance
  const age = calculateAge(birthDate);

  return (
    <div className="App">
      <main>
        <section id="introduction">
          <article>
            <h2>{language === 'fr' ? 'Présentation' : 'Introduction'}</h2>
            <p>{language === 'fr' 
              ? `Développeuse passionnée dans le domaine du web depuis le lycée, actuellement étudiante en intégration web et j'ai ${age} ans.` 
              : `Passionate web developer since high school, currently a web integration student and I have ${age} years old.`}</p>
            <p>{language === 'fr' ? 'Je conçois et réalise des sites web du cahier des charges à la mise en ligne.' : 'I design and build websites from specifications to launch.'}</p>
            <p>{language === 'fr' ? "J'ai quelques projets intéressants à voir." : 'I have some interesting projects to show.'}</p>
          </article>
        </section>
        
        <p className="gallery-heading">{language === 'fr' ? 'Mes travaux' : 'My works'}</p>
   
        {/* Section des filtres */}
        <div id="filterContainer">
          <button className="filter-button" onClick={() => handleCategoryChange('all')}>{language === 'fr' ? 'Tous' : 'All'}</button>
          <button className="filter-button" onClick={() => handleCategoryChange('Gestion de projet')}>{language === 'fr' ? 'Gestion de projet' : 'Project management'}</button>
          <button className="filter-button" onClick={() => handleCategoryChange('Javascript')}>Javascript</button>
          <button className="filter-button" onClick={() => handleCategoryChange('React')}>React</button>
        </div>
 
        <ul className="project-grid">
          {/* Afficher les projets filtrés */}
          {filteredProjects.map((project, index) => (
            <li key={index}>
              <ProjectCard title={project.title} category={project.category} showCategory={selectedCategory === 'all'} image={project.image} githubLink={project.githubLink} language={language} />
            </li>
          ))}
        </ul>
        <section id="contact">
          <h2>{language === 'fr' ? 'Contact' : 'Contact'}</h2>
          <p>{language === 'fr' ? 'Vous avez un projet ? Discutons-en !' : 'Do you have a project? Let’s discuss it!'}</p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default Home;
