import React from "react";
import {Article, Section, Children} from "./styles";
import {H3} from "../../styles/texts";

export const InfoLayout = ({children, title, info}) => (
  <Article>
    <Section>
      <H3>{title}</H3>
      <p>{info}</p>
    </Section>
    <Children>{children}</Children>
  </Article>
);
