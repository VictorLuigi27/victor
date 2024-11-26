import { motion } from "framer-motion";
import Header from "../header/Header";

export default function Competences() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <h1 className="text-white text-4xl text-center mt-10">Compétences</h1>

      <div className="grid grid-cols-4 gap-14 ml-[10rem] mt-[7rem]">
        
        {/* Compétences */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/html-comp.svg"
            alt="html"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/css-comp.svg"
            alt="css"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/javascript-comp.svg"
            alt="javascript"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/react-comp.svg"
            alt="react"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/mongo-comp.svg"
            alt="mongodb"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/express-comp.svg"
            alt="express"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/node-comp.svg"
            alt="node"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
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
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/figma-comp.svg"
            alt="figma"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Figma
          </span>
        </motion.div>
      </div>
    </div>
  );
}
