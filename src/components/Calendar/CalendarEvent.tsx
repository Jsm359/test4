import { Calendar } from 'antd'
import { Moment } from 'moment';
import React, { FC } from 'react'
import { formatDate } from '../../utils/date';
import { Event } from '../../models/Event'

export interface CalendarEventProps {
  events: Event[];
}

export const CalendarEvent:FC<CalendarEventProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formatedDate = formatDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
    return (
      <div>
        {currentDayEvents.map((ev, index) =>
          <div key={index}>{ev.description}</div>
        )}
      </div>
    );
  }
  return (
    <Calendar dateCellRender={dateCellRender} />
  )
}
