//components
import React from "react";
import {Redirect} from "react-router-dom";
import {
  LongCard,
  InformationHeader,
  Comments,
  RemoveModal
} from "../../../global/components";
//hooks
import {
  useHandleState,
  useModalState,
  useRedirect
} from "../../../global/hooks/";
//styled-components
import {Article, Section} from "./styles";
import {PageContainer} from "../../../global/styles/Containers";
//redux
import {connect} from "react-redux";
import {fetchRemoveClient} from "../../../global/redux/actions/clients";
//utils
import {
  CLIENTS_ROUTE,
  EDIT_CLIENT_ROUTE
} from "../../../global/utils/routes";
function ClientPage({client = {}, fetchRemoveClient}) {
  //check if client exists.
  if (!client.client_id) {
    return <Redirect to={CLIENTS_ROUTE} />;
  }

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
  //onRemove handlers
  const [modalIsOpen, toggleModal] = useModalState(false);
  const onCancelRemove = () => toggleModal();
  const onRemove = () => {
    fetchRemoveClient(client.client_id);
    toggleModal();
  };
  //onEdit handler
  const {isRedirect, route, toggleRedirect} = useRedirect();
  const redirectToEdit = () =>
    toggleRedirect(`${EDIT_CLIENT_ROUTE}/${client.client_id}`);

  if (isRedirect) {
    return <Redirect to={route} />;
  }
  return (
    <PageContainer>
      <InformationHeader
        title={`${name} ${lastname}`}
        imageIsShow={false}
        about="Acerca del cliente"
        phone={phone}
        email={email}
        options={[
          {
            icon: "delete_outline",
            title: "Eliminar",
            onClick: toggleModal
          },
          {
            icon: "edit",
            title: "Editar cliente",
            onClick: redirectToEdit
          }
        ]}
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
        <Section></Section>
      </Article>
      <Article>
        <h2>Lista de proyectos</h2>
        <ul>
          {projects.map(id => (
            <LongCard key={id} />
          ))}
        </ul>
      </Article>
      <RemoveModal
        headline="Eliminar cliente"
        message={`Estas a punto de eliminar a ${name}, esta acción no se puede deshacer. ¿Estás seguro?`}
        isOpen={modalIsOpen}
        onCancel={onCancelRemove}
        onRemove={onRemove}
      />
    </PageContainer>
  );
}

const mapStateToProps = ({clients}, props) => {
  const clientId = parseInt(props.match.params.clientId);
  const [client] = clients.list.filter(
    client => client.client_id === clientId
  );
  return {client};
};

export default connect(
  mapStateToProps,
  {fetchRemoveClient}
)(ClientPage);
