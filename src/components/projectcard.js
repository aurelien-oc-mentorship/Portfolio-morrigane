import React, { useEffect, useState, useRef } from 'react';
import Chart from 'chart.js/auto';
import githubIcon from '../assets/Github-desktop-logo-symbol.svg.png';

function ProjectCard({ title, category, showCategory, image, githubLink, language }) {
  const [languages, setLanguages] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [isGithubVisible, setIsGithubVisible] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      fetch(`https://api.github.com/repos/Teen-raven/${title}/languages`)
        .then(response => response.json())
        .then(data => {
          const totalLines = Object.values(data).reduce((acc, cur) => acc + cur, 0);
          const languagePercentages = Object.entries(data).map(([language, lines]) => ({
            language,
            percentage: ((lines / totalLines) * 100).toFixed(1)
          }));
          setLanguages(languagePercentages);
        })
        .catch(error => console.error('Error fetching data from GitHub API:', error));
    }
  }, [isExpanded, title]);

  useEffect(() => {
    if (chartRef.current && isExpanded) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: languages.map(({ language }) => language),
          datasets: [{
            data: languages.map(({ percentage }) => percentage),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#8A2BE2', '#FFA500'],
          }]
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          }
        }
      });
    }
  }, [languages, isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    setIsGithubVisible(!isExpanded);
  };

  return (
    <div className="project-card" style={{ position: 'relative', width: '200px', height: isExpanded ? 'auto' : '300px', maxHeight: '400px', margin: '10px', overflow: 'hidden', border: '2px solid black', background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
      <h3 onClick={toggleExpand} style={{ cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '10px', textAlign: 'center', flexShrink: 0 }}>
        {title} {isExpanded ? '▲' : '▼'}
      </h3>
      {showCategory && (
        <p style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', padding: '5px', textAlign: 'center', flexShrink: 0 }}>
          {language === 'fr' ? 'Catégorie' : 'Category'}: {category}
        </p>
      )}
      {isExpanded && (
        <canvas
          ref={chartRef}
          style={{ width: '100%', height: '150px', flex: 1 }}
        ></canvas>
      )}
      <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', bottom: '10px', right: '10px', display: isGithubVisible ? 'block' : 'none' }}>
        <img src={githubIcon} alt="GitHub" style={{ width: '96%', height: 'auto' }} />
      </a>
    </div>
  );
}

export default ProjectCard;
