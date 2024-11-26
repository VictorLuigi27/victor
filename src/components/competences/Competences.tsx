import { motion } from "framer-motion";
import Header from "../header/Header";

export default function Competences() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <h1 className="text-white text-3xl text-center mt-5 lg:mt-10 lg:text-4xl">Compétences</h1>

      <div className="grid grid-cols-2 gap-4 ml-[3.8rem] mt-[2rem] lg:grid lg:grid-cols-4 lg:gap-12 lg:ml-[10rem] lg:mt-[7rem]">
        
        {/* Compétences */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/html-comp.svg"
            alt="html"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            HTML
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/css-comp.svg"
            alt="css"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            CSS
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/javascript-comp.svg"
            alt="javascript"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            JavaScript
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/react-comp.svg"
            alt="react"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            React
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/mongo-comp.svg"
            alt="mongodb"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            MongoDB
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/express-comp.svg"
            alt="express"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Express
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/node-comp.svg"
            alt="node"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Node.js
          </span>
        </motion.div>

        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <img
            className="w-[7rem] h-[10rem] lg:w-[10rem] lg:h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/figma-comp.svg"
            alt="figma"
          />
          <span className="absolute left-[3.5rem] bottom-[0rem] lg:bottom-[-1.5rem] lg:left-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Figma
          </span>
        </motion.div>
      </div>
    </div>
  );
}

// Mobile OK - Desktop OK