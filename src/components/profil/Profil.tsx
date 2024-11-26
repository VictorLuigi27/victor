import { motion } from "framer-motion";

export default function Profil() {
  return (
    <div className="bg-black min-h-screen text-white flex">
      {/* Partie gauche (photo de profil, prénom, et texte) */}
      <motion.div 
        className="w-1/2 px-10 py-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          {/* Image et prénom */}
          <div className="flex flex-row items-center gap-6 mb-8">
            <motion.img 
              className="w-[15rem] h-[15rem] rounded-full"
              src="/photo-profil.jpg" 
              alt="Photo de profil" 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h1
              className="text-white text-[7rem] font-[BurtonsDreamsPro]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Victor
            </motion.h1>
          </div>
          {/* Texte de présentation */}
          <motion.p
            className="text-white text-xl max-w-3xl mt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Passionné de jeux vidéo, je me suis lancé dans le développement web pour acquérir les bases de la programmation et orienter ma carrière vers l'informatique.
          </motion.p>    
          <motion.p
            className="text-white text-xl max-w-3xl mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Mon imagination en constante évolution me permet de nourrir de nombreuses idées et de concevoir de nouveaux projets pour l'avenir.
          </motion.p>    
        </div>
      </motion.div>

      {/* Partie droite (jeux vidéo favoris) */}
      <motion.div
        className="px-10 py-10 ml-[15rem] mt-[5rem]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-white text-4xl mb-10 text-center">Jeux vidéos favoris</h2>
        <ul className="space-y-4">
          <motion.li
            className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white text-3xl">The Last Of Us</span>
            <img 
              className="w-12 h-12"
              src="/lastof-icon.svg" 
              alt="The Last of Us" 
            />
          </motion.li>

          <motion.li
            className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-white text-3xl">Skyrim</span>
            <img 
              className="w-12 h-12"
              src="/dragon-icon.svg" 
              alt="Skyrim" 
            />
          </motion.li>

          <motion.li
            className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-white text-3xl">Alice: Madness Returns</span>
            <img 
              className="w-12 h-12"
              src="/alice-icon.svg" 
              alt="Alice: Madness Returns" 
            />
          </motion.li>

          <motion.li
            className="bg-neutral-600 rounded-md flex items-center p-4 space-x-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-white text-3xl">Mindcop</span>
            <img 
              className="w-12 h-12"
              src="/mindcop-icon.svg" 
              alt="Mindcop" 
            />
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
