import React from "react";
//components
import {Modal, Comments} from "../../../global/components";
//redux
import {connect} from "react-redux";
import {addCommentToActivitie} from "../../../global/redux/actions/projects";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
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
function ActivitieModal(props) {
  const {
    isOpen,
    onClose,
    activitie,
    project,
    addCommentToActivitie
  } = props;
  const {name, description, dueDate, comments} = activitie;

  const {state, addFormValueToState} = useHandleState({
    actualComment: ""
  });
  const handleAddComment = () =>
    addCommentToActivitie({
      project,
      activitie,
      comment: {
        id: 991881,
        userId: 2992,
        content: state.actualComment
      }
    });
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <H3>{name}</H3>
      <p>{description}</p>
      <p>{dueDate}</p>
      <Comments
        comments={comments}
        handleChange={addFormValueToState}
        actualComment={state.actualComment}
        addCommentHandler={handleAddComment}
      />
    </Modal>
  );
}
export default connect(
  null,
  {addCommentToActivitie}
)(ActivitieModal);
