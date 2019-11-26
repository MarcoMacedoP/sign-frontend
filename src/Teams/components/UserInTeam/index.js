import React from "react";
import { Item } from "../../../global/components/ItemList";
//redux
import { connect } from "react-redux";
//styles
import styled from "styled-components";
import {
  mainColorLight,
  secondaryColorLigth,
  blackColorTransparent
} from "../../../global/styles/variables";

const StyledRole = styled.p`
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${(props) =>
    props.role === "founder"
      ? mainColorLight
      : props.role === "admin"
      ? secondaryColorLigth
      : "none"};
  border: ${(props) =>
    props.role === "member" && `1px solid ${blackColorTransparent}`};
`;

function UserInTeam({ user }) {
  const userRole =
    user.role === "member"
      ? "Miembro"
      : user.role === "admin"
      ? "Admin"
      : "Creador";

  return (
    <Item name={user.userName} image={user.userPicture}>
      <StyledRole>{userRole}</StyledRole>
    </Item>
  );
}

export default connect(null, null)(UserInTeam);
