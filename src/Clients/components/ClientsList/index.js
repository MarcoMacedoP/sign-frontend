//Components
import React from "react"
import { LongCard, Modal } from "../../../global/components"
//Hooks
import { useModalState } from "../../../global/hooks/useModalState"
import { ClientModal } from "../ClientModal"

export const ClientsList  = () => {

    const { handleModal, modalIsOpen } = useModalState(false)
    return (
        <> 
            <h2>Lista de clientes</h2>
            <ul>
                {[1,2,3,4].map( value => (
                    <li id={value}>
                        <LongCard onClick={handleModal}/>
                        <ClientModal onClose={handleModal} isOpen={modalIsOpen} />
                    </li>
                    )
                )}
            </ul>
        </>
    )
};