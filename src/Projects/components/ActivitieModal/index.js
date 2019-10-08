import React from "react";
//components
import {Modal, Comments, Icon} from "../../../global/components";
//redux
import {connect} from "react-redux";
import {addCommentToActivitie} from "../../../global/redux/actions/projects";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
//styled-components
import {H3} from "../../../global/styles/texts";
import {Description, Date} from "./styles";

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
  const initialState = {
    actualComment: ""
  };
  const {
    state,
    addFormValueToState,
    addValueToState
  } = useHandleState(initialState);
  const handleAddComment = () => {
    addCommentToActivitie({
      project,
      activitie,
      comment: {
        id: 991881,
        userId: 2992,
        content: state.actualComment
      }
    });
    addValueToState("actualComment", "");
    ;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <H3>{name}</H3>
      <Description>{description}</Description>
      <Date>
        <Icon size={12} icon="access_time" hasAnimatedClick={false} />
        {` ${dueDate}`}
      </Date>
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
