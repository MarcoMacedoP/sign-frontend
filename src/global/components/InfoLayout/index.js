import React from "react";
import {Article, Section, Children} from "./styles";
import {H3} from "../../styles/texts";

/**
 * Displays a layout with information on le left size and
 * children components on the other side
 *
 * @param {*} title the title to be displayed
 * @param {*} info the info to be showed. Use this to explain things to user
 * @param {*} children components to be rendered on rigth page side
 */
export const InfoLayout = ({children, title, info}) => (
  <Article>
    <Section>
      <H3>{title}</H3>
      <p>{info}</p>
    </Section>
    <Children>{children}</Children>
  </Article>
);
