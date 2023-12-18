import React, { useContext } from 'react'
import UserContext from './context/UserContext'

export default function Login() {
  const {setUser} = useContext(UserContext);
    return (
    <div>
        <h1>Login</h1>
        <button onClick={()=>{setUser({userName : "aviad", token :"akjs932jsad93sa9q"})}}>
            Sign in
        </button>
    </div>
  )
}
