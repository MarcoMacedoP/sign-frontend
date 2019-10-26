import React from "react";
//components
import {RemindersList} from "../RemindersList";
//redux
import {connect} from "react-redux";
import {fetchReminders} from "../../../global/redux/actions/reminders";
//hooks
import {useModalState} from "../../../global/hooks/useModalState";
import {useEffect, useState} from "react";
//const
const REMINDER_STATUS = {
  OK: "OK",
  WARNING: "WARNING",
  DANGER: "DANGER",
  ARCHIVED: "ARCHIVED"
};
export function RemindersListContainer({
  remindersList = [],
  shuldFetchReminders,
  errorOnFetchReminders,
  loadingFetchReminders,
  fetchReminders
}) {
  // eslint-disable-next-line no-debugger
  debugger;
  //modals
  const {
    handleModal: toggleAddReminderModal,
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
  //handling status on reminders
  const [archivedReminders, setArchivedReminders] = useState([]);
  const [notRelevantReminders, setNotRelevantReminders] = useState([]); // prettier-ignore
  const [relevantReminders, setRelevantReminders] = useState([]);

  const filterReminders = toBeEqual =>
    remindersList.filter(reminder => reminder.status === toBeEqual);

  useEffect(() => {
    setArchivedReminders(filterReminders(REMINDER_STATUS.ARCHIVED));
    setNotRelevantReminders(filterReminders(REMINDER_STATUS.OK));
    setRelevantReminders([
      ...filterReminders(REMINDER_STATUS.WARNING),
      ...filterReminders(REMINDER_STATUS.DANGER)
    ]);
  }, [remindersList]);

  return (
    <RemindersList
      onErrorClose={setErrorToNull}
      error={error}
      isLoading={loadingFetchReminders}
      addReminderIsOpen={addReminderModalIsOpen}
      toggleAddReminder={toggleAddReminderModal}
      archivedReminders={archivedReminders}
      notRelevantReminders={notRelevantReminders}
      relevantReminders={relevantReminders}
    />
  );
}

const mapStateToProps = ({reminders}) => {
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
)(RemindersListContainer);
