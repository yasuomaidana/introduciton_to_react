import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";
import AddItem from './AddItem';
import { SearchItem } from './SearchItem';
import './index.scss';


function App() {

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('shoppinglist'))||[])
    console.log("After loading")
  },[])
  

  const addItem = item =>{
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = {id,checked:false,item}
    const listItems = [...items, myNewItem]
    console.log(item)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

  const handleCheck = (id) => {
    const listItems = items.map( item => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  
  const handleDelete = (id) =>{
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  
  return (
    <div className="App">
      <Header title={"Groceries!!!"}/>
      <AddItem newItem = {newItem} setNewItem = {setNewItem} handleSubmit = {handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
      <Content items = {items.filter(item=> item.item.toLowerCase().includes(search.toLowerCase()))} handleCheck = {handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
