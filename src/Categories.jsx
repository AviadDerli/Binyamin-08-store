import { useEffect, useState } from "react"

export default function Categories({ setCategory }) {
    const [cat, setCat] = useState({})

    useEffect(() => {
        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(j => j.json() )
            .then(res=>setCat(res))
    }, [])

    return (
        <div>
            {Object.keys(cat).map(c => <a href={"/categories/"+c}><img className="img" src={cat[c]} onClick={() => setCategory(c)}/></a>)}
        </div>
    )
}
