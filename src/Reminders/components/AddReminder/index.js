import React from "react";
//components
import {Modal, AddPage, Input} from "../../../global/components/";
//redux
import {connect} from "react-redux";
import {fetchAddReminder} from "../../../global/redux/actions/reminders";
//hooks
import {useState, useEffect} from "react";
import {useHandleState} from "../../../global/hooks";
function AddReminder({
  loadingAddReminder,
  errorOnAddReminder,
  fetchAddReminder,
  onClose,
  isOpen
}) {
  //error handling
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnAddReminder), [errorOnAddReminder]);
  const setErrorToNull = () => setError(null);
  //state handling
  const {state, addFormValueToState} = useHandleState({
    title: "",
    description: "",
    date: ""
  });
  //handle submit
  const [requestHasSend, setRequestHasSend] = useState(false);
  const handleSubmit = () => {
    setRequestHasSend(true);
    fetchAddReminder(state);
  };
  useEffect(() => {
    if (requestHasSend && !error && !loadingAddReminder) {
      //it means that reminder whas added.
      onClose();
    }
  }, [requestHasSend, error, loadingAddReminder]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AddPage
        title="Agregar un recordatorio."
        aboutTitle="Sobre los recordatorios"
        about="Los recordatorios son una excelente manera de recordar las cosas importantes."
        isLoading={loadingAddReminder}
        error={error}
        onErrorClose={setErrorToNull}
        onSubmit={handleSubmit}
      >
        <Input
          value={state.title}
          name="title"
          label="Nombre del recordatorio"
          onChange={addFormValueToState}
        />
        <Input
          value={state.title}
          name="description"
          label="Agrega una descripción del recordatorio."
          onChange={addFormValueToState}
        />
        <Input
          value={state.title}
          name="date"
          type="date"
          label="Fecha"
          onChange={addFormValueToState}
        />
      </AddPage>
    </Modal>
  );
}

const mapStateToProps = ({reminders}) => ({
  loadingAddReminder: reminders.status.loadingAddReminder,
  errorOnAddReminder: reminders.status.errorOnAddReminder
});

export default connect(
  mapStateToProps,
  {fetchAddReminder}
)(AddReminder);
