import React, {useState} from "react"
import {ClientPage} from "../ClientPage"
export function ClientPageContainer ({name, lastname, email, phone}) {
    const [projectsList, setProjectsList] = useState([1,2,3,4]);

    return (
       <ClientPage  projectsList = {projectsList}/>
    )
}