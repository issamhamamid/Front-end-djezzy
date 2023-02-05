import React from 'react'
import logo from '../assets/djezzy.png'
import { FaUser} from 'react-icons/fa';
import { FaLock} from 'react-icons/fa';


export default function Login() {
    const placeholder1 = "Nom d'utilisateur ";
    const placeholder2 = "Mot de passe ";

  return (
  <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100'>
     
     
    <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
      <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl '>
        <div className='w-3/5 p-5' >
          <div > <img className=' object-scale-down h-20 w-20' src={logo}></img>
        </div>
        <div className='py-11'>
         <h2 className='text-3xl font-bold mb-2 '>Se connecter </h2>
         <div className='border-2 w-10 border-red-600 inline-block mb-6'></div>
         <form className='mb-5' >
            
         <div >
        
            <input className='bg-gray-100 w-72 p-2 text-center font-semibold rounded-2xl mb-8' type="text" maxlength="8" placeholder={placeholder1}/>
            <FaUser id='issam' />
            <input className='bg-gray-100 w-72 p-2 text-center font-semibold rounded-2xl ' type="password" maxlength="10" placeholder={placeholder2}/>
            <FaLock id='lock' />
            
            
           
         </div>

         </form>
         <a href="#" className='border-2 text-red-600 border-red-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-600 hover:text-white'>Se connecter </a>
         
       
        </div>
        </div> 
        
        <div className='w-2/5 bg-red-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-3xl font-bold mb-2'>Bienvenue</h2>
            <div className='border-2 w-10 border-white inline-block mb-5'></div>
            <p className='mb-10'>Veuillez entrer vos informations pour accéder à votre compte sinon cliquez sur le bouton ci-dessous pour retourner à la page d'accueil</p>
            <a href="#" className='border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-600'>Accueil</a>
        </div>
      </div>
    </main>
  </div>
)
}

