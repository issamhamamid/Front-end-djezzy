import React from 'react';
import {Link , NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import  {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {links} from "../data/dummy";
import logo from "../assets/djezzy.png";
import {useStateContext} from "../contexts/ContextProvider";

function Sidebar() {
    const  {activeMenu , setActiveMenu , screenSize} = useStateContext()

    const handleCloseSideBar = () =>{
        if(activeMenu  && screenSize <=900){
            setActiveMenu(false)
        }
    }


    const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 bg-red-600"
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-red-600 hover:text-white m-2'
    return (

        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                    <div className=" flex justify-between items-center">
                        <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight dark:text-white text-slate-900" >
                            <img
                                className=" h-12 w-12 mr-4 ml-2 "
                                src={logo}
                                alt="djeezy logo"
                            />
                            <span>Djezzy</span>
                        </Link>
                        <TooltipComponent content="Menu" position="BottomCenter" >
                            <button type="button" onClick={()=>setActiveMenu((prevActiveMenu)=>  ! prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block ">
                                <MdOutlineCancel/>
                            </button>
                        </TooltipComponent>

                    </div>
                    <div className="mt-10">
                        {links.map((item) =>(
                            <div key={item.title}>
                                <p className="text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link)=>(
                                    <NavLink
                                        className ={({isActive})=>
                                            isActive ? normalLink : normalLink}

                                        to={`/${link.goto}`}
                                        key={link.name}
                                        onclick={handleCloseSideBar}

                                    >
                                        {link.icon}
                                        <span className='capitalize'>
                                            {link.name}
                                        </span>
                                    </NavLink>
                                ))}



                            </div>

                        ))}

                    </div>

                </>
            )

            }
        </div>
    );
}

export default Sidebar;