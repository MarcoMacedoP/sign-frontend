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
export const REMINDER_STATUS = {
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
  //modals
  const [
    addReminderModalIsOpen,
    toggleAddReminderModal
  ] = useModalState();
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
  const [notArchivedReminders, setNotArchivedReminders] = useState([]); // prettier-ignore
  const filterReminders = toBeEqual =>
    remindersList.filter(reminder => reminder.status === toBeEqual);

  useEffect(() => {
    setArchivedReminders(filterReminders(REMINDER_STATUS.ARCHIVED));
    setNotArchivedReminders([
      ...filterReminders(REMINDER_STATUS.DANGER),
      ...filterReminders(REMINDER_STATUS.WARNING),
      ...filterReminders(REMINDER_STATUS.OK)
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
      notArchivedReminders={notArchivedReminders}
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
