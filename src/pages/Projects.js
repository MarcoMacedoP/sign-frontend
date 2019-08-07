import React, { useState, useEffect } from "react";
import EmptyState from "../components/EmptyState";
const Projects = (props) => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    setData([
      {
        project : {
          id          : "002",
          name        : "Nombre del proyecto",
          date        : "12/04/2018",
          description : "Descripción corta del proyecto."
        }
      }
    ]);
  }, []);
  if (!data || data.length === 0) {
    return (
      <EmptyState
        tittle="Proyectos"
        callToAction="/app/projects/create"
        callToActionMessage="Crear proyecto."
        description="Aún no tienes proyectos creados, crea un nuevo proyecto para comenzar."
      />
    );
  } else {
    console.log(data);
    return (
      <div className="Projects">
        <h1 className="headline-three">Proyectos</h1>
        <div className="Projects__filters-containe">
          -En curso -Barra de busqueda
        </div>
        <ul>
          {data.map(({ project }) => {
            console.log(project);
            return (
              <li key={project.id}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <sub>{project.date}</sub>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
export default Projects;
