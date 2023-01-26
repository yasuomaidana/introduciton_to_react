
import { FaTrashAlt } from "react-icons/fa";

export default function Content({items, handleCheck, handleDelete}) {

  const drawList = () => {
    return (
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <main>
      {items.length ? drawList():<p style={{marginTop:'2rem',textAlign:"center"}}>Ups your list is Empty!!! <br/> Like your soul</p>}
    </main>
  );
}
