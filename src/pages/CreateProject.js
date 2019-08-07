import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import FormInput from "../components/FormInput";

const CreateProject = (props) => {
  return (
    <div className="CreateProject">
      <Link to="/app/projects/" className="material-icons close">
        close
      </Link>
      <h1 className="headline-three CreateProject__tittle">
        Crea un proyecto
      </h1>
      <div className="double-column">
        <div className="col-one">
          <h2>Sobre los Proyectos</h2>
          <p>
            La herramienta de proyectos permite, de manera sencilla,
            organizar y administrar proyectos de gran escala, es decir
            proyectos cuya duración puede extenderse por un periodo de
            considerable de tiempo.
          </p>
        </div>
        <div className="col-two">
          <Form>
            <FormInput
              name="Nombre del proyecto"
              type="text"
              placeholder="Un nombre elegante que describa tu proyecto."
            />
            <FormInput
              name="Descripción corta"
              type="text"
              placeholder="Una descripción corta sobre lo que es tu proyecto."
            />
            <FormInput
              name="Descripción a detalle"
              type="text"
              placeholder="Cuentanos los pequeños detalles."
            />
            <button className="button">Crear proyecto</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default CreateProject;