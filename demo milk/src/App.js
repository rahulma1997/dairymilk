import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Design/dashboard.css";
import "./Design/login.css"
import "./Design/forget.css";
import "./Design/user.css";
import Dashboard from "./Components/A_Dashboard";
import Log from "./Components/A_Login";
import Forget_Password from "./Components/Forget_password";
import User from "./Components/User";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Log/>} />
          <Route path="/forget_password" element={<Forget_Password/>} />
          <Route path="/user" element={<User/>} />
       </Routes>
    </Router>
  );
}

export default App;
