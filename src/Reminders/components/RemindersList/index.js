//components
import React from "react";
import {ReminderModal} from "../ReminderModal";
import {List} from "../../../global/components/";
import {EmptyReminders} from "../EmptyReminders";
import AddReminder from "../AddReminder";
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
  //modals
  const {
    handleModal: handleReminderModal,
    modalIsOpen: reminderModalIsOpen
  } = useModalState();
  const {
    handleModal: handleAddReminderModal,
    modalIsOpen: addReminderModalIsOpen
  } = useModalState();
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
      onAddButtonClick={handleAddReminderModal}
    >
      <AddReminder
        isOpen={addReminderModalIsOpen}
        onClose={handleAddReminderModal}
      />
      <ReminderModal
        isOpen={reminderModalIsOpen}
        onClose={handleReminderModal}
      />
      {remindersList.length === 0 && <EmptyReminders />}
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
