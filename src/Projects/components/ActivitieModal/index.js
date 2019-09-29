import React from "react";
//components
import {Modal} from "../../../global/components";
//styled-components
import {H3} from "../../../global/styles/texts";

/**Modal for an Activitie
 *
 * @param {*} isOpen
 * @param {*} onClose
 * @param {*} name
 * @param {*} description
 * @param {*} date
 *
 *
 */
export function ActivitieModal(props) {
  const {isOpen, onClose, name, description, dueDate} = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <H3>{name}</H3>
      <p>{description}</p>
      <p>{dueDate}</p>
    </Modal>
  );
}
