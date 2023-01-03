import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll';

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "inicio",
    },
    {
      id: 2,
      link: "trabajos",
    },
    {
      id: 3,
      link: "contacto",
    }
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-stone-50 fixed bg-red-400 px-4">
      <div>
      <h1 className='text-5xl font-signature ml-2 hidden md:flex'>Bordados La Casita</h1>
            <h1 className='text-5xl font-signature ml-2 md:hidden'>Bordados</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
        <li key={id} className="px-4 cursor-pointer capitalize font-medium text-stone-50 hover:scale-105 duration-150"><Link to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-stone-50 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav &&(
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-red-400 to-stone-200 text-white">
      {links.map(({ id, link }) => (
        <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-150"><Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default NavBar;