import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
    const [img,setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    };
    return(
        <>
        <div className = "search_div">
            <input type = "text" placeholder = "Search" value = {img}
            onChange = {inputEvent} className = "input-search" />
           {img === "" ? null : <Sresult name = {img}/>} 
        </div>
        </>
    )
}

export default Search;