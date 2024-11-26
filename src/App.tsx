import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome.tsx';
import Contact from './components/contact/Contact.tsx'; 
import Menu from './components/menu/Menu.tsx';
import Competences from './components/competences/Competences.tsx';
import Parcours from './components/parcours/Parcours.tsx';
import Profil from './components/profil/Profil.tsx';
import Projets from './components/projets/Projets.tsx';

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

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        {/* Bouton pour démarrer ou mettre en pause la musique, positionné en bas à gauche */}
        <button 
          onClick={handlePlayPauseMusic} 
          className="fixed bottom-4 left-4 p-4 bg-gray-500 text-white rounded z-50"
        >
          {audioPaused ? "Play Music" : "Pause Music"}
        </button>

        {/* Ajouter un lecteur audio pour la musique de fond, seulement après le clic */}
        {audioPlayed && (
          <audio autoPlay loop>
            <source src="/music/ClaudeDebussy.mp3" type="audio/mp3" />
            Votre navigateur ne prend pas en charge les éléments audio.
          </audio>
        )}

        {/* Menu avec effet fade-in */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 fade-in">
            <Menu />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences-formations" element={<Parcours />} />
          <Route path="/mon-profil" element={<Profil />} />
          <Route path="/projets" element={<Projets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

