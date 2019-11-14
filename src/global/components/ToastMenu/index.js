import React from "react";
//components
import {Link} from "react-router-dom";
import {Icon} from "../Icon";
//styled-components
import {MenuItem, Menu, Background} from "./styles";
//component

export const ToastMenu = ({
  className,
  children,
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
  const handleItemClick = onClick => {
    if (onClick) {
      onClick();
    }
    onClose();
  };
  return isShowed ? (
    <>
      <Background onClick={onClose} />
      <Menu isShowed={isShowed} className={className}>
        {children
          ? children
          : menuItems.map(item => {
              count++;
              return (
                <ToastMenuItem
                  key={count}
                  icon={item.icon}
                  title={item.title}
                  direction={item.direction}
                  isShowed={isShowed}
                  onClick={() => handleItemClick(item.onClick)}
                />
              );
            })}
      </Menu>
    </>
  ) : null;
};
const ToastMenuItem = ({
  isShowed,
  onClick,
  direction,
  icon,
  title
}) => (
  <MenuItem onClick={onClick} isShowed={isShowed}>
    <Icon icon={icon} hasAnimatedClick={false} />
    {direction ? <Link to={direction}>{title}</Link> : <p>{title}</p>}
  </MenuItem>
);
