//Components
import React from "react"
import { Link } from "react-router-dom"
import { LongCard, AddButton, SearchBar } from "../../../global/components"


export const ClientsList = ({match}) => {
    return (
        <> 
            <h2>Lista de clientes</h2>
            <SearchBar />
            <ul>
                {[1,2,3,4].map( id => (
                    <li key={id}>
                        <Link to={`${match.path}${id}`}>
                            <LongCard />
                        </Link>
                        
                    </li>
                    )
                )}
            </ul>
            <AddButton />
        </>
    )
};