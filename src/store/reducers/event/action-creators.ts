import { AppDispatch } from './../../index';
import { User } from './../../../models/Users';
import { Event } from './../../../models/Event';
import { SetGuestsAction, SetEventsAction, EventActionEnum } from './types';
import UserService from '../../../API/ServiceUser';

export const EventActionCreators = {
  SetGuests: (payload:User[]): SetGuestsAction => ({type:EventActionEnum.SET_GUESTS, payload}),
  SetEvents: (payload:Event[]): SetEventsAction => ({type:EventActionEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers()
      dispatch(EventActionCreators.SetGuests(response.data))
    } catch (e) {
      console.log(e)
    }
  },
  createEvent: (event: Event) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Event[];
      json.push(event)
      dispatch(EventActionCreators.SetEvents(json))
      localStorage.setItem('events',JSON.stringify(json))
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as Event[];
      const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
      dispatch(EventActionCreators.SetEvents(currentUserEvents))
    } catch (e) {
      console.log(e);
    }
  }
}