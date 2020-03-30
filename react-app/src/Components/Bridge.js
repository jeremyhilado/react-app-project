import React from "react";
import App from "../App";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Rainbow from "./Rainbow";
import Flex from "./Flex";
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Bridge() {
  console.log("About.js: ");

  return (
    <>
      <div className="Bridge-App">
      <Header />
      <hr />
      <Switch>
	      <Route exact path="/" component={App}/>
	      <Route exact path="/App" component={App}/>
	      <Route exact path="/About" component={About}/>
        <Route exact path="/Rainbow" component={Rainbow}/>
       <Redirect to="/"/>
       </Switch>
       <hr />
       <Flex>
        <Footer />
      </Flex>
      </div>
    </>
  );
}