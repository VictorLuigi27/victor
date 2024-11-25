import { Link } from "react-router-dom";

export default function Menu() {
    return (
      <div className="bg-black min-h-screen no-scroll">
          {/* Le reste du contenu */}
          <div className="flex items-center justify-between relative">

              <div 
                className="relative menu-img"
                style={{ position: 'relative', top: '44.5vh', left: '20vw' }}
              >
                <Link to='/experiences'>
                    <p className="text-white text-4xl font-almendra">
                        Expériences
                    </p>
                </Link>
                <Link to='/formations'>
                    <p className="text-white text-4xl font-almendra">
                        Formations
                    </p>
                </Link>
              </div>
        
                <Link to='/projets'>
                    <p className="text-white text-4xl font-almendra menu-img" style={{ position: 'relative', top: '44.5vh', right: '24vw' }}>
                        Projets
                    </p>
                </Link>

          </div>
  
          {/* space between */}
          <div className="relative">

            <Link to='/competences'>
                <p className="text-white text-4xl font-almendra menu-img" style={{ position: 'relative', left: '44vw' }}>
                    Compétences
                </p>
            </Link>
              
            <Link to='/contact'>
                <p className="text-white text-4xl font-almendra menu-img" style={{ position: 'relative', top: '70vh', left: '46.2vw' }}>
                    Contact
                </p>
            </Link>
              
          </div>
          
          <img 
            className="items-center justify-center mx-auto w-[35rem]"
            src="./public/menu.svg" 
            alt="modal-menu" 
          />
      </div>
    );
  }
  
  