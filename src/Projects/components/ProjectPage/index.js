import React from "react";
import { connect } from "react-redux";
//components
import { ActivitiesList } from "../ActivitiesList";
function ProjectPage(props) {
  debugger;
  const { name, description, dueDate, activities } = props;
  return (
    <div>
      <header>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>Fecha de entrega: {dueDate}</p>
      </header>
      <article>
        <ActivitiesList activities={activities.pending} />
        <ActivitiesList activities={activities.inProgress} />
        <ActivitiesList activities={activities.doned} />
      </article>
    </div>
  );
}
const mapStateToProps = (state, props) => {
  const { projectId } = props.match.params;
  const normalizedId = parseInt(projectId);
  const project = state.projects.find(project => project.id === normalizedId);
  return { ...project };
};
export default connect(
  mapStateToProps,
  null
)(ProjectPage);
