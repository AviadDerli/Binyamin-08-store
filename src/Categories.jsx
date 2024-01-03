import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

export default function Categories({ setCategory }) {
    const [cat, setCat] = useState({})

    useEffect(() => {
        // fetch('https://jbh-mockserver.onrender.com/categories')
        //     .then(j => j.json() )
        //     .then(res=>setCat(res))

        axios.get('https://jbh-mockserver.onrender.com/categories')
            .then(res => setCat(res))

    }, [])

    return (
        <div>
            {Object.keys(cat).map(c => <Link key={c} to={"/categories/" + c}><img className="img" src={cat[c]} onClick={() => setCategory(c)} /></Link>)}
        </div>
    )
}
