import React from 'react';
import './App.css'
import Sidebar from "./Sidebar";
import {useStateContext} from "../contexts/ContextProvider";
import NavBar from "./NavBar";
import Utilisateurs from "./Utilisateurs";
import {useLocalState} from "../util/useLocalStorage";





const New = () => {

    const [token , setToken] = useLocalState("" , "token");

    const  {activeMenu} = useStateContext()
    return (
        <div >

            <div className="flex relative dark:bg-main-dark-bg">

                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                >
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                        <NavBar />
                    </div>

                    <div>

                       <Utilisateurs/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default New;