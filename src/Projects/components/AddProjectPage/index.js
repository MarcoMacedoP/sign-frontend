//libs
import React from "react";
//components
import {Button, Input, InfoLayout} from "../../../global/components";
//styled-components
import {H1} from "./styles";
import {BaseForm} from "../../../global/styles/Forms";

export const AddProjectPage = ({
  state,
  handleChange,
  handleSubmit
}) => (
  <>
    <H1>Agregar proyecto</H1>
    <InfoLayout
      title="Sobre los proyectos"
      info=" La herramienta de proyectos permite, de manera sencilla,
          organizar y administrar proyectos de gran escala, es decir
          proyectos cuya duración puede extenderse por un periodo de
          considerable de tiempo. :p"
    >
      <BaseForm>
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
          type="date"
          label="Fecha de entrega"
          placeholder="11-08-2019"
          onChange={handleChange}
          value={state.date}
        />
        <Button onClick={handleSubmit}>Crear proyecto</Button>
      </BaseForm>
    </InfoLayout>
  </>
);
