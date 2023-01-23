import {useState} from "react";

export default function Content() {
  const [name, setName] =  useState('Yasuo')
  const [count, setCount] =  useState(0)
  const handleName = () => {
    const names = ["Yasuo", "Nadia", "Benjamin"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleChangeNAme = () =>{
    setName(handleName())
  }
  const handleIncreaseCount = () =>{
    var currentCount = count;
    currentCount+=1;
    setCount(currentCount);
  }
  return (
    <main>
      <p onDoubleClick={handleChangeNAme}>Hi {name}! <br/>{count}</p>
      <button onClick={handleChangeNAme}>Click me to change name</button>
      <button onClick={handleIncreaseCount}>Click me to increase count</button>
    </main>
  );
}
