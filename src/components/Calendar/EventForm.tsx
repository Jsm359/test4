import { Button, DatePicker, Form, Input, Row, Select } from 'antd'
import React, { FC, useState } from 'react'
import { User } from '../../models/Users'
import { Event } from '../../models/Event'
import { rules } from '../../utils/rules'
import { Moment } from 'moment'
import { formatDate } from '../../utils/date'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export interface EventFormProps {
  guests: User[],
  submit: (event: Event) => void
}

export const EventForm:FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<Event>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as Event);

  const {user} = useTypedSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({...event, date: formatDate(date.toDate())})
    }
  }

  const submitForm = () => {
    props.submit({...event, author: user.username})
  }

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Название события"
        name="description"
        rules={[rules.required()]}
      >
        <Input value={event.description} onChange={e => setEvent({...event, description:e.target.value})} />
      </Form.Item>
      <Form.Item
        label="Дата"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Прошедшая дата')]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        label="Гость"
        name="guets"
        rules={[rules.required()]}
      >
        <Select onChange={(guest:string) => setEvent({...event, guest})}>
          {props.guests.map(guest =>
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          )}
        </Select>
      </Form.Item>
      <Row justify='start'>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  )
}
