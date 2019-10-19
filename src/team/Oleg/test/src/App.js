import React from 'react';
import './App.css';
import Page from "./UI/Page";
import {Route} from "react-router-dom";

function App() {
  return (
      <Route exact path='/' render={()=><Page/>} />
  );
}

export default App;
