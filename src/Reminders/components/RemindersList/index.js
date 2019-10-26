import React from "react";
//components
import {ReminderModal} from "../ReminderModal";
import {List} from "../../../global/components";
import {EmptyReminders} from "../EmptyReminders";
import AddReminder from "../AddReminder";
import Reminder from "../Reminder";
//styled-components
import {RelevantReminders} from "./styles";

export function RemindersList(props) {
  const {
    onErrorClose,
    error,
    isLoading,
    addReminderIsOpen,
    toggleAddReminder,
    // archivedReminders = [],
    notArchivedReminders = []
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
      <ReminderModal isOpen={false} onClose={toggleAddReminder} />
      {!isLoading && notArchivedReminders.length === 0 ? (
        <EmptyReminders />
      ) : (
        <RelevantReminders>
          {notArchivedReminders.map(reminder => (
            <Reminder
              key={reminder.reminder_id}
              title={reminder.title}
              description={reminder.description}
              date={reminder.date}
              status={reminder.status}
            />
          ))}
        </RelevantReminders>
      )}
    </List>
  );
}
