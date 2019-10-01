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
}) => (
  <Menu onMouseLeave={onClose} isShowed={isShowed}>
    {menuItems.map(item => (
      <ToastMenuItem
        icon={item.icon}
        title={item.title}
        direction={item.direction}
        isShowed={isShowed}
        onClick={item.onClick}
      />
    ))}
  </Menu>
);
const ToastMenuItem = ({
  isShowed,
  onClick,
  direction,
  icon,
  title
}) => (
  <MenuItem onClick={onClick} isShowed={isShowed}>
    <Link to={direction}>{title}</Link>
    <Icon icon={icon} hasAnimatedClick={false} />
  </MenuItem>
);
