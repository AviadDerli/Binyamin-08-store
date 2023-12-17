import { useEffect, useState } from "react"
import "./categories.css"

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
                return <div class="card card-img" style={{backgroundImage:`url(${categories[c]})`}}>
                    <span class="card__title">{c}</span>
                </div>
            })}
        </div>
    )
}
