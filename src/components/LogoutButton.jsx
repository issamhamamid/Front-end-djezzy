import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { css } from '@emotion/react';
import {useLocalState} from "../util/useLocalStorage";

const LogoutButton = ({ setIsopen}) => {


    return (
        <button
            onClick={setIsopen}
            css={buttonStyle}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full"
        >
            <span className="mr-2">Déconnexion</span>
            <FiLogOut />
        </button>
    );
};

const buttonStyle = css`
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default LogoutButton;
