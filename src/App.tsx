import { useState } from 'react'
import { api } from './api/api';
import { Header } from './components/Header/Header';
import { RegisterList } from './components/RegisterList/RegisterList';
import { Registration } from './components/Registration/Registration';

export interface IRequest {
  name: string;
  email: string;
  birthday: string;
  phone: string
}

function App() {
  const [data, setData] = useState<IRequest[]>([]);

  async function HandleTest() {
    const res = await api.getAll("/user")
    const data = await res.json()
    setData(data)
  }

  return (
    <div className="App">
      <Header />
      <Registration />
      <RegisterList />
    </div>
  )
}

export default App
