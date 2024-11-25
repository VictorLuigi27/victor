import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen">
      {/* Le Header reste en haut, sans changer sa position */}
      <Header />

      {/* Conteneur principal pour la partie réseaux */}
      <div className="flex justify-center items-center mt-[10rem]">
        {/* Carré centré avec padding et arrondi */}
        <div className="bg-neutral-900 p-10 rounded-lg w-[400px] h-[400px] flex flex-col items-center justify-between">
          
          {/* Section Réseaux avec l'icône et le texte en ligne */}
          <div className="flex flex-row items-center space-x-5 mb-6">
            <p className="text-white text-2xl">Réseaux</p>
            <img 
              className="w-10 h-10"
              src="/public/social-network.svg"
              alt="réseaux"
            />
          </div>

          {/* Section avec le lien vers LinkedIn */}
          <div className="flex flex-col items-center">
            <Link to="https://www.linkedin.com/in/victordiazpro/">
              <img 
                className="w-16 h-16 mb-3"
                src="/public/linkedin.svg" 
                alt="Linkedin"
              />
            </Link>
            <p className="text-white text-lg">Linkedin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

