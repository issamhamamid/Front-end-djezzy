import React from 'react'

function Home() {
    return (
        <div className="flex flex-col h-screen">
            <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">My App</span>
                </div>
                <div className="flex">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4">
                        Profile
                    </button>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Home