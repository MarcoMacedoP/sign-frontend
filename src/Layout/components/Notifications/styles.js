import styled from "styled-components";
import { Caption } from "../../../global/styles/texts";
import { blackColorLigth, whiteColor } from "../../../global/styles/variables";
import { ToastMenu } from "../../../global/components/ToastMenu";

export const StyledNotifications = styled(ToastMenu)`
  min-width: 300px;
  width: 40vw;
  max-width: 500px;
`;
export const Title = styled(Caption)`
  padding: 0.5rem;
  box-sizing: border-box;
  color: ${blackColorLigth};
`;
export const StyledNotification = styled.div`
  padding: 0.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: ${props => (props.isReaded ? "transparent" : whiteColor)};

  :hover {
    opacity: 0.76;
  }
`;
export const NotificationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
