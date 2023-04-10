import {useEffect, useRef, useState} from 'react';
import { ChatIcon, XIcon,  } from '@heroicons/react/solid';
import { MdSend} from "react-icons/md";
import { Transition } from '@headlessui/react';
import logo from "../assets/thelogo.png";
import {useLocalState} from "../util/useLocalStorage";
import {ChatMessageDto} from "../services/ChatMessageDto";

import userf from "../data/userr.png";
import jwt_decode from "jwt-decode";
import { LocalDateTime } from '@js-joda/core';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/fr';




function App() {

    const chatSystemRef = useRef(null);





    dayjs.locale('fr');
    let dates = LocalDateTime.now();
    const [token, setToken] = useLocalState("", "token");
    const webSocket = useRef(null)

    const [name , setName] = useState(getNameFromToken())
    const [change , setChange] = useState("chat-bubble")
    const date = "2hours ago"
    dayjs.extend(relativeTime)


    function getNameFromToken() {
        if( token ){
            if(token.length> 50){

                const decodeToken = jwt_decode(token)

                return decodeToken.firstname
            }
        }
    }

    const [chatMessages , setChatMessages] = useState([])
    const user = name
    const [message , setMessage] = useState("")
    const [showChatbox, setShowChatbox] = useState(false);







    useEffect(() => {

        fetch("/messages", {
            headers: {
                "Content-Type": "application/json" ,
                Authorization: `Bearer ${token}`,
            },
            method: "GET",
        })
            .then((response) => {
                if (response.status === 200)
                    return response.json();

            })
            .then((userData) => {
                setChatMessages(userData)
            })
    }, []);

    useEffect(() =>{

        webSocket.current = new WebSocket('ws://localhost:8080/chat')
        webSocket.current.onopen= (event) =>{

        }

        webSocket.current.onclose= (event) =>{

        }
        return () => {

            webSocket.current.close()
        }
    } , [])

    useEffect(() =>{
        webSocket.current.onmessage = (event) =>{
            const chatMessageDto = JSON.parse(event.data)
            setChatMessages([...chatMessages , {
                sender: chatMessageDto.user,
                input: chatMessageDto.message,
                date: chatMessageDto.date
            } ])
        }
    }, [chatMessages])

    const toggleChatbox = () => {
        setShowChatbox(!showChatbox);
    };

    const listChatMessages = chatMessages.map((chatMessageDto , index ) =>
        <div key ={index}>
            <div>




                <div  className={` ${(chatMessageDto.sender===name) ? 'chat chat-end' : 'chat chat-start'}`}>
                    <div className="chat-image avatar">
                        <div className="w-8 rounded-full">
                            <img src={userf} />
                        </div>
                    </div>
                    <div className="chat-header ml-3  ">
                        {chatMessageDto.sender}



                    </div>
                    <div className={` ${(chatMessageDto.sender===name) ? 'chat-bubble bg-red-600' : 'chat-bubble'}`}>{chatMessageDto.input}</div>

                    <div className="chat-footer opacity-50">
                        {    dayjs(chatMessageDto.sentDate).fromNow()}
                    </div>


                </div>


            </div>
        </div>
    );



    const handleMessageChange = (event) =>{
        setMessage(event.target.value)
    }

    const sendMessage =() =>{
        if(user && message){
            webSocket.current.send(
                JSON.stringify(new ChatMessageDto(user ,message,dates))
            )
            const reqBody = {
                "sender": user,
                "input": message,
                "sentDate": dates

            }
            fetch("/messages", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },


                method: "POST" ,
                body: JSON.stringify(reqBody) ,
            })
            setMessage("")

        }

    }




        useEffect(() => {
            if (chatSystemRef.current) {
                chatSystemRef.current.scrollTop = chatSystemRef.current.scrollHeight;
            }

    }, [chatMessages]);


    return (
        <div className="fixed bottom-0 right-0 py-2 px-4 mb-8 z-50 ">
            {!showChatbox && (
                <button
                    className="rounded-full flex items-center gap-2 py-2 px-4 bg-red-600 text-white hover:bg-red-700 transition-colors"
                    onClick={toggleChatbox}
                >
                    <ChatIcon className="w-8 h-8" />
                    <span>Cliquez ici pour discuter</span>
                </button>
            )}
            <Transition
                show={showChatbox}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="fixed bottom-0 right-3 z-50"
            >
                {(ref) => (
                    <div
                        ref={ref}
                        className="bg-white shadow-lg rounded-lg  w-96"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-gradient-to-l from-red-700 via-red-600 to-red-500 text-white rounded-t-lg p-4 h-[70px]">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <img src={logo} alt="djeezy logo" className="w-8 h-8 mr-2" />
                                    <p className="ml-1">Vous pouvez chattez ici! </p>
                                </div>
                                <button onClick={toggleChatbox}>
                                    <XIcon className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>
                        <div ref={chatSystemRef} className="h-[500px] overflow-y-auto mb-4 mt-3 mr-1 ml-1">
                            {listChatMessages}
                        </div>
                        <div className="flex mb-3">
                            <input
                                onChange={handleMessageChange}
                                value={message}
                                type="text"
                                className="flex-1  bg-gray-200 border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                placeholder="Saisissez votre message ici..."
                            />
                            <button  onClick={sendMessage} className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                <MdSend className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                )}
            </Transition>
        </div>
    );
}

export default App;
