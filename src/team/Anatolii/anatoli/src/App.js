import './App.css';
import {Route} from "react-router-dom";
import React from 'react';
import Page from "./component/Page";

function App() {
  return (
    <div className="App">
      <Route path='/' render={()=><Page/>}/>
    </div>
  );
}

export default App;
