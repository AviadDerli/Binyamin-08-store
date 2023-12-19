import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext'

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [fData, setFData] = useState({})
  const [msgE, setMsgE] = useState()
  const handleChange = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.value })
  }
  const handleCheck = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.checked })
  }

  const handleRequest = () => {
    fetch('https://jbh-mockserver.onrender.com/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fData)
    })
      .then(async j => {
        if (!j.ok) {
          throw await j.json();
        }
        return j.json()
      })
      .then(data => console.log(data))
      .catch(e => console.error(e))
  }

  const handleRequest2 = () => {
    fetch('https://jbh-mockserver.onrender.com/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fData)
    })
      .then(async j => {
        let d = await j.json();
        d = { ...d, ok: j.ok }
        return d;
      })
      .then(data => {
        if (data.ok) {
          setUser(data.user)
        }
        else {
          setMsgE(data.error);
        }
      })
    // .catch(e => console.error(e))
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <div><input type="text" onChange={handleChange} name="userName" id="userName" placeholder='User name' /></div>
        <div><input type="password" onChange={handleChange} name="password" id="pass" placeholder='Password' /></div>

        <div>  Connecting <input type="checkbox" onChange={handleCheck} name="isCon" /></div>

        <input type="reset" value="Reset" onClick={() => setFData({})} />
        <button onClick={handleRequest2}> Sign in  </button>
      </form>
      {msgE && <h4 style={{ color: 'red' }}>{msgE}</h4>}
      {/* <br /><br /><br />
      <button onClick={() => { setUser({ userName: "aviad", token: "akjs932jsad93sa9q" }) }}>
        Sign in without login
      </button> */}
    </div>
  )
}
