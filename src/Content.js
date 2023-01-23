import {useState} from "react";

export default function Content() {
  const [items, setItems] =  useState([
    {
      id:1,
      checked: false,
      item: "Item 1"
    },
    {
      id:2,
      checked: true,
      item: "Item 2"
    },
    {
      id:3,
      checked: false,
      item: "Item 3"
    }
  ]);
  
  return (
    <main>
      <ul>
        {items.map(item=> (
        <li className={"item"+item.id} key={item.id}>
          <input type="checkbox" checked={item.checked}/>
          <label>{item.item}</label>
          <button>Delete</button>
        </li>) )}
      </ul>
    </main>
  );
}
