import {useLocalState} from "../util/useLocalStorage";

function request(url , method , token, reqBody ){

    const fetchData = {
        headers: {
            "Content-Type": "application/json"
        },
        method : method

    }

    if(token){
        fetchData.headers.Authorization = `Bearer ${token}`
    }



    if(reqBody){
        fetchData.body = JSON.stringify(reqBody)
    }

    return fetch(url , fetchData) .then((response) => {
        if(response.status===200)
            return response.json();
    });



}

export default request;