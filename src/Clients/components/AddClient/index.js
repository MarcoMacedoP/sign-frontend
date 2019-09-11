import React from "react"
import { Input, Button } from "../../../global/components";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";

export const AddClient = ({handleChange, state})=>(
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
        <div>
            <p>Agregar proyecto</p>
            <MaterialIcon>add_circle_outline</MaterialIcon>
        </div>

        <Button>Agregar cliente</Button>
    </div>
)