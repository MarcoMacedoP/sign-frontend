import React from "react";
import {Subtitle} from "../../../global/styles/texts";

function Reminder({title, description, date, status}) {
  return (
    <section>
      <Subtitle>{title}</Subtitle>
      <p>{description}</p>
      <p>{status}</p>
      <date>{date}</date>
    </section>
  );
}
export default Reminder;
