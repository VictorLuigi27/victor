import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9998] bg-black bg-opacity-80">
      {/* Section gauche */}
      <div className="absolute top-[46vh] left-[20vw] menu-img">
        <Link to="/experiences-formations">
          <p className="text-white text-4xl font-almendra">
            Expériences
          </p>
          <p className="text-white text-4xl font-almendra">
            Formations
          </p>
        </Link>
      </div>

      {/* Section droite */}
      <div className="absolute top-[48.5vh] right-[24vw]">
        <Link to="/projets">
          <p className="text-white text-4xl font-almendra menu-img">
            Projets
          </p>
        </Link>
      </div>

      {/* Section bas-gauche */}
      <div className="absolute top-[11vh] left-[44vw]">
        <Link to="/competences">
          <p className="text-white text-4xl font-almendra menu-img">
            Compétences
          </p>
        </Link>
      </div>

      {/* Section bas-droite */}
      <div className="absolute top-[85vh] left-[46.2vw]">
        <Link to="/contact">
          <p className="text-white text-4xl font-almendra menu-img">
            Contact
          </p>
        </Link>
      </div>

      {/* Image centrale */}
      <img
        className="absolute items-center justify-center mx-auto w-[35rem] top-[28rem] left-[35rem] transform -translate-y-1/2"
        src="/menu.svg"
        alt="modal-menu"
      />
    </div>
  );
}