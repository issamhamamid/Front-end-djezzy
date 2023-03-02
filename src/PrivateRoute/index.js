import React, {useState} from 'react';
import {useLocalState} from "../util/useLocalStorage";
import {Navigate} from "react-router-dom";
import request from "../services/fetchService";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute =  ({children}) => {
    const [token , setToken] = useLocalState("" , "token");
    const [isLoading , setLoading] = useState(true)
    const  [isValid , setIsvalid] = useState(null);
    if(token){
    request(`/validate?token=${token}` ,"GET" , null).then(isValid =>{
       setIsvalid(isValid)
        setLoading(false)
        return isValid === true ? children : <Navigate to="/login" />;
    })


    }
    else {
        return <Navigate to="/login" />;
    }

return isLoading ?<LoadingSpinner/> : isValid ===true ? children : <Navigate to="/login" />

};

export default PrivateRoute;
