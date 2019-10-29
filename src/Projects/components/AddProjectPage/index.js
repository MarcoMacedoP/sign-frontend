//libs
import React from "react";
//components
import {Input, AddPage} from "../../../global/components";

export const AddProjectPage = ({
  state,
  handleChange,
  handleSubmit,
  isLoading,
  error,
  onErrorClose,
  title
}) => (
  <AddPage
    onSubmit={handleSubmit}
    isLoading={isLoading}
    title={title || "Agregar proyecto"}
    aboutTitle="Acerca de los proyectos"
    about="[inserta información útil sobre los proyectos, puto vago.]"
    error={error}
    onErrorClose={onErrorClose}
  >
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
      name="dueDate"
      type="date"
      label="Fecha de entrega"
      placeholder="11-08-2019"
      onChange={handleChange}
      value={state.date}
    />
  </AddPage>
);
