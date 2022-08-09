import { useState } from 'react'
import { api } from './api/api';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { RegisterList } from './components/RegisterList/RegisterList';
import { Registration } from './components/Registration/Registration';
import { CtxApp } from './context';

export interface IRequest {
  name: string;
  email: string;
  birthday: string;
  phone: string
}

function App() {
  return (
    <div className="App">
      <CtxApp>
        <Header />
        <Registration />
        <RegisterList />
        <Footer />
      </CtxApp>
    </div>
  )
}

export default App
