import React from "react";
//redux
import {connect} from "react-redux";
//hooks
import {useHandleState} from "../../../global/hooks/";
//components
import {InformationHeader, Input} from "../../../global/components/";
import {EditPage} from "../../../global/components/EditPage";
//styled-components
import {Container} from "./styles";

/**This component return a page with the user information.
 * editMode can be activated from the options of InforationHeader component.
 * In edit mode users can edit is own data.
 *
 */
const UserPage = ({user}) => {
  const {name, lastname, job, picture, bio} = user;
  const initialState = {
    editMode: true,
    name,
    lastname,
    job,
    picture,
    bio
  };
  const {state, addFormValueToState} = useHandleState(initialState);
  if (state.editMode) {
    return (
      <EditPage title="Editar perfil" onDelete={true}>
        <Input
          name="name"
          label="Nombre (s)"
          value={state.name}
          onChange={addFormValueToState}
        />
        <Input
          name="lastname"
          label="Apellido (s)"
          value={state.lastname}
          onChange={addFormValueToState}
        />
        <Input
          name="bio"
          type="textarea"
          label="Sobre ti"
          placeholder="ej. Soy una persona alegre, dispuesta a triunfar."
          value={state.bio}
          onChange={addFormValueToState}
        />
        <Input
          name="job"
          label="Título de trabajo"
          placeholder="ej. Ing. Industrial"
          value={state.job}
          onChange={addFormValueToState}
        />
      </EditPage>
    );
  }
  return (
    <Container>
      <InformationHeader
        title={`${name} ${lastname}`}
        imageUrl={picture}
        about={bio}
        job={job}
        options={[
          {
            title: "Editar perfil",
            onClick: () => console.log("editar user"),
            icon: "edit"
          }
        ]}
      />
    </Container>
  );
};

const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  null
)(UserPage);
