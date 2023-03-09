import React from 'react';
import './App.css'

import Sidebar from "./Sidebar";
import {useStateContext} from "../contexts/ContextProvider";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Utilisateurs from "./Utilisateurs";
import Update from "./Update";
import {useLocalState} from "../util/useLocalStorage";
import Register from "./Register";
import PrivateRoute from "../PrivateRoute";






const Test = () => {

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

                            <Routes>

                                <Route path ='/users' element={<Utilisateurs/>}></Route>
                                <Route path ='/register' element={<Register/>}></Route>
                                <Route path ='/update/:id' element={
                                    <PrivateRoute>
                                        <Update/>
                                    </PrivateRoute>
                                }></Route>









                            </Routes>
                        </div>

                    </div>
                </div>

        </div>
    );
};

export default Test;