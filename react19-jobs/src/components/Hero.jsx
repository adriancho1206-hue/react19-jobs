import React from 'react'

const Hero = ({titulo="Conviertete en un desarrollador de React", 
    subtitulo="Encuentra el trabajo de React que se adapte a tus habilidades y necesidades"})=> {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
     <div
     className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
            <h1
                className="text-4x1 font-extrabold text-white sm:text-5x1 md:text-6x1"
                >
                {titulo}
                </h1> 
                <p className="my-4 text-x1 text-white">
                    {subtitulo}
                </p>
                </div>
                </div>

    </section>
  )    
}
  



export default Hero
