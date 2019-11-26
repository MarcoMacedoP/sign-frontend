import React from "react";
import styled from "styled-components";
import { H3 } from "../../../global/styles/texts";
import { Button } from "../../../global/components";
import { Modal } from "../../../global/components/Modal";
import { Input, ErrorMessage } from "../../../global/components";
//hooks
import { useHandleState, useError } from "../../../global/hooks";
//redux
import { connect } from "react-redux";
import { fetchAddMemberToTeam } from "../../../global/redux/actions/teams";

const StyledModal = styled(Modal)`
  min-width: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function AddUser({
  isOpen,
  onClose,
  teamId,
  errorData,
  fetchAddMemberToTeam,
  status
}) {
  const { state, addFormValueToState } = useHandleState({ email: "" });
  const [hasSubmit, setHasSubmit] = React.useState(false);
  const { error, setErrorToNull } = useError({
    updateErrorOnChange: errorData
  });
  React.useEffect(() => {
    if (error) {
      setHasSubmit(false);
    }
  }, [error]);

  React.useEffect(() => {
    if (hasSubmit) {
      onClose();
    }
  }, [hasSubmit]);
  const addUserToTeam = () => fetchAddMemberToTeam(teamId, state.email);
  const handleSubmit = () => {
    setHasSubmit(true);
    addUserToTeam();
  };

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <H3>Agregar usuario</H3>
      <Input
        label="Email del usario"
        name="email"
        onChange={addFormValueToState}
        placeholder="test@example.com"
        value={state.email}
        type="email"
      />
      <ErrorMessage error={error} onClose={setErrorToNull} />
      <Button loading={status === "loading"} onClick={handleSubmit}>
        Agregar
      </Button>
    </StyledModal>
  );
}
const mapStateToProps = (state) => {
  const { membersOnTeams } = state.teams.status;
  return {
    status: membersOnTeams.status,
    errorData: membersOnTeams.errorData
  };
};
export default connect(mapStateToProps, { fetchAddMemberToTeam })(AddUser);
