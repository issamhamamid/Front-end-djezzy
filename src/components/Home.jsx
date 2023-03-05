import React from 'react'
import HomeNav from "./HomeNav";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import {useStateContext} from "../contexts/ContextProvider";



function Home() {
    const  {activeMenu} = useStateContext()
    return (
        <div>

            <HomeNav/>
              <Hero/>

        </div>
    );
}

export default Home