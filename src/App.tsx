import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Navbar } from './components/navbar/Navbar';
import  './App.css'
import { useActions } from './hooks/useActions';
import { User } from './models/Users';


export const App = () => {
  const {setUser, setIsAuth} = useActions()
  
  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as User)
      setIsAuth(true)
    }
  }, [])

  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
