import { useEffect, useState } from "react"
import "./categories.css"
import { Link } from "react-router-dom"

export default function Categories() {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        fetch('https://jbh-mockserver.onrender.com/categories')
            .then(r => r.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className="cards">
            {Object.keys(categories).map(c => {
                return <Link to={'/categories/'+c}>
                    <div className="card card-img" style={{ backgroundImage: `url(${categories[c]})` }}>
                        <span className="card__title">{c}</span>
                    </div>
                </Link>
            })}
        </div>
    )
}
