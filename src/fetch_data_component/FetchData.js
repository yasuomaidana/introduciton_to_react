import React, { useEffect, useState } from "react";
import QueryForm from "./QueryForm";
import "./fetch.scss";
import ListElements from "./ListElements";

const FetchData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const itemsQuery = async () =>{
      
        try{
            const respose = await fetch(`${API_URL}${reqType}`);
            const data = await respose.json();
            setItems(data);
        }catch(err){
            console.log(err);
        }
    }
    itemsQuery();
  }, [reqType])

  return (
  <div className="FetchDataApp">
    <QueryForm reqType ={reqType} setReqType={setReqType}/>
    <ListElements items={items} reqType={reqType} />
  </div>);
};

export default FetchData;
