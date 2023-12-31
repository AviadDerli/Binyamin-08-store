import React, { useContext, useEffect, useState } from "react";
import DataContext from "./context/DataContext";

export default function ItemPage({ url }) {
  const [item, setItem] = useState();
  const { cart, setCart } = useContext(DataContext);

  const handlePlus = () => {
    let newCart = { ...cart };
    // let cart4 = { "ab12": {...item,qty:1}  , "dsak":{...item,qty:7} }

    // אם קיים המוצר
    if (newCart[item.id]) {
      newCart[item.id].qty += 1;
    } else {
      newCart[item.id] = { ...item, qty: 1 };
    }
    setCart(newCart);
  };

  const handleMinus = () => {
    if (cart[item.id]) {
      let newCart = { ...cart };
      if (newCart[item.id].qty > 1) {
        newCart[item.id].qty -= 1;
      } else {
        delete newCart[item.id];
      }
      setCart(newCart);
    }
  };
  useEffect(() => {
    fetch("https://jbh-mockserver.onrender.com" + url)
      .then((j) => j.json())
      .then((data) => setItem(data));
  }, []);
  return (
    <div>
      {item ? (
        <div className="item">
          <div>{item.name}</div>
          <div>{item.emoji}</div>
          <div>{item.price}</div>
          <div
            className="buttons"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button onClick={handlePlus}>+</button>
            <span>{cart[item.id]?.qty || 0}</span>
            <button onClick={handleMinus}>-</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
