import { Button, Layout, Modal, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { CalendarEvent } from '../../components/Calendar/CalendarEvent'
import { EventForm } from '../../components/Calendar/EventForm'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {Event} from '../../models/Event'


export const CalendarPage = () => {
  const [visible, setVisible] = useState(false)
  const {fetchGuests, createEvent, fetchEvents} = useActions()
  const {guests, events} = useTypedSelector(state => state.event)
  const {user} = useTypedSelector(state => state.auth)

  useEffect(() => {
    fetchGuests()
    fetchEvents(user.username)
  },[])

  const addEvent = (event: Event) => {
    setVisible(false)
    createEvent(event)
  }

  return (
    <Layout>
      <CalendarEvent events={events} />
      <Row justify='center'>
        <Button onClick={() => setVisible(true)}>Добавить событие</Button>
      </Row>
      <Modal title='Добавить событие' visible={visible} footer={null} onCancel={() => setVisible(false)}>
        <EventForm guests={guests} submit={addEvent} />
      </Modal>
    </Layout>
  )
}

