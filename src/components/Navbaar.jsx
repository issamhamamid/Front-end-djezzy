import { useState } from 'react';
import { useLocalState } from "../util/useLocalStorage";

function NavBaar() {
    const [isLogoutOpen, setIsLogoutOpen] = useState(false);
    const [token , setToken] = useLocalState("" , "token");

    function handleLogout() {
        setIsLogoutOpen(true);
    }

    function handleConfirm() {
        setIsLogoutOpen(false);
        setToken(null)
        window.location.href = 'login'
    }

    function handleCancel() {
        setIsLogoutOpen(false);
    }


    function Home(){
        window.location.href='/table'
    }

    return (
        <div className="bg-red-600 h-12 flex items-center justify-between px-4">
            <p className="text-white font-bold text-lg">BIENVENUE</p>
            <div className="flex items-center">
                <button onClick={Home} className="bg-white text-red-600 px-4 py-2 rounded-md font-bold mr-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">Home</button>
                <button className="bg-white text-red-600 px-4 py-2 rounded-md font-bold hover:bg-blue-600 hover:text-white transition-colors duration-300" onClick={handleLogout}>Logout</button>
                {isLogoutOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
                        <div className="bg-white rounded-md shadow-lg">
                            <div className="bg-red-500 rounded-t-md px-6 py-4">
                                <h2 className="text-white text-lg font-bold mb-2">Voulez-vous vraiment vous déconnecter?</h2>
                            </div>
                            <div className="px-6 py-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md font-bold mr-2 hover:bg-blue-600 hover:text-white transition-colors duration-300" onClick={handleConfirm}>Confirmer</button>
                                <button className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md font-bold hover:bg-gray-800 hover:text-white transition-colors duration-300" onClick={handleCancel}>Annuler</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBaar;
