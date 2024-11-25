import { useState } from "react";
import Header from "../header/Header";

export default function Parcours() {
  // Utilisation d'un état pour gérer quelle section est visible
  const [activeSection, setActiveSection] = useState<"formations" | "experiences" | null>(null);

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      {/* Titre général */}
      <div className="flex flex-col items-center py-10">
        <p className="text-white text-4xl font-bold">Mon Parcours</p>
      </div>

      {/* 2 SECTIONS */}
      <div className="flex flex-row justify-center py-5 space-x-10">
        {/* Clic sur "Formations" pour afficher ou cacher cette section */}
        <p
          onClick={() => setActiveSection(activeSection === "formations" ? null : "formations")}
          className="text-white text-2xl font-semibold hover:text-indigo-500 cursor-pointer transition duration-300"
        >
          Formations
        </p>
        {/* Clic sur "Expériences" pour afficher ou cacher cette section */}
        <p
          onClick={() => setActiveSection(activeSection === "experiences" ? null : "experiences")}
          className="text-white text-2xl font-semibold hover:text-indigo-500 cursor-pointer transition duration-300"
        >
          Expériences
        </p>
      </div>

      {/* FORMATIONS */}
      {activeSection === "formations" && (
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-semibold mb-5">Formations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Titre professionnel de Développeur web et web mobile</h3>
              <p>O’Clock - Full remote | Janvier à Juillet 2024</p>
              <p className="mt-2">Technologies front-end : HTML, CSS, JavaScript, ReactJs</p>
              <p>Technologie back-end : PHP</p>
              <p>Base de données : MySQL</p>
              <p>Système de gestion de versions : Git</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Développeur web et web mobile</h3>
              <p>StartWorkUp - Full remote | Novembre 2024 – 2025</p>
              <p className="mt-2">Technologies front-end : ReactJs</p>
              <p>Technologie back-end : **</p>
              <p>Base de données : **</p>
              <p>Système de gestion de versions : Git</p>
            </div>
          </div>
        </div>
      )}

      {/* EXPERIENCES */}
      {activeSection === "experiences" && (
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-semibold mb-5">Expériences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Alternance de Développeur web et web mobile</h3>
              <p>KGIC - Full remote | Novembre 2024 – 2025</p>
              <p className="mt-2">Technologies front-end : ReactJs, Tailwind</p>
              <p>Technologie back-end : NodeJS, ExpressJS</p>
              <p>Base de données : MongoDB</p>
              <p>Système de gestion de versions : Git</p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3">Stage en développement web</h3>
              <p>LoluWeb | Juillet à Octobre 2024</p>
              <p className="mt-2">Utilisation de NextJs et Prisma</p>
              <p>Création d'une maquette web</p>
              <p>Développement d’un site web</p>
              <p>Développement d’une base de données</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}