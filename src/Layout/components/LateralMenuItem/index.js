import React from "react";

import { Icon } from "../../../global/components";
// styled-components
import { NavigationItem, NavigationItemTitle, Navicon } from "./styles";

export const LateralMenuItem = ({
  isShowed,
  direction,
  name,
  closeMenu,
  icon
}) => {
  return (
    <NavigationItem to={direction} onClick={closeMenu} isShowed={isShowed}>
      <Icon icon={icon} />
      {isShowed && (
        <>
          <NavigationItemTitle onClick={closeMenu}>{name}</NavigationItemTitle>
          <Navicon icon="chevron_right" isShowed={isShowed} />
        </>
      )}
    </NavigationItem>
  );
};
