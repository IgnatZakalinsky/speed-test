import React from 'react';
// import './App.css';
import {Route} from "react-router-dom";
import Page from "./UI/Page";

function App() {
  return (<>
      <Route exact path='/' render={() => <Page/>}/>
      </>
  );
}

export default App;
