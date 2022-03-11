import React from 'react';
import { Layout } from 'antd';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Navbar } from './components/navbar/Navbar';
import  './App.css'


export const App = () => {
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
