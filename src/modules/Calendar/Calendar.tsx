import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FC } from "react";
import { Event } from "./types";

type Props = {
  events: Event[];
};

const Calendar: FC<Props> = ({ events }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="auto"
      headerToolbar={{
        start: "title",
        center: "",
        end: "today prev,next",
      }}
      events={events}
    />
  );
};

export default Calendar;
