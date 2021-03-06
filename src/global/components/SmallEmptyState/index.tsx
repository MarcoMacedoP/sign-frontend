import React from "react";

//image
import defaultImage from "../../static/img/no_data.svg";
//styled-components}
import {
  Img,
  Picture,
  Container,
  Title,
  Message,
  CallToAction
} from "./styles";

export interface SmallEmptyStateProps {
  message: Array<string> | string;
  image?: string;
  callToAction?: string;
  showTitle?: boolean;
  className?: string;
}
/**Component for showing an small empty state.
 *
 * @param {*} message message to be showed on empty state, use an array for making  paragraphs
 * @param {*} image the image to be showed, can be null
 *  @param {*} children the children, maybe an AddButton (?)
 * @param {*} callToAction a message to be showed with a bolder font
 */
export const SmallEmptyState: React.FC<SmallEmptyStateProps> = ({
  message,
  image = defaultImage,
  children,
  callToAction,
  showTitle = true,
  className
}) => (
  <Container className={className}>
    <Title>{showTitle && "Hmm..."}</Title>
    <Picture>
      <Img src={image} alt={message} />
    </Picture>

    {Array.isArray(message) ? (
      message.map((paragraph, index) => (
        <Message key={index}>{paragraph}</Message>
      ))
    ) : (
      <Message> {message} </Message>
    )}
    <CallToAction>{callToAction}</CallToAction>
    {children}
  </Container>
);
