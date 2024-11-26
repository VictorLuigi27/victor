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

      {/* Section gauche */}
      <div className="absolute top-[49.3vh] left-[3.5vw] lg:top-[46vh] lg:left-[20vw] menu-img">
        <Link to="/experiences-formations">
          <p className="text-white text-sm lg:text-4xl font-almendra">
            Expériences
          </p>
          <p className="text-white text-sm lg:text-4xl font-almendra">
            Formations
          </p>
        </Link>
      </div>

      {/* Section droite */}
      <div className="absolute top-[50.4vh] right-[3.5vw] lg:top-[48.5vh] lg:right-[24vw]">
        <Link to="/projets">
          <p className="text-white text-sm lg:text-4xl font-almendra menu-img">
            Projets
          </p>
        </Link>
      </div>

      {/* Section bas-gauche */}
      <div className="absolute top-[35vh] left-[44vw] lg:top-[11vh] lg:left-[44vw]">
        <Link to="/competences">
          <p className="text-white text-sm lg:text-4xl font-almendra menu-img">
            Compétences
          </p>
        </Link>
      </div>

      {/* Section bas-droite */}
      <div className="absolute top-[66vh] left-[47vw] lg:top-[85vh] lg:left-[46.2vw]">
        <Link to="/contact">
          <p className="text-white text-sm lg:text-4xl font-almendra menu-img">
            Contact
          </p>
        </Link>
      </div>

      {/* Image centrale */}
      <img
        className="absolute items-center justify-center mx-auto w-[15rem] lg:w-[35rem] top-[30rem] lg:top-[28rem] left-[6.7rem] lg:left-[35rem] transform -translate-y-1/2"
        src="/menu.svg"
        alt="modal-menu"
      />
    </div>
  );
}


// Mobile OK - Desktop OK