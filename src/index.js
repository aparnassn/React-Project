import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./storedata";
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
import Showcontent from "./showcontent";
import Accordionuse from "./accordionuse";
import Formikuse from "./formikuse";
import Formikpractice from "./formikpractice";
import HookCounterOne from "./HookCounterOne";
import HookCounter from "./HookCounter";
import HookMouse from "./HookMouse";
import MouseContainer from "./MouseContainer";
import IntervalHookCounter from "./IntervalHookCounter";
import DataFetching from "./DataFetching";
import Blogim from "./Blogim"
import NewImage from "./NewImage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
import ShopApp from "./ShopApp";
import PickColor from "./PickColor";
import SignUp from "./SignUp";
import StopWatchApp from "./StopWatchApp";
import ReadingMap from "./ReadingMap";
import SearchApp from "./SearchApp";
import ParentComponent from "./ParentComponent";
import Provider from "./BlogCardsA";
import Cart from "./Cart";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ShopApp/> */}
     <Provider>
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
        <Route path="/showcontent" element={<Showcontent/>}/>
        <Route path="/accordion" element={<Accordionuse/>}/>
        <Route path="/formikuse" element={<Formikuse/>}/>
        <Route path="/formikpractice" element={<Formikpractice/>}/>
        <Route path="/hookcounterone" element={<HookCounterOne/>}/>
        <Route path="/hookcounter" element={<HookCounter/>}/>
        <Route path="/hookmouse" element={<HookMouse/>}/>
        <Route path="/mousecontainer" element={<MouseContainer/>}/>
        <Route path="/intervalhookcounter" element={<IntervalHookCounter/>}/>
        <Route path="/datafetching" element={<DataFetching/>}/>
        <Route path="/blog" element={<Blogim/>}/>
        <Route path="/newimage" element={<NewImage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blogim" element={<Blogim/>}/>
        <Route path="/shopapp" element={<ShopApp/>}/>
        <Route path="/pickcolor" element={<PickColor/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/stopwatchapp" element={<StopWatchApp/>}/>
        <Route path="/readingmap" element={<ReadingMap/>}/>
        <Route path="/searchapp" element={<SearchApp/>}/>
        <Route path="/parentcomponent" element={<ParentComponent/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
    </Router>
    </Provider> 
  </React.StrictMode>
  // <App/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
