import React from "react";
import {BaseIcon} from "./styles";

/**This component shows material icons from Google
 *
 * @param {*} onClick the function to be executed onClick
 * @param  {*} hasAnimatedClick boolean to animate icon,
 *                                 default is true
 * @param {*} icon the material icon for be displayed
 * @param {*} size the size of the icon on px, must be an integer,
 *                                      default is 24
 */
export const Icon = ({
  onClick,
  hasAnimatedClick = true,
  icon,
  size = 24,
  className
}) => (
  <BaseIcon
    className={className}
    onClick={onClick}
    hasAnimatedClick={hasAnimatedClick}
    hasAction={onClick ? true : false}
    size={size}
  >
    {icon}
  </BaseIcon>
);
