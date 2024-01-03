import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemDetails from "./ItemDetails";
import NotFound from "./NotFound";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Content() {
  const myNav = useNavigate()
  return (
    <div className="content">
      <button onClick={()=>myNav('/')}>🏡</button>
      <Routes>
        {/*         where               what */}
        <Route path="/" element={   <Categories/>  } />
        <Route path="/categories" element={   <Categories/>  } />
        <Route path="/categories/:categoryName" element={<ItemList/>  } />
        <Route path="/item/:itemId" element={<ItemDetails/>  } />
        <Route path="/404" element={<NotFound/>  } />
        <Route path="*" element={<NotFound/>  } />

      </Routes>

    </div>
  )
}
