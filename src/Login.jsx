import { useNavigate } from "react-router"

export default function Login({setIsLogged}) {
  const nav = useNavigate()
    return (
    <button onClick={()=>{
        setIsLogged(true)
        nav('/')
    }}>Login</button>
  )
}
