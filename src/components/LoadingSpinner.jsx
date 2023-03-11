import React from 'react';


const LoadingSpinner = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-red-500"></div>
            <div className="absolute font-bold text-lg text-red-500">Chargement..</div>
        </div>
    );
};

export default LoadingSpinner;
