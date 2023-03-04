import React, {useState} from 'react';
import logo from '../assets/djezzy.png';
import {MenuIcon , XIcon} from '@heroicons/react/outline'
import {FaTimesCircle} from "react-icons/fa";

function HomeNav() {

    const [nav , setNav] = useState(false)
    const handleClick = () =>setNav(!nav)
    return (
        <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg  '>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>

                    <img
                        className=" h-14 w-12 mr-4 ml-2 "
                        src={logo}
                        alt="djeezy logo"
                    />
                    <ul className='hidden md:flex font-bold ml-5'>
                        <li>Accueil</li>
                        <li>Contact</li>
                        <li>Support</li>
                    </ul>

                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='px-8 py-3'>SE CONNECTER</button>
                </div>
           <div className='md:hidden' onClick={handleClick}>
               {!nav ?  <MenuIcon  className='w-5'/> : <FaTimesCircle className='w-5'/> }

           </div>
            </div>

            <ul className={ !nav ? 'hidden' :  'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Accueil</li>
                <li className='border-b-2 border-zinc-300 w-full'>Contact</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <div className='flex flex-col my-4'>
                    <button className='px-8 py-3'>SE CONNECTER</button>
                </div>
            </ul>


        </div>
    );
}

export default HomeNav;
