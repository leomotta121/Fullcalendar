import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

function Calendar() {
  const [events, setEvents] = useState([
    { title: "Default event", start: new Date() }
  ]);

  const calendarComponentRef = React.createRef();

  function handleDateClick(arg) {
    setEvents([
      ...events,
      {
        title: "title",
        start: arg.date
      }
    ]);
  }

  return (
    <div>
      <FullCalendar
        header={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
        }}
        events={events}
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        ref={calendarComponentRef}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default Calendar;
