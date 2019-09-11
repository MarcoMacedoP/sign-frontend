import React from "react"
import {LongCard} from "../../../global/components"


export const ClientPage = ({name, lastname, phone, email, projectsList})=>(
    <div>
    <header>
        <p>{`${name || "Nombre" }  ${lastname || "apellido"}`}</p>
        <p>{email}</p>
        <p>{phone}</p>
    </header>

    <h1>Lista de proyectos</h1>
    <ul>
        {projectsList.map( id => <LongCard key={id}/>)}
    </ul>
    
</div>
)