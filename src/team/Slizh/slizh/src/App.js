import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import './App.css';
import Page from "./UI/Page";

function App() {
  return (
    <div className="App">
      <Route path='/'
             render={() => <Page/>}/>
    </div>
  );
}

export default App;
