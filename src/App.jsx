import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Login from './Login'
import { Route, Routes } from 'react-router'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <div>
      {/* {isLogged ? <Layout /> :
        <Login setIsLogged={setIsLogged} />} */}


        <Routes>
          <Route path='/login' element={<Login setIsLogged={setIsLogged}/>}/>
          <Route path='*' element={<Layout isLogged={isLogged}/>}/>
        </Routes>
    </div>
  )
}

export default App
