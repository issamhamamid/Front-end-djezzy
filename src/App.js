
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import Test from "./components/Test";
import UserTable from "./components/UserTable.jsx";




import {BrowserRouter , Routes , Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Navbaar from "./components/Navbaar";
import {useLocalState} from "./util/useLocalStorage";
import React, {useState} from "react";
import jwt_decode from "jwt-decode";
import HomeNav from "./components/HomeNav";

import New from "./components/New";
import RegisterForm from "./components/RegisterForm";


function App() {

    const [token , setToken] = useLocalState("" , "token");
    const [role , setRole] = useState(getRoleFromToken())

    function getRoleFromToken() {
        if( token ){
            if(token.length> 50){

        const decodeToken = jwt_decode(token)
        return decodeToken.authorities[0].authority
            }
        }
    }

  return (




    <div >
        <BrowserRouter>

            <Routes>
               <Route path ='/login' element={<Login/>}></Route>
                <Route path ='/' element={<Home/>}></Route>
                <Route path ='/test/*' element={
                    role ==="ROLE_ADMIN" ? (
                    <PrivateRoute>
                    <Test/>
                    </PrivateRoute> ) :
                        (
                            <PrivateRoute>
                                <Navbaar/>
                            </PrivateRoute>

                        )


                }></Route>


                <Route path ='/n' element={<NavBar/>}></Route>
                <Route path ='/register' element={
                    <PrivateRoute>
                        <RegisterForm/>
                    </PrivateRoute>
                }></Route>
                <Route path ='/nav' element={<HomeNav/>}></Route>
                <Route path ='/up' element={<UserTable/>}></Route>
                <Route path ='/new' element={
                    <PrivateRoute>
                    <New/>
                    </PrivateRoute>
                }></Route>


            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
