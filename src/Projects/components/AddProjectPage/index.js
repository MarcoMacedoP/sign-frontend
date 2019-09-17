//libs
import React, { Fragment } from "react";
//components
import { Button, Input } from "../../../global/components";

export const AddProjectPage = ({ state, handleChange, handleSubmit }) => (
  <Fragment>
    <h1>Agregar proyecto</h1>
    <Input
      name="name"
      label="Nombre del proyecto"
      placeholder="Creación de sitio web responsive"
      onChange={handleChange}
      value={state.name}
    />
    <Input
      name="description"
      label="Descripción del proyecto"
      placeholder="Página web responsive sobre plantas e invernaderos."
      onChange={handleChange}
      value={state.description}
    />
    <Input
      name="date"
      label="Fecha de entrega"
      placeholder="11-08-2019"
      onChange={handleChange}
      value={state.date}
    />
    <Button onClick={handleSubmit}>Crear proyecto</Button>
  </Fragment>
);
