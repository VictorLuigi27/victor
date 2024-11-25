export default function Profil() {
    return (
      <div className="bg-black min-h-screen text-white flex">
        {/* Partie gauche (photo de profil, prénom, et texte) */}
        <div className="w-1/2 px-10 py-10">
          <div className="flex flex-col items-center">
            {/* Image et prénom */}
            <div className="flex flex-row items-center gap-6 mb-8">
              <img 
                className="w-[15rem] h-[15rem] rounded-full"
                src="/public/photo-profil.jpg" 
                alt="Photo de profil" 
              />
              <h1 className="text-white text-[7rem] font-[BurtonsDreamsPro]">Victor</h1>
            </div>
            {/* Texte de présentation */}
            <p className="text-white text-xl max-w-3xl mt-28">
              Passionné de jeux vidéo, je me suis lancé dans le développement web pour acquérir les bases de la programmation et orienter ma carrière vers l'informatique.
            </p>    
            <p className="text-white text-xl max-w-3xl mt-10">
              Mon imagination en constante évolution me permet de nourrir de nombreuses idées et de concevoir de nouveaux projets pour l'avenir.
            </p>    
          </div>
        </div>
  
        {/* Partie droite (jeux vidéo favoris) */}
        <div className="px-10 py-10 ml-[15rem] mt-[5rem]">
          <h2 className="text-white text-4xl mb-10 text-center">Jeux vidéos favoris</h2>
          <ul className="space-y-4">
            <li className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10">
              <span className="text-white text-3xl">The Last Of Us</span>
              <img 
                className="w-12 h-12"
                src="/public/lastof-icon.svg" 
                alt="The Last of Us" 
              />
            </li>

            <li className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10">
              <span className="text-white text-3xl">Skyrim</span>
              <img 
                className="w-12 h-12"
                src="/public/dragon-icon.svg" 
                alt="The Last of Us" 
              />
            </li>

            <li className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10">
              <span className="text-white text-3xl">Alice: Madness Returns</span>
              <img 
                className="w-12 h-12"
                src="/public/alice-icon.svg" 
                alt="The Last of Us" 
              />
            </li>

            <li className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10">
              <span className="text-white text-3xl">Mindcop</span>
              <img 
                className="w-12 h-12"
                src="/public/mindcop-icon.svg" 
                alt="The Last of Us" 
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
  