import React from "react";
import {
  Title,
  Container,
  Card,
  Icon,
  Description,
  MaterialArrowForward
} from "./styles";
import iconClient from "./icons/Clients.svg";
import iconProjects from "./icons/Projects.svg";
import iconProviders from "./icons/Providers.svg";
import iconReminders from "./icons/Reminders.svg";
import iconTeams from "./icons/Teams.svg";
import { toggleStatus } from "../../utils/functions/toggleStatus";
export const Dashboard = (props) => {
  return (
    <Container>
      <NavigationCard
        linkDirection="/projects/"
        title="Proyectos"
        icon={iconProjects}
        description="Organiza, crea proyectos y controla los detalles con precisión milimétrica."
      />
      <NavigationCard
        linkDirection="/clients/"
        title="Clientes"
        icon={iconClient}
        description="Organiza y lleva un seguimiento de tus clientes más importantes."
      />
      <NavigationCard
        linkDirection="/providers/"
        title="Proveedores"
        icon={iconProviders}
        description="Administra a tus proveedores y los servicisos o productos que te ofrecen."
      />
      <NavigationCard
        linkDirection="/teams/"
        title="Colaboradores"
        icon={iconTeams}
        description="Crea equipos de trabajo con diferentes usuarios."
      />
      <NavigationCard
        linkDirection="/reminders/"
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
      onMouseOver={() => setCardStatus(toggleStatus(cardStatus))}
      onMouseOut={() => setCardStatus(toggleStatus(cardStatus))}>
      <Icon src={icon} alt={`Icono de ${title}`} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <MaterialArrowForward status={cardStatus}>
        arrow_forward_ios
      </MaterialArrowForward>
    </Card>
  );
};
