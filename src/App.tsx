import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/welcome/Welcome.tsx';
import Contact from './components/contact/Contact.tsx'; 
import Menu from './components/menu/Menu.tsx';
import Competences from './components/competences/Competences.tsx';
import { useEffect, useState } from 'react';
import Parcours from './components/parcours/Parcours.tsx';
import Profil from './components/profil/Profil.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    // Fonction pour gérer l'appui sur la touche Tab
    interface KeyPressEvent extends KeyboardEvent {
      key: string;
    }

    const handleKeyPress = (event: KeyPressEvent) => {
      if (event.key === "m" || event.key === "M") { 
      setIsMenuOpen((prevState) => !prevState); 
      }
    };
  
    // Ajouter l'événement keydown au montage du composant
    useEffect(() => {
      window.addEventListener('keydown', handleKeyPress);
      
      window.addEventListener('keydown', handleKeyPress);

      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    
  return (
    <Router>
      <div className="min-h-screen">
        {isMenuOpen && <Menu />}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/experiences-formations" element={<Parcours />} />
          <Route path="/mon-profil" element={<Profil />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

{/* <Route path="/menu" element={<Menu />} /> */}