import React from 'react';
import background from './background5.webp'
import man from './man1.png'
import './index.css'

function Hero() {
  return (
    <div className="relative text-white bg-black  w-1/2 h-96">
      <img src={background} alt="background" className="background w-full h- object-cover" />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center p-0">
        <div className="flex-1 w-1/2"> 
          <img src={man} alt="Man" className="man w-full h-auto ml-[-2rem]" />
        </div>
        <div className="flex-1 text-center"> 
          <h1 className="flex-1 text-3d">Evolve your training</h1>
        
        </div>

      </div>
    </div>
  );
}

export default Hero;