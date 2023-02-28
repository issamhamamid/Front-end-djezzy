import React, {useEffect, useState} from "react";
import logo from "../assets/djezzy.png";
import {FaUser, FaLock} from "react-icons/fa";
import {BrowserRouter , Routes , Route , useNavigate} from "react-router-dom";
import {useLocalState} from "../util/useLocalStorage";
import {message} from "antd";

export default function Login() {


    const [token , setToken] = useLocalState("" , "token");





    const [loginFormData, setLoginFormData] = useState({
        username: "",
        password: "",
    });







    const [account , setaccount] = useState(false)
    const handleChange = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value,
        });
    };






    const handleSubmit = (event) => {
        event.preventDefault();

                    const reqBody = {
                        "username" : loginFormData.username,
                        "password" : loginFormData.password

                    };

                    fetch("auth" , {
                        headers: {
                            "Content-Type": "application/json" ,
                        },
                        method : "post" ,
                        body: JSON.stringify(reqBody)
                    })


                        .then((response) => {
                            if (response.status === 200)
                                return Promise.all(([response.text(), response.body]));
                            else{
                                return Promise.reject("invalid login attempt")
                            }
                        })
                        .then(([body , headers]) => {
                            setToken(body);
                            window.location.href = 'table'

                            }
                        )
                        .catch((message) => {
                            setaccount(true)
                        })



                        }









    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
                <div className="flex flex-col bg-white shadow-md px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                    <img
                        className=" object-scale-down h-20 w-20"
                        src={logo}
                        alt="djeezy logo"
                    />
                    <div class="font-medium self-center text-2xl uppercase text-gray-800">
                        Se connecter
                    </div>
                    {account &&  <div className="bg-red-100 border border-red-400  mt-5 text-red-700 px-4 py-3 rounded relative"
                                      role="alert">
                        <span className="block sm:inline">Nom d'utilisateur ou mot de passe incorrect</span>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                      </span>
                    </div>}
                    <div className="mt-10">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col mb-6">
                                <label
                                    for="email"
                                    className="mb-1 text-base tracking-wide text-gray-600"
                                >
                                    Nom d'utilisateur:
                                </label>
                                <div className="relative">
                                    <div
                                        class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <FaUser/>
                                    </div>
                                    <input
                                        id="username"
                                        type="text"
                                        name="username"
                                        className="text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-red-400"
                                        placeholder="Nom d'utilisateur"
                                        onChange={handleChange}
                                        value={loginFormData.username}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mb-6">
                                <label
                                    for="password"
                                    class="mb-1 text-base tracking-wide text-gray-600"
                                >
                                    Mot de passe:
                                </label>

                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                        <FaLock/>
                                    </div>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-red-400"
                                        placeholder="Mot de passe"
                                        onChange={handleChange}
                                        value={loginFormData.password}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center mb-6 -mt-4">
                                <div className="flex ml-auto">
                                    <a
                                        href="test"
                                        className="inline-flex text-base text-red-500 hover:text-red-700"
                                    >
                                        Mot de passe oublié?
                                    </a>
                                </div>
                            </div>

                            <div class="flex w-full">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center focus:outline-none border-2 border-red-600 rounded-full text-white text-base bg-red-600 hover:bg-red-700 py-2 w-full transition duration-150 ease-in"
                                >
                                    <span class="mr-2 uppercase">Se connecter</span>
                                    <span>
                    <svg
                        class="h-6 w-6"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </span>
                                </button>
                            </div>
                        </form>

                        <button
                            type="submit"
                            className="flex items-center justify-center focus:outline-none mt-4 border-2 border-red-600 rounded-full text-red-700 text-base bg-white hover:text-white hover:bg-red-700 py-2 w-full transition duration-150 ease-in"
                        >
                            <span className="mr-2 uppercase">Acceuil</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );



}
