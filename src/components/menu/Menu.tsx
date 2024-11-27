import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Import de l'icône croix

interface MenuProps {
  onClose: () => void; // Fonction pour fermer le menu
}

export default function Menu({ onClose }: MenuProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9998] bg-black bg-opacity-80">
      {/* Bouton de fermeture */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-3 text-white bg-transparent border-none cursor-pointer z-50"
      >
        <FaTimes className="text-3xl" />
      </button>

      {/* Menu principal */}
      <div className="relative flex flex-col justify-center items-center h-full">

        {/* Section Expériences / Formations (gauche) */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 lg:ml-48">
          <Link to="/experiences-formations">
            <p className="text-white text-sm lg:text-4xl font-almendra">
              Expériences
            </p>
          </Link>
          <Link to="/experiences-formations">
            <p className="text-white text-sm lg:text-4xl font-almendra">
              Formations
            </p>
          </Link>
        </div>

        {/* Image centrale */}
        <img
          className="absolute w-[15rem] lg:w-[35rem] top-1/2 transform -translate-y-1/2"
          src="/menu.svg"
          alt="modal-menu"
        />

        {/* Section Projets (droite) */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 lg:mr-60">
          <Link to="/projets">
            <p className="text-white text-sm lg:text-4xl font-almendra">
              Projets
            </p>
          </Link>
        </div>

        {/* Section Compétences (haut) */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-4 mt-72 lg:mt-12">
          <Link to="/competences">
            <p className="text-white text-sm lg:text-4xl font-almendra">
              Compétences
            </p>
          </Link>
        </div>

        {/* Section Contact (bas) */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 mb-72 lg:mb-12">
          <Link to="/contact">
            <p className="text-white text-sm lg:text-4xl font-almendra">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Mobile OK - Desktop OK