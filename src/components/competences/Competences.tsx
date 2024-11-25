import Header from "../header/Header";

export default function Competences() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <h1 className="text-white text-4xl text-center mt-10">Compétences</h1>

      <div className="grid grid-cols-4 gap-14 ml-[10rem] mt-[7rem]">
        
        {/* Compétences */}
        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/html-comp.svg"
            alt="html"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            HTML
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/css-comp.svg"
            alt="css"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            CSS
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/javascript-comp.svg"
            alt="javascript"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            JavaScript
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/react-comp.svg"
            alt="react"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            React
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/mongo-comp.svg"
            alt="mongodb"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            MongoDB
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/express-comp.svg"
            alt="express"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Express
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/node-comp.svg"
            alt="node"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Node.js
          </span>
        </div>

        <div className="relative group">
          <img
            className="w-[10rem] h-[10rem] transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-15px]"
            src="/public/figma-comp.svg"
            alt="figma"
          />
          <span className="absolute left-20 bottom-[-1.5rem] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl transform -translate-x-1/2 text-center">
            Figma
          </span>
        </div>

      </div>
    </div>
  );
}
