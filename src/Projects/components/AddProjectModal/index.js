import React from "react";
import { Modal, SearchBar, LongCard } from "../../../global/components/"

/**
 * @description This proyect adds a project from a modal.
 * @param {*} onClose the functions that closes the modal.
 * @param {*} isOpen the the value that defines if modal is open.
 * @param {*} setSelectedItem here will be stored the id and name 
 * from the stored project. 
 */


export function AddProjectModal ({onClose, isOpen, setSelectedItem, projectsList}) {

    const handleChoseProject = id => {
        setSelectedItem({id, name : "default name"});
        onClose();
    };

    return (
        <Modal onClose = {onClose} isOpen={isOpen}>
            <h2>Lista de proyectos</h2>
            <SearchBar placeholder="Busca un proyecto"></SearchBar>
            <ul>
                {[1,2,3,4,5].map(id =>
                    (
                        <li>
                            <LongCard
                                key={id}
                                onClick={()=> handleChoseProject(id)} 
                            />
                        </li>
                    )
                )}
            </ul>
        </Modal>
    );
};