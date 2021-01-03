import React from "react";
import Contact from "./Contact";
import About from "./About";
import {Route,Switch,Redirect} from 'react-router-dom';
// import Error from "./Error";
import Menu from "./Menu";
import Home from "./Home";
import User from "./User";
import Search from "./Search";

const App = () => {
  return(
    <>
    <Menu/>
    <Switch>
      <Route exact path = "/" component = {() => <Home name = "Home"/> } />
      <Route exact path = "/contact" component = {() => <Contact name = "Contact us"/> } />
      <Route exact path = "/about" component = {() => <About name = "About us"/> } />
      <Route path = "/user/:name" component = {User}/>
      <Route exact path = "/search" component = {Search}/>
      {/* <Route component = {Error} /> */}
      <Redirect to = "/" />
    </Switch>
    </>
  )
};

export default App;