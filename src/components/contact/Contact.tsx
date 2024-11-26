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
            <p className="text-white text-3xl">Réseaux</p>
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
                className="w-22 h-22 mb-5"
                src="/public/linkedin.svg" 
                alt="Linkedin"
              />
            </Link>
            <p className="text-white text-2xl">Linkedin</p>
          </div>
        </div>
      </div>

    <div className="flex justify-center items-center mt-[10rem]">
        <div className="bg-neutral-900 p-10 rounded-lg w-[400px] h-[400px] flex flex-col items-center justify-between">
            <div className="flex flex-row items-center space-x-5 mb-6">
                <p className="text-white text-3xl">Contact</p>
                <img 
                  className="w-10 h-10"
                  src="/public/contact.svg"
                  alt="contact"
                />
            </div>

            <div className="flex flex-col items-center">
              <Link to="https://www.linkedin.com/in/victordiazpro/">
                <img 
                  className="w-[12rem] mb-5"
                  src="/public/gmail-icon.svg" 
                  alt="Gmail"
                />
              </Link>
              <p className="text-white text-2xl">Gmail</p>
            </div>
        </div>
      </div>
    </div>
  );
}