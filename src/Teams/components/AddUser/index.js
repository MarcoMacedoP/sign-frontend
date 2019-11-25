import React from "react";
import styled from "styled-components";
import { H3 } from "../../../global/styles/texts";
import { Button } from "../../../global/components";
import { Modal } from "../../../global/components/Modal";
import { connect } from "react-redux";
import { Input } from "../../../global/components";
//hooks
import { useHandleState } from "../../../global/hooks";

const StyledModal = styled(Modal)`
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function AddUser({ isOpen, onClose, teamId }) {
  const { state, addFormValueToState } = useHandleState({ email: "" });
  const addUserToTeam = () => console.log({ teamId, ...state });

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <H3>Agregar usuario</H3>
      <Input
        label="Email del usario"
        name="emial"
        onChange={addFormValueToState}
        placeholder="test@example.com"
        value={state.email}
        type="email"
      />
      <Button onClick={addUserToTeam}> Agregar</Button>
    </StyledModal>
  );
}

export default connect(null, null)(AddUser);
