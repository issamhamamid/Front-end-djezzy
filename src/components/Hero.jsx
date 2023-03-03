import React from 'react';

function Hero() {

    function GotoLogin(){
        window.location.href ='login'
    }
    return (
        <div className="text-black">
            <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <h1 className="md:text-8xl sm:text-6xl text-4xl font-bold md:py-6">
                    BIENVENUE
                </h1>
                <div>
                    <p className="font-medium text-2xl">
                        Veuillez vous connecter pour commencer
                    </p>
                    <button onClick={GotoLogin} className="text-white bg-red-600 w-[200px] rounded-md font-medium my-6 mx-auto py-3 transition-all duration-300 ease-in-out hover:bg-red-800">
                        Se Connecter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
