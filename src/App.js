// import Login from './components/Login';
// import Home from './components/Home';
// import Register from './components/Register';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import Test from "./components/Test";
import UserTable from "./components/UserTable.jsx";
import Loading from "./components/Loading";
import Register from "./components/Register";
// import Loading from "./components/Loading";
import  {TooltipComponent} from "@syncfusion/ej2-react-popups";
import {FiSettings} from "react-icons/fi";


import {BrowserRouter , Routes , Route , useNavigate} from "react-router-dom";
import UpdateUser from "./components/Updateuser";
import PrivateRoute from "./PrivateRoute";
import Navbaar from "./components/Navbaar";
import {useLocalState} from "./util/useLocalStorage";
import React, {useState} from "react";
import jwt_decode from "jwt-decode";
import HomeNav from "./components/HomeNav";
import Utilisateurs from "./components/Utilisateurs";

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

                <Route path ='/update/:id' element={<UpdateUser/>}></Route>
                <Route path ='/navbar' element={<Navbaar/>}></Route>
                <Route path ='/n' element={<NavBar/>}></Route>
                <Route path ='/nav' element={<HomeNav/>}></Route>


            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
