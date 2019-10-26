import React from "react";
import {ReminderModal} from "../ReminderModal";
import {List} from "../../../global/components";
import {EmptyReminders} from "../EmptyReminders";
import AddReminder from "../AddReminder";
import Reminder from "../Reminder";

export function RemindersList(props) {
  const {
    onErrorClose,
    error,
    isLoading,
    addReminderIsOpen,
    toggleAddReminder,
    archivedReminders = [],
    notRelevantReminders = [],
    relevantReminders = []
  } = props;

  return (
    <List
      title="Recordatorios recientes"
      error={error}
      onErrorClose={onErrorClose}
      isLoading={isLoading}
      onAddButtonClick={toggleAddReminder}
    >
      <AddReminder
        isOpen={addReminderIsOpen}
        onClose={toggleAddReminder}
      />
      <ReminderModal
        isOpen={addReminderIsOpen}
        onClose={toggleAddReminder}
      />
      {!isLoading &&
      notRelevantReminders.length === 0 &&
      relevantReminders.length === 0 ? (
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
