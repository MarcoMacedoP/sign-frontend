import React from "react";
//components
import {Link} from "react-router-dom";
import {Icon} from "../Icon";
//styled-components
import {MenuItem, Menu} from "./styles";
//component
export const ToastMenu = ({
  isShowed,
  onClose,
  menuItems = [
    {
      icon: "",
      direction: "",
      title: "",
      onClick: function() {}
    }
  ]
}) => {
  let count = 0;
  return (
    <Menu onMouseLeave={onClose} isShowed={isShowed}>
      {menuItems.map(item => {
        count++;
        return (
          <ToastMenuItem
            key={count}
            icon={item.icon}
            title={item.title}
            direction={item.direction}
            isShowed={isShowed}
            onClick={item.onClick}
          />
        );
      })}
    </Menu>
  );
};
const ToastMenuItem = ({
  isShowed,
  onClick,
  direction,
  icon,
  title
}) => (
  <MenuItem onClick={onClick} isShowed={isShowed}>
    {direction ? <Link to={direction}>{title}</Link> : <p>{title}</p>}
    <Icon icon={icon} hasAnimatedClick={false} />
  </MenuItem>
);
