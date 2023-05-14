import React, {useState} from 'react';
import './App.css'

import Sidebar from "./Sidebar";
import Teest from "./Teest";
import MainDashboard from "./MainDashboard";
import {useStateContext} from "../contexts/ContextProvider";
import NavBar from "./NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";


import Utilisateurs from "./Utilisateurs";
import Update from "./Update";
import {useLocalState} from "../util/useLocalStorage";
import Register from "./Register";
import PrivateRoute from "../PrivateRoute";
import DeleteUserModal from "./DeleteUserModal";
import LogoutConfirmModal from "./LogoutConfirmModal";
import Chat from "./Chat";






const Test = () => {

    const [token , setToken] = useLocalState("" , "token");

    const  {activeMenu} = useStateContext()

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-[#FAFBFB]">




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
                    <div className=" fixed bg-main-bg dark:bg-main-dark-bg navbar w-full   ">
                        <NavBar />
                    </div>
                    <div>
                        <Chat/>
                    </div>

                    <div  className="mt-16">





                        <Routes>

                            <Route path ='/users' element={
                                <PrivateRoute>
                                    <Utilisateurs/>
                                </PrivateRoute>
                            }></Route>
                            <Route path ='/register' element={
                                <PrivateRoute>
                                    <Register/>
                                </PrivateRoute>
                            }></Route>
                            <Route path ='/update/:id' element={
                                <PrivateRoute>
                                    <Update/>
                                </PrivateRoute>
                            }></Route>


                            <Route path ='/dashboard' element={
                                <PrivateRoute>
                                    <MainDashboard/>
                                </PrivateRoute>
                            }></Route>








 <Route path ='/y' element={

                                    <Teest/>

                            }></Route>


                        </Routes>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Test;