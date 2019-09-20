import React from "react";
import { connect } from "react-redux";
//components
import { ActivitieList } from "../ActivitieList";
import { InformationHeader } from "../../../global/components/InformationHeader";
//styled-components
import { PageContainer } from "../../../global/styles/Containers";
import { Activities, ActivitiesContainer } from "./styles";
import { H3 } from "../../../global/styles/texts";
//main
function ProjectPage(props) {
  //debugger;
  const { name, description, dueDate, activities } = props;
  return (
    <PageContainer>
      <InformationHeader title={name} imageIsShow={false} about={description} />
      <Activities>
        <H3>Actividades del proyecto</H3>
        <ActivitiesContainer>
          <ActivitieList activities={activities.pending} title="Pendientes" />
          <ActivitieList activities={activities.inProgress} title="En curso" />
          <ActivitieList activities={activities.doned} title="Terminadas" />
        </ActivitiesContainer>
      </Activities>
    </PageContainer>
  );
}
//redux
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
