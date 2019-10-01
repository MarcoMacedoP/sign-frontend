import React from "react";
//redux
import {connect} from "react-redux";
//components
import {InformationHeader} from "../../../global/components/";
//styled-components
import {Container} from "./styles";
//component
const UserPage = props => {
  const {user} = props;
  const {name, lastname, job, picture, bio} = user;
  return (
    <Container>
      <InformationHeader
        title={`${name} ${lastname}`}
        imageUrl={picture}
        about={bio}
      />
    </Container>
  );
};

const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  null
)(UserPage);
