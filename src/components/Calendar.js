import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

export default class Calendar extends React.Component {
  render() {
    return (
      <FullCalendar
        locale="ja"
        plugins={[ dayGridPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{ // カレンダーのヘッダー設定。(詳細は後述。※2)
          start: 'prev, next, today',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek'
        }}
      />
    )
  }
}