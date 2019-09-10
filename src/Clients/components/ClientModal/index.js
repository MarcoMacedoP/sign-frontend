import React from "react"
import { Modal } from "../../../global/components"

export const ClientModal =({name, lastname, email, phone, isOpen, onClose}) => (
    <Modal onClose={onClose} isOpen = {isOpen } > 
        <h3>{`${name || "Nombre "} ${lastname || "del cliente"}`}</h3>   
        <sub>{ email || "email" }</sub>
        <p>{ phone || "phone" }</p>        
    </Modal>
)