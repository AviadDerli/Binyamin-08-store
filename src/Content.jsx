import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemDetails from "./ItemDetails";
import NotFound from "./NotFound";

export default function Content() {

  const [urls,setUrls] = useState([])
  const getUrlPath = () => {
    // לטפל בכתובת : לדעת בדיוק איפה נמצא ולפעול בהתאם
   setUrls(location.pathname.split('/').slice(1))
  }

  useEffect(() => {
    getUrlPath()

  }, [])
  console.log(location.pathname);
  return (
    <div className="content">
      <button onClick={() => location.href='/categories'}>Categories</button>

    
      {urls[0] == 'categories' && !urls[1] && <Categories />}
      {urls[0] == 'categories' && urls[1] && <ItemList category={urls[1]} />}
      {urls[0] == 'item' && urls[1] && <ItemDetails itemId={urls[1]} />}
      {/* {!urls[0] && !["categories","item"].includes(urls[0]) && <NotFound/>} */}
    </div>
  )
}
