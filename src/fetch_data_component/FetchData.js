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
            const data = await fetch(`${API_URL}${reqType}`).then(response=>response.json());        
            setItems(data);
        }catch(err){
            console.log(err)
        }
    }
    itemsQuery();
  }, [reqType])

  useEffect(()=>{console.log(items)},[items])
  return <div className="FetchDataApp"><QueryForm/></div>;
};

export default FetchData;
