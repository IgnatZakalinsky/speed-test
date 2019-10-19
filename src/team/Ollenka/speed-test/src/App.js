import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Page from "./UI/Page";

function App() {
  return (<div className='App'>
      <Route exact path='/' render={() => <Page/>}/>
      </div>
  );
}

export default App;
