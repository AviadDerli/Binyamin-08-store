import React, { useContext, useState } from 'react'
import UserContext from './context/UserContext'

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [fData, setFData] = useState({})

  const handleChange = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.value })
  }
  const handleCheck = (e) => {
    setFData({ ...fData, [e.target.name]: e.target.checked })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <div><input type="text" onChange={handleChange} name="userName" id="userName" placeholder='User name' /></div>
        <div><input type="password" onChange={handleChange} name="password" id="pass" placeholder='Password' /></div>

        <div>  Connecting <input type="checkbox" onChange={handleCheck} name="isCon" /></div>

        <input type="reset" value="Reset" onClick={() => setFData({})} />
        <button onClick={() => { console.log(fData); }}>        Sign in      </button>
      </form>

      {/* <br /><br /><br />
      <button onClick={() => { setUser({ userName: "aviad", token: "akjs932jsad93sa9q" }) }}>
        Sign in without login
      </button> */}
    </div>
  )
}
