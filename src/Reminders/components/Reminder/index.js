import React from "react";
import {Subtitle} from "../../../global/styles/texts";

function Reminder({title, description, date, status}) {
  return (
    <section status={status}>
      <div>
        <Subtitle>{title}</Subtitle>
        <p>{description}</p>
        <p>{status}</p>
        <span>{date}</span>
      </div>
    </section>
  );
}
export default Reminder;
