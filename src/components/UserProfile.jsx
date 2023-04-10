import React, {useState} from 'react';
import { MdOutlineCancel } from 'react-icons/md';


import user from '../data/user.jpg';
import Button from "./Button";
import LogoutButton from "./LogoutButton";
import jwt_decode from "jwt-decode";
import {useLocalState} from "../util/useLocalStorage";
import LogoutConfirmModal from "./LogoutConfirmModal";

const UserProfile = () => {
    const [token , setToken] = useLocalState("" , "token");
    const [name , setName] = useState(getNameFromToken())

    function getNameFromToken() {
        if( token ){
            if(token.length> 50){

                const decodeToken = jwt_decode(token)
                console.log(decodeToken)
                return decodeToken.lastname + " " + decodeToken.firstname
            }
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);




  return (
      <div >
          <LogoutConfirmModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}

          />
      <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">Profile</p>
          <Button
              icon={<MdOutlineCancel />}
              color="rgb(153, 171, 180)"
              bgHoverColor="light-gray"
              size="2xl"
              borderRadius="50%"
          />
        </div>
        <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
          <img
              className="rounded-full h-24 w-24"
              src={user}
              alt="user-profile"
          />
          <div>
            <p className="font-semibold text-xl dark:text-gray-200"> {name} </p>
            <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          </div>
        </div>

        <div className="mt-5">
         <LogoutButton
             setIsopen={() => setIsModalOpen(true)}
         />
        </div>
      </div>
      </div>

  );
};

export default UserProfile;