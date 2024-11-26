// src/components/Welcome.jsx
function Welcome() {
    return (
      <div className="bg-black text-center py-[20vh] lg:p-[15rem] min-h-screen">
        <h1 className="text-4xl lg:text-6xl text-white">Bienvenue sur mon portfolio</h1>
        <h2 className="text-xl lg:text-4xl text-white mt-[10rem] blink hidden lg:block">Pour afficher le menu appuyer sur la touche M</h2>
        <p className="text-xl lg:text-4xl text-white mt-[10rem] blink block lg:hidden">Pour afficher le menu appuyer sur le bouton</p>
      </div>
    );
  }
  
export default Welcome;

// Mobile OK - Desktop OK pas fini