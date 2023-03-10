import React, { useEffect, useState } from "react";
import apiRequest from "../apiRequest";
import QueryForm from "./QueryForm";
import "./fetch.scss";

const FetchData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const itemsQuery = async () =>{
      
        try{
            const query = await fetch(`${API_URL}${reqType}`);
            const data = await query.json();
            return data;
        }catch(err){
            console.log(err);
        }
    }
    itemsQuery().then(r=>setItems(r)).finally();
  }, [reqType])

  useEffect(()=>{
    console.log("enters",items)
  },[items])
  return <div className="FetchDataApp"><QueryForm reqType ={reqType} setReqType={setReqType}/></div>;
};

export default FetchData;
