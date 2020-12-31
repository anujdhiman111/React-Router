import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
    const {name} = useParams(); 
    const location = useLocation();
    const Alert = () => {
    alert("You got me");
    }
    const History = useHistory();
    return(
        <>
        <h1>This is the page of user {name}</h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname === `/user/Anuj` ? (<button onClick = {Alert}> Click Me</button>):null}
        <button onClick = {() => History.goBack()}>Go Back</button>
        </>
    )
}

export default User;