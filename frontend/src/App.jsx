import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logpage from './component/Logpage'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './component/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
       <Route path='/' element={<Logpage/>}></Route>
      <Route path='/home' element={<><Navbar /><Home /></>}></Route>
      <Route path='/add'element={<><Navbar /><Add/></>}></Route>
       </Routes>
    </>
  )
}

export default App;
