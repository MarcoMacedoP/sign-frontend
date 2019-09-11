import React from "react"
import { Input, Button } from "../../../global/components";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

//modals
import { AddProjectModal } from "../../../Projects/components/"

export const AddClient = ({
        handleChange, 
        state, 
        addProjects,
        modalIsOpen,
        handleModal 
    })=> (
        <div>
            <Input 
            label="Nombre (s)"
            placeholder="María"
            name="name"
            value={state.name}
            onChange = {handleChange}
            />
            <Input 
            label="Apellido (s)"
            placeholder="Fernandez"
            name="lastname"
            value={state.lastname}
            onChange = {handleChange}
            />
            <Input 
            label="Email"
            placeholder="test@example.com"
            name="email"
            value={state.email}
            onChange = {handleChange}
            type="email"
            />
            <Input 
            label="Télefono"
            placeholder="222335774"
            name="phone"
            value={state.phone}
            onChange = {handleChange}
            type="number"
            />
            <div onClick={handleModal}>
                <p>Agregar proyecto</p>
                <MaterialIcon>add_circle_outline</MaterialIcon>
            </div>
            <AddProjectModal 
                onClose={handleModal}
                isOpen={modalIsOpen}
                setSelectedItem={addProjects}
            />
            <Button>Agregar cliente</Button>
        </div>
)