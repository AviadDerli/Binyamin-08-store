import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";

export default function Header() {
  const {setUser} = useContext(UserContext);
  return (
    <div className="header">
      <Link to="/">🏠</Link>
      <Link to="/login" onClick={()=>{setUser()}}>✖</Link>
      <nav onClick={()=>{setUser()}}>Logout</nav>
    </div>
  )
}
