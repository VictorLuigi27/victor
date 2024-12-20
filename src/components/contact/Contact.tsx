import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import { motion } from "framer-motion";

export default function Contact() {
  const [currentSection, setCurrentSection] = useState("reseaux");

  return (
    <div className="bg-black min-h-screen">
      {/* Header reste fixe en haut */}
      <Header />

      <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
      {/* Conteneur principal pour les sections */} 
      <div className="flex justify-center items-center mt-[18rem] lg:mt-[10rem] relative">
        {/* Wrapper des deux sections (position horizontale) */}
        <div className="relative w-[350px] h-[200px] lg:w-[800px] lg:h-[400px] bg-neutral-900 rounded-lg overflow-hidden shadow-lg flex">
          {/* Section Réseaux */}
          <div className="w-[400px] h-full flex flex-col items-center justify-center bg-neutral-900">
            <div className="flex flex-row items-center space-x-5 mb-6">
              <p className="text-white text-2xl lg:text-3xl">Réseaux</p>
              <img
                className="w-[2rem] lg:w-10 lg:h-10"
                src="/social-network.svg"
                alt="réseaux"
              />
            </div>
            <div className="flex flex-col items-center">
              <Link to="https://www.linkedin.com/in/victordiazpro/">
                <img
                  className="w-[3rem] mb-5 lg:w-[12rem]"
                  src="/linkedin.svg"
                  alt="Linkedin"
                />
              </Link>
              <p className="text-white text-xl lg:text-2xl">Linkedin</p>
            </div>
          </div>

          {/* Section Contact */}
          <div className="w-[400px] h-full flex flex-col items-center justify-center bg-neutral-900">
            <div className="flex flex-row items-center space-x-5 mb-6">
              <p className="text-white text-2xl lg:text-3xl">Contact</p>
              <img
                className="w-[2rem] lg:w-10 lg:h-10"
                src="/contact.svg"
                alt="contact"
              />
            </div>
            <div className="flex flex-col items-center">
              <Link to="mailto:victorpro66@gmail.com">
                <img
                  className="w-[3rem] lg:w-[12rem] mb-5"
                  src="/gmail-icon.svg"
                  alt="Gmail"
                />
              </Link>
              <p className="text-white text-xl lg:text-2xl">Gmail</p>
            </div>
          </div>

          {/* Carré masquant */}
          <div
            className={`absolute top-0 left-0 w-[180px] lg:w-[400px] h-full bg-neutral-900 rounded-lg transition-transform duration-500 ease-in-out ${
              currentSection === "reseaux" ? "translate-x-0" : "translate-x-[160px] lg:translate-x-[400px]"
            }`}
          ></div>
        </div>

        {/* Boutons flèches intégrés dans le rectangle */}
        <button
          className="absolute left-[1.5rem] lg:left-[calc(50%-420px)] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-sm w-12 h-12 flex justify-center items-center hover:bg-gray-800 shadow-lg"
          onClick={() => setCurrentSection("reseaux")}
          disabled={currentSection === "reseaux"}
        >
          ←
        </button>
        <button
          className="absolute right-[1.5rem] lg:right-[calc(50%-420px)] top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-sm w-12 h-12 flex justify-center items-center hover:bg-gray-800 shadow-lg"
          onClick={() => setCurrentSection("contact")}
          disabled={currentSection === "contact"}
        >
          →
        </button>
      </div>
      </motion.div>
    </div>
  );
}

// Mobile OK - Desktop OK