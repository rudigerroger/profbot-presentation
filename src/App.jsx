import './App.css';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar animate-fade-in-up">
        <div className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">Profbot</span>
        </div>
        <div className="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#demo" className="btn-primary-small">Essayer</a>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ChatDemo />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
