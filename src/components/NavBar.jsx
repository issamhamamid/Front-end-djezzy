import React, {useEffect} from "react";
import {AiOutlineMenu} from "react-icons/ai";
import { MdKeyboardArrowDown } from 'react-icons/md';
import {TooltipComponent} from "@syncfusion/ej2-react-popups";
import user from'../data/user.jpg'
import UserProfile from "./UserProfile";

import {useStateContext} from "../contexts/ContextProvider";

function NavBar() {
    const {activeMenu , setActiveMenu , isClicked , setisClicked , handleClick , screenSize , setScreenSize} = useStateContext()
    useStateContext();

    useEffect(()=>{
          const handleResize =() => setScreenSize(window.innerWidth)
        window.addEventListener('resize' , handleResize)
        handleResize()
        return() => window.removeEventListener('resize' , handleResize)

    }, [])

    useEffect(()=>{
         if(screenSize<=900) {
             setActiveMenu(false)

         }
         else {
             setActiveMenu(true)
         }
    } , [screenSize])

const NavButton = ({title , customFunc , icon , color , dotColor}) => (
    <TooltipComponent content={title} position="BottomCenter">
    <button className="relative text-xl rounded-full p-3 hover:bg-light-gray" type="button" onClick={customFunc} style={{color}}>
      <span className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" style={{background:dotColor}}
      />
        {icon}

    </button>
    </TooltipComponent>
)

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
   <NavButton  title="Menu"
               customFunc={()=> setActiveMenu((prevActiveMenu)=>! prevActiveMenu )}
               color="red"
               icon={<AiOutlineMenu/>} />

      <div className="flex">



        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" onClick={()=>handleClick('userProfile')}>
            <img className="rounded-full w-10 h-10" src={user}
            />
              <p>

                  <span className="text-black  ml-1 text-xl">Utilisateur</span>

              </p>
              < MdKeyboardArrowDown className="text-gray-400 text-14"/>

          </div>
        </TooltipComponent>
          {isClicked.userProfile && <UserProfile/>}

      </div>
    </div>

  );
}

export default NavBar;
