// import Login from './components/Login';
// import Home from './components/Home';
// import Register from './components/Register';
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import UserTable from "./components/UserTable.jsx";
import Loading from "./components/Loading";
import Register from "./components/Register";
// import Loading from "./components/Loading";
import {BrowserRouter , Routes , Route , useNavigate} from "react-router-dom";
import UpdateUser from "./components/Updateuser";
import PrivateRoute from "./PrivateRoute";
import Navbaar from "./components/Navbaar";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
               <Route path ='/login' element={<Login/>}></Route>
                <Route path ='/home' element={<Home/>}></Route>
                <Route path ='/table' element={
                    <PrivateRoute>
                    <UserTable/>
                    </PrivateRoute>
                }></Route>
                <Route path ='/register' element={<Register/>}></Route>
                <Route path ='/update/:id' element={<UpdateUser/>}></Route>
                <Route path ='/navbar' element={<Navbaar/>}></Route>

            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
