import React from "react";
import {Subtitle} from "../../../global/styles/texts";

function Reminder({title, description, date}) {
  return (
    <section>
      <Subtitle>{title}</Subtitle>
      <p>{description}</p>
      <date>{date}</date>
    </section>
  );
}
export default Reminder;
