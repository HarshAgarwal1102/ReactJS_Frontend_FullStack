// First Component / Root Component

import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Message } from "./components/Message";

const App=()=>{
  // let message = "";
  // const names = {};
  const [names, setNames] = useState({});
  const firstNameKey = "first";
  const lastNameKey = "last";

  const recInputNames=(data, key)=>{
    // names[key] = data;
    const temp = {};
    temp[key] = data;
    setNames({...names, ...temp});
    // console.log(names);
  }

  // hooks
  // all hooks start with use keyword.
  // hooks are functions.
  const [message, setMessage] = useState(""); // update the state (re-rendering)

  const initCap = (value) => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
  
  const showFullName=()=>{
    // console.log("All Names ",names);
    setMessage ("Welcome " + initCap(names[firstNameKey]) + " " + initCap(names[lastNameKey])); // re-rendering happens here...
    // console.log("Full Name is ", message);
  }
  const clearAll=()=>{
    console.log("Clear All...");
    const temp = {};
    temp[firstNameKey]="";
    temp[lastNameKey]="";
    setNames(temp);
    setMessage("");
  }

  return (<div className="container">
  <Message msg = "Greet App" classStyle = "primary"/>
  <Input val={names[firstNameKey]} fn={recInputNames} inputKey={firstNameKey} lbl="First Name" placeholder="Enter your first name here"/> <br/>
  <Input val={names[lastNameKey]} fn={recInputNames} inputKey={lastNameKey} lbl="Second Name" placeholder="Enter your Second name here"/> <br/>
  <Button fn={showFullName} msg="Greet" cssClass="btn btn-primary me-2"/>
  <Button fn={clearAll} msg="Clear All" cssClass="btn btn-secondary"/> <br/><br/><br/>
  {message && <Message msg = {message} classStyle = "info"/>}
  </div>)
}

export default App;