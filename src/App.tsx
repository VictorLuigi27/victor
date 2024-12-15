import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome.tsx';
import Contact from './components/contact/Contact.tsx'; 
import Menu from './components/menu/Menu.tsx';
import Competences from './components/competences/Competences.tsx';
import Parcours from './components/parcours/Parcours.tsx';
import Profil from './components/profil/Profil.tsx';
import Projets from './components/projets/Projets.tsx';
import { FaPlay, FaPause, FaBars } from "react-icons/fa";
import Mentions from './components/mentions/Mentions.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [audioPaused, setAudioPaused] = useState(true);

  // Fonction pour gérer l'appui sur la touche "M"
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "m" || event.key === "M") {
      setIsMenuOpen((prevState) => !prevState);
    }
  };

  const handlePlayPauseMusic = () => {
    if (audioPaused) {
      setAudioPlayed(true);
      setAudioPaused(false);
    } else {
      setAudioPlayed(false);
      setAudioPaused(true);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">

        {/* Bouton de lecture / pause */}
        <button 
          onClick={handlePlayPauseMusic} 
          className="fixed bottom-[2vh] left-[39vh] lg:left-[5vh] lg:bottom-[5vh] p-3 lg:p-5 bg-gray-800 text-white rounded-full z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg transform hover:rotate-[15deg]"
        >
          {audioPaused ? (
            <FaPlay className="text-2xl" />
          ) : (
            <FaPause className="text-2xl" />
          )}
        </button>

        {/* Musique de fond */}
        {audioPlayed && (
          <audio autoPlay loop>
            <source src="/music/ClaudeDebussy.mp3" type="audio/mp3" />
            Votre navigateur ne prend pas en charge les éléments audio.
          </audio>
        )}

        {/* Bouton pour ouvrir le menu sur mobile */}
        <button 
          onClick={handleMenuToggle}
          className="fixed top-5 left-5 lg:hidden p-3 bg-gray-800 text-white rounded-full z-50 flex items-center justify-center"
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Menu (affiché seulement si `isMenuOpen` est vrai) */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 fade-in">
            <Menu onClose={handleMenuToggle} /> {/* Ajout de la prop onClose ici */}
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences-formations" element={<Parcours />} />
          <Route path="/mon-profil" element={<Profil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/mentions-legales" element={<Mentions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

