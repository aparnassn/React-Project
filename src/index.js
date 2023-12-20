import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./form";
import Login from "./login";
import Home from "./home";
import Userform from "./userform";
import Practice from "./practiceuser";
import Todolist from "./Todolist";
import Alllist from "./alllist"
import Note from "./note";
import Fetching from "./fetch";
import Fetchingdata from "./fetchdata";
import Usingpromise from "./promise";
import Usercard from "./usercard"
import Userinfo from "./userinfo";
import Practicecard from "./practicecard";
import Practiceinfo from "./practiceinfo";
import Storedata from "./storedata";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Userform />} />
        <Route path="/register" element={<Form />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/todolist" element={<Todolist />} />
        <Route path="/all" element={<Alllist />} />
        <Route path="/note" element={<Note />}/>
        <Route path="/fetch" element={<Fetching />}/>
        <Route path="/fetchdata" element={<Fetchingdata />}/>
        <Route path="/promise" element={<Usingpromise />}/>
        <Route path="/usercard" element={<Usercard />}/>
        <Route path="/userinfo" element={<Userinfo />}/>
        <Route path="/card" element={<Practicecard />}/>
        <Route path="/info" element={<Practiceinfo />}/>
        <Route path="/storedata" element={<Storedata/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
