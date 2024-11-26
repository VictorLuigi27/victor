import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

export default function Contact() {
  const [currentSection, setCurrentSection] = useState("reseaux");

  return (
    <div className="bg-black min-h-screen">
      {/* Header reste fixe en haut */}
      <Header />

      {/* Conteneur principal pour les sections */} 
      <div className="flex justify-center items-center mt-[10rem] relative">
        {/* Wrapper des deux sections (position horizontale) */}
        <div className="relative w-[800px] h-[400px] bg-neutral-900 rounded-lg overflow-hidden shadow-lg flex">
          {/* Section Réseaux */}
          <div className="w-[400px] h-full flex flex-col items-center justify-center bg-neutral-900">
            <div className="flex flex-row items-center space-x-5 mb-6">
              <p className="text-white text-3xl">Réseaux</p>
              <img
                className="w-10 h-10"
                src="/public/social-network.svg"
                alt="réseaux"
              />
            </div>
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

          {/* Section Contact */}
          <div className="w-[400px] h-full flex flex-col items-center justify-center bg-neutral-900">
            <div className="flex flex-row items-center space-x-5 mb-6">
              <p className="text-white text-3xl">Contact</p>
              <img
                className="w-10 h-10"
                src="/public/contact.svg"
                alt="contact"
              />
            </div>
            <div className="flex flex-col items-center">
              <Link to="mailto:victorpro66@gmail.com">
                <img
                  className="w-[12rem] mb-5"
                  src="/public/gmail-icon.svg"
                  alt="Gmail"
                />
              </Link>
              <p className="text-white text-2xl">Gmail</p>
            </div>
          </div>

          {/* Carré masquant */}
          <div
            className={`absolute top-0 left-0 w-[400px] h-full bg-neutral-900 rounded-lg transition-transform duration-500 ease-in-out ${
              currentSection === "reseaux" ? "translate-x-0" : "translate-x-[400px]"
            }`}
          ></div>
        </div>

        {/* Boutons flèches intégrés dans le rectangle */}
        <button
          className="absolute left-[calc(50%-420px)] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-sm w-12 h-12 flex justify-center items-center hover:bg-gray-800 shadow-lg"
          onClick={() => setCurrentSection("reseaux")}
          disabled={currentSection === "reseaux"}
        >
          ←
        </button>
        <button
          className="absolute right-[calc(50%-420px)] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-sm w-12 h-12 flex justify-center items-center hover:bg-gray-800 shadow-lg"
          onClick={() => setCurrentSection("contact")}
          disabled={currentSection === "contact"}
        >
          →
        </button>
      </div>
    </div>
  );
}


