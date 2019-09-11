import React from "react";
import { Input, Button } from "../../../global/components";
import { MaterialIcon } from "../../../global/styles/foundations/MaterialIcon";


export function AddClientContainer (){
    return (
      <div>
          <Input 
            label="Nombre (s)"
            placeholder="María"
            name="name"
            />
            <Input 
            label="Appellido (s)"
            placeholder="Fernandez"
            name="lastname"
            />
            <Input 
            label="Email"
            placeholder="test@example.com"
            name="email"
            type="email"
            />
            <Input 
            label="Télefono"
            placeholder="222335774"
            name="phone"
            type="number"
            />
            <div>
                <p>Agregar proyecto</p>
                <MaterialIcon>add_circle_outline</MaterialIcon>
            </div>

            <Button>Agregar cliente</Button>
      </div>
    );    
}
