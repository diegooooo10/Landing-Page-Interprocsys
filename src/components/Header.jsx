import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';


const Header = () => {
  return (
    <header className="bg-sky-900 text-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <img
            src="image.png" 
            alt="Logo"
            className="h-12 w-12 mr-2"
          />
          <h2 className="text-2xl font-bold">INTERPROCSYS</h2>
        </div>
        
        <nav>
        
          <ul className="flex space-x-4">
            
            <li>
              <a href="#servicio" className='hover:text-white transition duration-300'>servicio</a>
            </li>
            <li>
              <a href="#empresa" className='hover:text-white  transition duration-300'>empresa</a>
            </li>
            <li>
              <a href="#entrevista" className="hover:text-white  transition duration-300">entrevista</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-center h-screen">
        
      <h1 className="text-center text-4xl"> 
        <span className="text-blue-500">Expertos</span> {' '}
        <span className="text-blue-600">en</span> {' '}
        <span className="text-blue-700">Tecnologia</span> {' '}
        <span className="text-sky-500">4.0</span> {' '}
        <span className="text-cyan-500">y Blockshop</span>
        </h1>
        <a 
            href="#contacto" 
            className="bg-blue-500 text-white py-2 px-4 rounded ml-4 hover:bg-blue-600 transition duration-300"
          >
            Contáctanos
          </a>
       
      </div>  

    </header>
  );
};

export default Header;
