import { useState } from 'react'
// functions
import { blurApp } from '../functions/blurApp'
export function useModalState (initialModalState = false) {
  const [modalIsOpen, setModalIsOpen] = useState(initialModalState)

  function handleModal () {
    if (modalIsOpen) {
      // close modal
      setModalIsOpen(false)
      blurApp(false)
    } else {
      // open modal
      setModalIsOpen(true)
      blurApp(true)
    }
  }

  return { modalIsOpen, handleModal, setModalIsOpen }
}
