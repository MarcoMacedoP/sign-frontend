import React from "react";
import { ProjectsList } from "../ProjectsList";
import { connect } from "react-redux";

function ProjectListContainer({ projects }) {
  console.log(projects);
  return <ProjectsList projects={projects} />;
}

function mapStateToProps(state) {
  return { projects: state.projects };
}

export default connect(
  mapStateToProps,
  null
)(ProjectListContainer);
