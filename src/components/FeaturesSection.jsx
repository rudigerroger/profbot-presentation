import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: "📐",
      title: "Théorème de Pythagore & Thalès",
      description: "Explications pas-à-pas et exercices interactifs pour maîtriser la géométrie."
    },
    {
      icon: "🧮",
      title: "Calcul Littéral",
      description: "Apprends à développer, factoriser et résoudre des équations facilement."
    },
    {
      icon: "📊",
      title: "Statistiques & Probabilités",
      description: "Comprends les séries statistiques et calcule tes probabilités sans erreur."
    },
    {
      icon: "🎯",
      title: "Préparation Brevet",
      description: "Des annales corrigées et des quiz pour être prêt le jour J."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-header animate-fade-in-up">
        <h2>Pourquoi choisir <span className="highlight">Profbot</span> ?</h2>
        <p>Toutes les notions du programme de 3ème à portée de main.</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`feature-card glass-panel animate-fade-in-up delay-${(index + 1) * 100}`}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
