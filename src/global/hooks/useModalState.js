
import { useState } from "react"

export function useModalState (initialModalState){
    const [modalIsOpen, setModalIsOpen] = useState (initialModalState)

    function handleModal() {
        if(modalIsOpen){
            setModalIsOpen(false)
        }else{
            setModalIsOpen(true)
        }
    }

    return {modalIsOpen, handleModal , setModalIsOpen}
}