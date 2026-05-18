import React from 'react';
import './HeroSection.css';
import mascotImage from '../assets/profbot-mascot.png';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content animate-fade-in-up delay-100">
        <div className="badge">Nouveau 🚀</div>
        <h1 className="hero-title">
          Réviser les <span className="highlight">Maths</span> n'a jamais été aussi simple.
        </h1>
        <p className="hero-subtitle">
          Profbot est l'assistant intelligent spécialement conçu pour les élèves de 3ème. 
          Révise tes cours, entraîne-toi sur des exercices interactifs, et prépare le Brevet sans stress !
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Ajouter Profbot</button>
          <button className="btn-secondary">Découvrir les fonctionnalités</button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">+500</span>
            <span className="stat-label">Exercices de 3ème</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Disponibilité</span>
          </div>
        </div>
      </div>
      <div className="hero-visual animate-fade-in-up delay-200">
        <div className="image-container">
          <div className="glow-effect"></div>
          <img src={mascotImage} alt="Profbot Mascot" className="mascot-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
