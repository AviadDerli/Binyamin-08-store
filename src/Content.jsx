import ItemList from "./ItemList";
import ItemDetails from "./ItemDetails";
import { Route, Routes } from "react-router-dom";
import Categories from "./Categories";


export default function Content() {

  // const hanleColor = (c) => {
  //   setDisplayItems(c ? items.filter(f => f.color == c) : items)
  // }
  // const hanleSearch = (txt) => {
  //   setDisplayItems(txt ? items.filter(f => f.name.includes(txt)) : items)
  // }
  // const colors = []
  // items.forEach(f => { if (!colors.includes(f.color)) colors.push(f.color) })

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Categories/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/categories/:catName" element={<ItemList />}/>
        <Route path="/item/:itemId" element={<ItemDetails />}/>
        <Route path="*" element={<Categories/>}/>
      </Routes>
    </div>
  )
}
