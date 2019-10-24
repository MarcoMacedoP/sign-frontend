//components
import React from "react";
import {ReminderModal} from "../ReminderModal";
import {List} from "../../../global/components/";
import {EmptyReminders} from "../EmptyReminders";

//hooks
import {useModalState} from "../../../global/hooks/useModalState";
import {useEffect, useState} from "react";
//redux
import {connect} from "react-redux";
import {fetchReminders} from "../../../global/redux/actions/reminders";

export function RemindersList({
  remindersList = [],
  shuldFetchReminders,
  errorOnFetchReminders,
  loadingFetchReminders,
  fetchReminders
}) {
  const {handleModal, modalIsOpen} = useModalState();
  //fetch handling
  useEffect(() => {
    if (shuldFetchReminders) {
      fetchReminders();
    }
  }, [shuldFetchReminders]);
  //error handling
  const [error, setError] = useState(null);
  useEffect(() => setError(errorOnFetchReminders), [
    errorOnFetchReminders
  ]);
  const setErrorToNull = () => setError(null);

  return (
    <List
      title="Recordatorios recientes"
      error={error}
      onErrorClose={setErrorToNull}
      isLoading={loadingFetchReminders}
    >
      <ReminderModal isOpen={modalIsOpen} onClose={handleModal} />
      {remindersList.length === 0 ? (
        <EmptyReminders />
      ) : (
        remindersList.map(reminder => (
          <p onClick={handleModal}>{reminder.title}</p>
        ))
      )}
      <label>Agregar un recordatorio</label>
    </List>
  );
}

const mapStateToProps = ({reminders}) => {
  // eslint-disable-next-line no-debugger
  debugger;
  console.log(reminders);
  return {
    remindersList: reminders.list,
    shuldFetchReminders: reminders.status.shuldFetchReminders,
    errorOnFetchReminders: reminders.status.errorOnFetchReminders,
    loadingFetchReminders: reminders.status.loadingFetchReminders
  };
};

export default connect(
  mapStateToProps,
  {fetchReminders}
)(RemindersList);
