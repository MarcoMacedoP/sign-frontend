//components
import React from "react";
import {ReminderModal} from "../ReminderModal";
import {List} from "../../../global/components/";
import {EmptyReminders} from "../EmptyReminders";
import AddReminder from "../AddReminder";
import Reminder from "../Reminder";
//functions
import {compareDateToTodayInDays} from "../../../global/functions/compareDateToTodayInDays";
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
      {remindersList.length === 0 ? (
        <EmptyReminders />
      ) : (
        archivedReminders.map(reminder => (
          <Reminder
            key={reminder.reminder_id}
            title={reminder.title}
            description={reminder.description}
            date={reminder.date}
            status={reminder.status}
          />
        ))
      )}
    </List>
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
)(RemindersList);
