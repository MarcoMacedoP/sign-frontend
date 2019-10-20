//components
import React from "react";
import {
  LongCard,
  InformationHeader,
  Comments
} from "../../../global/components";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {RemindersListContainer} from "../../../Reminders/components/RemindersListContainer";
//styled-components
import {Article, Section} from "./styles";
//redux
import {connect} from "react-redux";
import {PageContainer} from "../../../global/styles/Containers";
function ClientPage({client}) {
  const initialState = {
    projects: [],
    comments: [],
    reminders: [],
    actualComment: "",
    id: "",
    name: "Nombre (s)",
    lastname: "Apellido (s)",
    email: "",
    phone: ""
  };
  const {
    comments = [],
    name,
    lastname,
    phone,
    email,
    reminders = [],
    projects = []
  } = client;
  const {
    state,
    addArrayValueToState,
    addFormValueToState
  } = useHandleState(initialState);

  function addCommentHandler() {
    const date = new Date();

    addArrayValueToState(state.comments, "comments", {
      content: state.actualComment,
      clientId: state.id,
      date
    });
  }

  return (
    <PageContainer>
      <InformationHeader
        title={`${name} ${lastname}`}
        imageIsShow={false}
        about="Acerca del cliente"
        phone={phone}
        email={email}
      />

      <Article>
        <h2>Seguimiento de cliente </h2>
        <Section>
          <Comments
            comments={comments}
            actualComment={state.actualComment}
            handleChange={addFormValueToState}
            addCommentHandler={addCommentHandler}
          />
        </Section>
      </Article>
      <Article>
        <h2>Recordatorios</h2>
        <Section>
          <RemindersListContainer reminders={reminders} />
        </Section>
      </Article>

      <Article>
        <h2>Lista de proyectos</h2>
        <ul>
          {projects.map(id => (
            <LongCard key={id} />
          ))}
        </ul>
      </Article>
    </PageContainer>
  );
}

const mapStateToProps = ({clients}, props) => {
  debugger;
  const clientId = parseInt(props.match.params.clientId);
  const [client] = clients.list.filter(
    client => client.client_id === clientId
  );
  return {client};
};
export default connect(
  mapStateToProps,
  null
)(ClientPage);
