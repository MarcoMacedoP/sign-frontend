import React from "react";
import { connect } from "react-redux";
//components
import { ActivitieList } from "../ActivitieList";
import { InformationHeader } from "../../../global/components/InformationHeader";
//styled-components
import { PageContainer } from "../../../global/styles/Containers";
import { Activities, Title, ActivitiesContainer } from "./styles";
//main
function ProjectPage(props) {
  //debugger;
  const { name, description, dueDate, activities } = props;
  return (
    <PageContainer>
      <InformationHeader title={name} imageIsShow={false} about={description} />
      <Activities>
        <Title>Actividades del proyecto</Title>
        <ActivitiesContainer>
          <ActivitieList activities={activities.pending} />
          <ActivitieList activities={activities.inProgress} />
          <ActivitieList activities={activities.doned} />
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
