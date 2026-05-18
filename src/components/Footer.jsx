import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">Profbot</span>
          </div>
          <p>L'assistant intelligent qui rend les mathématiques en 3ème accessibles et amusantes.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Ressources</h4>
            <a href="#">Cours de Maths</a>
            <a href="#">Annales Brevet</a>
            <a href="#">Exercices</a>
          </div>
          <div className="link-group">
            <h4>Légal</h4>
            <a href="#">Conditions d'utilisation</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Profbot. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
