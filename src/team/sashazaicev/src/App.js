import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router";
import Page from "./UI/Page";


function App() {
  return (
    <div className="App">
      <Route path='/' render={() => <Page/>}/>
    </div>
  );
}

export default App;
