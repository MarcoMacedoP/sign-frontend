import React from "react";
import {
  Title,
  Container,
  Card,
  Icon,
  Description,
  MaterialArrowForward
} from "./styles";
import iconClient from "../../utils/icons/Clients.svg";
import iconProjects from "../../utils/icons/Projects.svg";
import iconProviders from "../../utils/icons/Providers.svg";
import iconReminders from "../../utils/icons/Reminders.svg";
import iconTeams from "../../utils/icons/Teams.svg";

export const Dashboard = (props) => {
  return (
    <Container>
      <NavigationCard
        linkDirection="/app/projects/"
        title="Proyectos"
        icon={iconProjects}
        description="Organiza, crea proyectos y controla los detalles con precisión milimétrica."
      />
      <NavigationCard
        linkDirection="/app/clients/"
        title="Clientes"
        icon={iconClient}
        description="Organiza y lleva un seguimiento de tus clientes más importantes."
      />
      <NavigationCard
        linkDirection="/app/providers/"
        title="Proveedores"
        icon={iconProviders}
        description="Administra a tus proveedores y los servicisos o productos que te ofrecen."
      />
      <NavigationCard
        linkDirection="/app/teams/"
        title="Colaboradores"
        icon={iconTeams}
        description="Crea equipos de trabajo con diferentes usuarios."
      />
      <NavigationCard
        linkDirection="/app/reminders/"
        title="Recordatorios"
        icon={iconReminders}
        description="¡No olvides las cosas importantes! Crea recordatorios para ti tus equipos."
      />
    </Container>
  );
};

export const NavigationCard = ({
  icon,
  title,
  linkDirection,
  description
}) => {
  const [ cardStatus, setCardStatus ] = React.useState(false);
  return (
    <Card
      to={linkDirection}
      onMouseOver={() => setCardStatus(true)}
      onMouseOut={() => setCardStatus(false)}>
      <Icon src={icon} alt={`Icono de ${title}`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <MaterialArrowForward status={cardStatus}>
        arrow_forward_ios
      </MaterialArrowForward>
    </Card>
  );
};