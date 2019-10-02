import React from "react";
//redux
import {connect} from "react-redux";
//hooks
import {useState} from "react";
//components
import {InformationHeader} from "../../../global/components/";
//styled-components
import {Container} from "./styles";
import {EditUser} from "../EditUser";

/**This component return a page with the user information.
 * editMode can be activated from the options of InforationHeader component.
 * In edit mode users can edit is own data.
 *
 */
const UserPage = ({user}) => {
  const {name, lastname, job, picture, bio} = user;
  const [editMode, setEditMode] = useState(true);
  if (editMode) {
    return <EditUser {...user} />;
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
