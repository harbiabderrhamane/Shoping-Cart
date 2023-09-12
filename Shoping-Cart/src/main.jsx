import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// data forlder  will contain any json data we need for example in this case the products
// context in any application you almost always have redux or react context that we are going to be working with in this case our entire shop-cartis gonna fit inside of a conext
// hook is for all the costum hooks such as localstorage wich we are gonna be using  to make surewhen we add somthing to our cart and refresh it stays there
// utilities is for utility function functions that do small things like formatting our currency we wanna do all over the place
