import { useState } from 'react';
import user from "../data/userr.png";
import { ChatIcon } from "@heroicons/react/solid";

function ChatButton() {

    const [showChatBox, setShowChatBox] = useState(false);
    return (
       <div  >
           <div className="chat chat-start">
               <div className="chat-image avatar">
                   <div className="w-8 rounded-full">
                       <img src={user} />
                   </div>
               </div>
               <div className="chat-header ml-3 ">
                   Issam

               </div>
               <div className="chat-bubble ">Hello Hello Hello Hello Hello Hello</div>

           </div>

           <div className="chat chat-end">
               <div className="chat-image avatar">
                   <div className="w-8 rounded-full">
                       <img src={user} />
                   </div>
               </div>
               <div className="chat-header ml-3 ">
                   Issam

               </div>
               <div className="chat-bubble bg-red-600">Hello World</div>

           </div>



       </div>
    );
}


export default ChatButton;