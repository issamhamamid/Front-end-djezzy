import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
    const { setisClicked, initialState } = useStateContext();

    return (
        <button
            onClick={() => setisClicked({
                userProfile : false


            })}
            type="button"
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
        >
            {icon} {text}
        </button>
    );
};

export default Button;
