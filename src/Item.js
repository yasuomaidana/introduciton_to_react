import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

export const Item = ({item,handleCheck,handleDelete}) => {
  return (
    <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
              name={"item"+item.item} id={"item"+item.item}
            />
            <p
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
              htmlFor={"item"+item.item}
            >
              {item.item}
            </p>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
              aria-label={`Delete ${item.id}`}
            />
          </li>
  )
}
