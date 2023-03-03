import React from 'react';
import logo from '../assets/djezzy.png';

function HomeNav() {
    return (
        <div className="text-custom-gray flex justify-between items-center h-24 max-w-[1900px] mx-auto px-4 border-t-2 border-gray-300">
            <img
                className="object-scale-down h-30 w-20 pt-3"
                src={logo}
                alt="djeezy logo"
            />
            <ul className="flex pr-10 font-bold text-lg">
                <li className="p-4">
                    <a
                        href="/home"
                        className="nav-link hover:border-b-2 hover:border-red-600"
                    >
                        Accueil
                    </a>
                </li>
                <li className="p-4">
                    <a
                        href=""
                        className="nav-link hover:border-b-2 hover:border-red-600"
                    >
                        Contact
                    </a>

                </li>


            </ul>
        </div>
    );
}

export default HomeNav;
