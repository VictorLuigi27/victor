import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Importer motion
import Header from "../header/Header";

export default function Projets() {
  interface Project {
    id: number;
    title: string;
    description: string;
    picture: string;
    technologies: string[];
    site: string;
    demo: string;
  }

  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/projects.json") // Chemin corrigé
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Vérifie les données dans la console
        setProjectsData(data);
      })
      .catch((error) => console.error("Erreur de chargement des projets : ", error));
  }, []);

  const closeProject = () => {
    setSelectedProject(null);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains("modal-overlay")) {
      closeProject();
    }
  };

  return (
    <div className="bg-black min-h-screen relative">
      <Header />

      <div className="flex flex-col items-center py-10">
        <p className="text-white text-4xl font-bold mb-6">Mes Projets</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {projectsData.length === 0 ? (
            <p className="text-white">Chargement des projets...</p>
          ) : (
            projectsData.map((project) => (
              <motion.div
                key={project.id}
                className="relative bg-neutral-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                initial={{ opacity: 0, y: 20 }} // Initialisation de l'animation (invisible et décalé vers le bas)
                animate={{ opacity: 1, y: 0 }} // Animation vers l'opacité normale et position initiale
                transition={{ duration: 0.5 }} // Durée de l'animation
              >
                <div className="h-[50%] flex items-center justify-center bg-neutral-700">
                  <img
                    src={project.picture}
                    alt={project.title}
                    className="w-16 h-16"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 mt-2 truncate">{project.description}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Modal avec animation d'apparition */}
      {selectedProject !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-30 modal-overlay"
          onClick={handleModalClick}
          initial={{ opacity: 0 }} // Modal initialement invisible
          animate={{ opacity: 1 }} // Le modal devient visible
          transition={{ duration: 0.5 }} // Durée de l'animation
        >
          <motion.div
            className="bg-neutral-800 text-white p-8 rounded-lg w-11/12 sm:w-9/12 md:w-7/12"
            initial={{ scale: 0.8 }} // Modal commence plus petit
            animate={{ scale: 1 }} // Modal devient sa taille normale
            transition={{ duration: 0.3 }} // Durée de l'animation du zoom
          >
            {projectsData
              .filter((project) => project.id === selectedProject)
              .map((project) => (
                <div key={project.id}>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="mt-4 text-gray-300">
                    <p>{project.description}</p>
                    <p className="text-sm mt-2">
                      <strong>Technologies : </strong>
                      {project.technologies.join(", ")}
                    </p>
                    <div className="flex space-x-4 mt-4">
                      <a
                        href={project.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:underline"
                      >
                        Site
                      </a>
                    </div>

                    <div className="mt-4">
                      <img
                        src={project.demo}
                        alt={`Démonstration de ${project.title}`}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
