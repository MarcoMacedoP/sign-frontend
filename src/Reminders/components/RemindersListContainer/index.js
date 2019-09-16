//components
import React from "react";
import { RemindersList } from "../RemindersList";
import { EmptyReminders } from "../EmptyReminders";

//hooks
import { useHandleState } from "../../../global/hooks/useHandleState";
import { useModalState } from "../../../global/hooks/useModalState";

/**The container of RemindersList. Contains all the logic.
 *
 * @param {*} small Boolean,use it for make the layout
 *  small for used into other components
 */
export function RemindersListContainer({ small = false }) {
  //state
  const { state, addValueToState } = useHandleState({ reminders: [] });
  const addReminder = () => {
    addValueToState("reminders", [
      ...state.reminders,
      { title: "nuevo recordatorio" }
    ]);
  };
  //modals
  const { handleModal, modalIsOpen } = useModalState();

  //return main component
  if (state.reminders.length === 0) {
    //no reminders
    return <EmptyReminders handleAddReminder={addReminder} />;
  } else {
    //return reminders
    return (
      <RemindersList
        handleAddReminder={addReminder}
        reminders={state.reminders}
        small={small}
        modalIsOpen={modalIsOpen}
        handleModal={handleModal}
      />
    );
  }
}
