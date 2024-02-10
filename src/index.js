import React from "react";
import ReactDOM from "react-dom";
import {Routes, Route} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home is cool!</h1>
    </div>
  );
}
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
          <div>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={ <Login />}></Route>
    </Routes>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById("root")
);
