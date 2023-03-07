import React from "react";
import logo from "../assets/djezzy.png";

function Hero() {
  function GotoLogin() {
    window.location.href = "/login";
  }

  function GotoRegister() {
    window.location.href = "/register";
  }

  return (
    <div className="text-black w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center items-center bg-red-400 py-20 m-auto w-full">
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-8 mr-10">
          <h1 className="font-bold text-6xl md:text-7xl">BIENVENUE</h1>
          <p className="py-3 font-bold text-xl">
            Veuillez vous connecter pour commencer
          </p>
          <div className="flex flex-row justify-center w-full">
            <button
              onClick={GotoLogin}
              className="px-6 text-red-600 bg-zinc-200 border font-semibold hover:bg-red-800 hover:text-white border-red-600
                    capitalize rounded-md py-3 m-4"
            >
              se connecter
            </button>
            <button
              onClick={GotoRegister}
              className="px-12 text-white border font-semibold bg-red-600 border-red-600
                    hover:bg-red-800 capitalize rounded-md py-3 m-4"
            >
              s'inscrire
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            className=" w-64 mr-12 flex flex-shrink"
            src={logo}
            alt="djeezy logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
