import React from 'react';
import logo from "../assets/djezzy.png";


function Hero() {
 function GotoLogin(){
     window.location.href='/login'
 }

    return (
        <div className="text-black w-full h-screen bg-zinc-200 flex flex-col justify-between">
        <div className='grid md:grid-cols-2 max-w[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 mr-10'>
              <h1 className='font-bold text-7xl md:text-7xl' >BIENVENUE</h1>
              <p className='py-3 font-bold text-xl'>Veuillez vous connecter pour commencer </p>
              <button  onClick={GotoLogin} className='px-6 text-white border bg-red-600 border-red-600
        hover:bg-red-800  rounded-md py-3 sm:w-[60%] my-4' >SE CONNECTER</button>
          </div>
            <div>
                <img
                    className=" w-80 ml-10"
                    src={logo}
                    alt="djeezy logo"
                />
            </div>
        </div>
        </div>
    );
}

export default Hero;
