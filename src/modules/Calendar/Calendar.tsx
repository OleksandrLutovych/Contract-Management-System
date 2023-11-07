import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      height="100%"
      headerToolbar={{
        start: "title",
        center: "",
        end: "today prev,next",
      }}
    />
  );
};

export default Calendar;
