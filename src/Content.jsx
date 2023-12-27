import { useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";

export default function Content() {

  const [category, setCategory] = useState()

  return (
    <div className="content">
      {category ? <button onClick={()=>setCategory()}>Categories</button> : <></>}

      {!category ?
        <Categories setCategory={setCategory} /> :
        <ItemList category={category} />}
    </div>
  )
}
