import React from "react";

const Contacto = () => {
  return (
    <div name="contacto" className="w-full h-full pt-24 pb-24 bg-gradient-to-b from-red-400 via-red to-red-200 text-stone-100">
      <div className="flex flex-col my-auto p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-500">Contacto</p>
          <p className="py-6">Sube el siguiente formulario para ponernos en contacto</p>
        </div>
        <div className=" flex justify-center items-center">
          <form action="https://getform.io/f/a3450f22-4256-4399-a9cf-f73f949092ec" method="POST" className=" flex flex-col w-full md:w-1/2">
            <input type="text" name="name" placeholder="Ingresa tu nombre" className="p-2 border-2 rounded-md text-black focus:outline-none"/>
            <input type="text" name="email" placeholder="Ingresa tu email" className="my-4 p-2 border-2 rounded-md text-black focus:outline-none"/>
            <textarea name="message" placeholder="Ingresa tu mensaje" rows="10" className="p-2 border-2 rounded-md text-black focus:outline-none"></textarea>
            <button className="text-stone-100 bg-gradient-to-b from-red-500 to-orange-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto