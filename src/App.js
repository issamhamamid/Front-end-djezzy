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

function App() {
  return (
    <div >
        <BrowserRouter>
            <Routes>
               <Route path ='/' element={<Login/>}></Route>
                <Route path ='/home' element={<Home/>}></Route>
                <Route path ='/UserTable' element={<UserTable/>}></Route>
                <Route path ='/register' element={<Register/>}></Route>

            </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
