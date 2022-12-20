//import logo from './logo.svg';
import React, { Component, useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News.js';

import { BrowserRouter } from "react-router-dom";

import {

  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Bookmark from './components/Bookmark';



function App() {

  const [savedItem, setSaveItem] = useState([]);
  const onSave = (item) => {

    console.log("onsave function is being called")
    const exist = savedItem.find((x) => x.url === item.url)

    if (exist){
      setSaveItem(
        savedItem.map((x) => 

        x.url === item.url ? { ...exist, qty : exist.qty + 1} : x        
        )
      )
    }else{
      setSaveItem([...savedItem, {...item, qty : 1}])
    }

    console.log(savedItem)

  }

  return (
   
    <div className="App">
     
    <BrowserRouter>

     <Navbar></Navbar>
     
   
     <Routes>
       <Route exact path = '/'   element={<News onSave = {onSave} key="general" pageSize = {15} category= "general"></News>}></Route>
       <Route exact path = '/latest'   element={<News key="general" pageSize = {15} category= "general"></News>}></Route>   
       <Route exact path = '/sports'   element={<News key="sports" pageSize = {15} category= "sports"></News>}></Route>
       <Route exact path = '/business'   element={<News key="business" pageSize = {15} category= "business"></News>}></Route>
       <Route exact path = '/entertainment'   element={<News key="entertainment" pageSize = {15} category= "entertainment"></News>}></Route>
       <Route exact path = '/health'   element={<News key="health" pageSize = {15} category= "health"></News>}></Route>
       <Route exact path = '/technology'   element={<News key="technology" pageSize = {15} category= "technology"></News>}></Route>
       <Route exact path = '/science'   element={<News key="science" pageSize = {15} category= "science"></News>}></Route>
       <Route exact path = '/india'   element={<News key="india" pageSize = {15} category= ""></News>}></Route>
       <Route exact path = '/bookmark'   element={<Bookmark savedItem = {savedItem} onSave = {onSave}></Bookmark>}></Route>




     </Routes>
     
     

    </BrowserRouter>
      

      

    </div>
   
  );
}

export default App;
