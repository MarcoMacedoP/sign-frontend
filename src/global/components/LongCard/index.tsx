import * as React from "react";
import {
  Container,
  Picture,
  Title,
  About,
  PictureContainer,
  IconContainer
} from "./styles";
//components
import { Icon } from "../Icon";

interface LongCardProps {
  title: string;
  date?: Date;
  picture?: string;
  about: string;
  onClick: Function;
}
/**
 * @description Makes a long card full size of the width
 */
export const LongCard: React.FC<LongCardProps> = ({
  about,
  onClick,
  date,
  title,
  picture
}) => (
  <Container onClick={onClick}>
    {picture && (
      <PictureContainer>
        <Picture image={picture} />
      </PictureContainer>
    )}
    <Title>{title}</Title>

    <About>{date || about}</About>
    <IconContainer>
      <Icon icon="arrow_forward_ios" />
    </IconContainer>
  </Container>
);
