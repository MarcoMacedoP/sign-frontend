//libs
import React from "react";
//components
import {Icon} from "../Icon";
import {Redirect} from "react-router-dom";
//hooks
import {useHandleState} from "../../hooks";
import {useLastLocation} from "react-router-last-location";
//styled-components
import {Subtitle} from "../../styles/texts";
import {Aside, Navigation, AsideListItemBase} from "./styles";
//utils
import {APP_HOME_ROUTE} from "../../utils/routes";
/**
 * Shows an Aside list
 * @param {*} title the name of the list
 */
export const AsideList = ({title, children}) => {
  const {state, toggleStateValue} = useHandleState({
    goBack: false
  });
  const lastLocation = useLastLocation() || APP_HOME_ROUTE;
  const goLastPage = () => toggleStateValue("goBack");

  return (
    <Aside>
      {state.goBack && <Redirect to={lastLocation} />}
      <Navigation>
        <Icon icon="arrow_back" onClick={goLastPage} />
        <Subtitle>{title}</Subtitle>
      </Navigation>
      {children}
    </Aside>
  );
};

export const AsideListItem = props => (
  <AsideListItemBase {...props} />
);
