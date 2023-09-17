// First Component / Root Component
// Arrow Function

import React from "react";
import { First } from "./components/Firstt";
import { Second } from "./components/Second";

const App = () =>{
  // JSX (Javascript and XML)
  return (<div>
    <h1>Hello React JS</h1>
    <h1>Hey React JS</h1>
    <hr />
    <First/>
    <Second/>
  </div>)

  // VDOM
  // return React.createElement('div',
  //   null,
  //   React.createElement('h1', null, 'Hello React JS'),
  //   React.createElement('h1', null, 'Hey React JS'));
}

export default App;