import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Route } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function App() {
  <Route path="/">
    <Home />
  </Route>
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById("root")
);
