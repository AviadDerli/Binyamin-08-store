import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Layout'
import Login from './Login'
import UserContext from './context/UserContext'
import { Route, Routes, useNavigate } from 'react-router-dom'


function App() {

  const [user, setUser] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    navigate(!user ? '/login':'/')
  }, [user])
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {/* 
        Protected : Option 1
        {!user ?
          <Login /> :
          <Layout />
        } */}


        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Layout />} />
        </Routes>
      </UserContext.Provider>
    </>
  )
}

export default App
