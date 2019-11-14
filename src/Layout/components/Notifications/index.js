import React from "react";
//redux
import {connect} from "react-redux";
//styled-components
import {
  Title,
  StyledNotifications,
  StyledNotification,
  NotificationInfo
} from "./styles";
import {Caption, Subtitle} from "../../../global/styles/texts";
//components
import {SmallEmptyState, Icon} from "../../../global/components";

function Notifications({isShowed, notificationList = [], onClose}) {
  return (
    <StyledNotifications isShowed={isShowed} onClose={onClose}>
      <Title>Notificaciones</Title>
      {notificationList.length > 0 ? (
        notificationList.map(notification => (
          <Notification
            title={notification.title}
            about={notification.about}
          />
        ))
      ) : (
        <SmallEmptyState message="Ups aún no tienes notificationes" />
      )}
    </StyledNotifications>
  );
}
const Notification = ({title, about}) => (
  <StyledNotification isReaded={false}>
    <Icon icon="notifications" />

    <NotificationInfo>
      <Subtitle>{title || "titulo"}</Subtitle>
      <Caption>{about || "acerca de ..."}</Caption>
    </NotificationInfo>
  </StyledNotification>
);

const mapStateToProps = ({user}) => ({
  notificationList: user.notifications || []
});

export default connect(
  mapStateToProps,
  null
)(Notifications);
