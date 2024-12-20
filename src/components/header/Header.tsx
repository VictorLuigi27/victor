import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-zinc-900 flex flex-row space-x-[11vh] items-center justify-center py-3 lg:py-5 lg:space-x-[70vh]">
      
      <img 
        className="w-[3rem] lg:w-20 lg:h-20"
        src="/logoPunk.svg" 
        alt="Logo Site" 
      />

      <h1 className="text-white text-4xl lg:text-6xl BurtonsDreamsPro">Victor</h1>

      <Link to='/mon-profil' className="relative group"> {/* Ajout de 'group' ici */}
        {/* L'image */}
        <img
          className="w-[3rem] lg:w-20 lg:h-20"
          src="/logoProfil.svg"
          alt="Profil"
        />
        
        {/* Texte qui apparaît au survol de l'image */}
        <span className="absolute left-0 -bottom-8 text-white text-xl BurtonsDreamsPro opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Mon profil
        </span>
      </Link>
      
    </div>
  );
}

// Mobile OK - Desktop OK