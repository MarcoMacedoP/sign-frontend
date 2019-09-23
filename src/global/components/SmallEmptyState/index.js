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
//component
/**Component for showing an small empty state.
 *
 * @param {*} message message to be showed on empty state, use an array for making  paragraphs
 * @param {*} image the image to be showed, can be null
 *  @param {*} children the children, maybe an AddButton (?)
 * @param {*} callToAction a message to be showed with a bolder font
 */
export const SmallEmptyState = ({
  message,
  image = defaultImage,
  children,
  callToAction,
  showTitle = true
}) => (
  <Container>
    <Title>{showTitle && "Uhm..."}</Title>
    <Picture>
      <Img src={image} alt={message} />
    </Picture>

    {Array.isArray(message) ? (
      message.map(paragraph => <Message>{paragraph}</Message>)
    ) : (
      <Message> {message} </Message>
    )}
    <CallToAction>{callToAction}</CallToAction>
    {children}
  </Container>
);
