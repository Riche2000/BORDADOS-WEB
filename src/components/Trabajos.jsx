import React from 'react'
import imagen1 from '../components/Imagenes/Imagen1.png'
import imagen2 from '../components/Imagenes/Imagen2.png'
import imagen3 from '../components/Imagenes/Imagen3.png'

 

const Trabajos = () => {

    const portfolios = 
    [
        {
          id: 1,
          src: imagen1,
        },
        {
          id: 2,
          src: imagen2,
        },
        {
          id: 3,
          src: imagen3,
        }
        
    ];

  return (
    <div name='trabajos' className='pt-24 pb-24 bg-gradient-to-b from-red-200 via-red to-red-400 w-full text-stone-50 md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Trabajos</p>
                <p className='py-6'>Podemos hacer los bordados para tu negocio, uniformes o regalos.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({ id, src }) => (
            <div key={id}>
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
            </div>
          ))}
        </div>  
        </div>
    </div>
  )
}

export default Trabajos