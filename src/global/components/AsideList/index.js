//libs
import React from "react";
//components
import {Icon} from "../Icon";
//hooks
import {useHandleState} from "../../hooks";
//styled-components
import {Subtitle} from "../../styles/texts";
import {Aside, Navigation, AsideListItemBase} from "./styles";
/**
 * Shows an Aside list
 * @param {*} title the name of the list
 */
export const AsideList = ({
  title,
  children,
  isShowed,
  toggleAsideList
}) => {
  const {state, addValueToState} = useHandleState({
    icon: "close"
  });
  const handleToggle = () => {
    if (!isShowed) {
      addValueToState("icon", "close");
    } else {
      addValueToState("icon", "arrow_forward_ios");
    }
    toggleAsideList();
  };
  return (
    <Aside isShowed={isShowed}>
      <Navigation isShowed={isShowed}>
        <Subtitle>{title}</Subtitle>
        <Icon icon={state.icon} onClick={handleToggle} />
      </Navigation>
      {children}
    </Aside>
  );
};

export const AsideListItem = props => (
  <AsideListItemBase {...props} />
);
