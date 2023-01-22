import React from "react";

export default function Content() {
  const handleName = () => {
    const names = ["Yasuo", "Nadia", "Benjamin"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleClick = () =>{
    console.log("Hi, you clicked me");
  }
  const handleClick2 = (name) =>{
    console.log(`Hi, ${name}`);
  }
  const handleClick3 = (e) =>{
    console.log(e.target.innerText);
  }
  return (
    <main>
      <p>{handleName()}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() =>handleClick2(handleName())}>Click me</button>
      <button onClick={(e) =>handleClick3(e)}>Click me</button>
    </main>
  );
}
