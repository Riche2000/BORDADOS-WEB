import React from 'react'
import Bordados from '../assets/Bordados.png'
import {RxDoubleArrowRight} from 'react-icons/rx'
import {Link} from 'react-scroll'

const Inicio = () => {
  return (
    <div name='inicio' className='h-screen w-full bg-gradient-to-b from-red-400 via-red to-red-200 pt-24 pb-24'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-stone-50'>
                    Bordados La Casita.
                </h2>
                <p className='text-stone-100 py-4 max-w-md'>Hacemos cualquier tipo de bordado personalizado para playeras, camisas, sudaderas, suertes y gorras con las mejores prácticas.</p>
                <div>
                <Link to='contacto' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-orange-400 cursor-pointer">
                        Contáctanos 
                        <span className="group-hover:rotate-90 duration-300">
                        <RxDoubleArrowRight size={20} className="ml-1"/>
                        </span>
                </Link>
                </div>
            </div>
            <div className=''>
                <img src={Bordados} alt="my logo" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Inicio