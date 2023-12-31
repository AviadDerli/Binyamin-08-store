import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Categories from "./Categories";
import ItemPage from "./ItemPage";

export default function Content() {
  const [url, setUrl] = useState();

  useEffect(() => {
    if (location.pathname !== "/categories") setUrl(location.pathname);
  }, []);

  return (
    <div className="content">
      {url && <button onClick={() => location.pathname='/categories'}>Categories</button>}

      
      {url ? url.includes("/categories") ? (
        <ItemList category={url} />
      ) : (
        <ItemPage url={url} />
      ):<Categories setCategory={setUrl} />}
    </div>
  );
}
