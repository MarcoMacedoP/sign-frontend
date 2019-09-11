
import React, {useState} from "react"
import {Redirect } from "react-router-dom"

export function useRedirect(direction){
    const [redirect, setRedirect] = useState(false);
    
    function renderRedirect(){
        if(redirect){
            return <Redirect to={direction}/>
        }else{
            return null;
        }
    }
    
    return {redirect, setRedirect, renderRedirect}
}