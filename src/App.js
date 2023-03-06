import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";
import AddItem from './AddItem';
import { SearchItem } from './SearchItem';
import apiRequest from './apiRequest';

function App() {

  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not received expected data')
        const listItems = await response.json();
        console.log("loading from serv", listItems);
        setItems(listItems);
        setFetchError(null);
      } catch(err){
        console.log(err.stack);
        setFetchError(err.message);
      } finally{
        setIsLoading(false);
      }
    }
    setTimeout(fetchItems,2000);
  },[])

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  },[items])
  

  const addItem = async item =>{
    const id = items.length ? items[items.length-1].id+1 : 1;
    const myNewItem = {id,checked:false,item}
    const listItems = [...items, myNewItem]
    setItems(listItems)
    const postOptions = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if(result) setFetchError(result);
   }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem)
    setNewItem('');
  }

  const handleCheck = async (id) => {
    const listItems = items.map( item => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems);
    const myItem = listItems.find((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked: myItem.checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }
  
  const handleDelete = (id) =>{
    const listItems = items.filter(item => item.id !== id)
    setItems(listItems)
  }
  
  return (
    <div className="App">
      <Header title={"Groceries!!!"}/>
      <AddItem newItem = {newItem} setNewItem = {setNewItem} handleSubmit = {handleSubmit}/>
      <SearchItem search={search} setSearch={setSearch}/>
      <main>
        { isLoading ? <p>Loading items...</p> : fetchError ? <p style={{color: "red"}}>{`Error : ${fetchError}`}</p> : <Content items = {items.filter(item=> item.item.toLowerCase().includes(search.toLowerCase()))} handleCheck = {handleCheck} handleDelete={handleDelete}/>}
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
