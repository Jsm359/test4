import React from "react";
import { Navigate } from "react-router-dom";
import { CalendarPage } from "../pages/CalendarPage/Calendar";
import { Login } from "../pages/LoginPage/Login";


export enum RouteNames {
  LOGIN = '/login',
  CALENDAR = '/'
}

export const publicRoutes = [
  {path: RouteNames.LOGIN, element: <Login /> },
  {path: '*', element: <Navigate to='/login' />},
]

export const privateRoutes = [
  {path: RouteNames.CALENDAR, element: <CalendarPage />},
  {path: '*', element: <Navigate to='/'/>},
]