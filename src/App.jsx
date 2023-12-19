import { useEffect, useState } from 'react'
import './App.css'
import Layout from './Layout'
import Login from './Login'
import UserContext from './context/UserContext'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PopupContext from './context/PopupContext'
import Popup from './Popup'


function App() {

  const [user, setUser] = useState()
  const [popup, setPopup] = useState()
  const navigate = useNavigate();

  useEffect(() => {
    navigate(!user ? '/login' : '/')
  }, [user])
  return (
    <>
      <PopupContext.Provider value={{popup,setPopup }}>
        <UserContext.Provider value={{ user, setUser }}>

          {popup && <Popup/>}

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Layout />} />
          </Routes>
        </UserContext.Provider>
      </PopupContext.Provider>
    </>
  )
}

export default App
