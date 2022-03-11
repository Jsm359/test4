import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { privateRoutes, publicRoutes} from '../../routes'

export const AppRouter = () => {
  const {isAuth} = useTypedSelector(state => state.auth)
  return (
    isAuth
        ?
        <Routes>
          {privateRoutes.map(route =>
            <Route path={route.path} element={route.element} key={route.path} />  
          )}
            
        </Routes>
        :
        <Routes>
          {publicRoutes.map(route =>
            <Route path={route.path} element={route.element} key={route.path} />  
          )}
        </Routes>
  )
}
