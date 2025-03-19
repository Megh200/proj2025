import React from "react";

import Todolist from "./components/todolist.js";
import "./App.css";

const App = () => {

    // javascript
    const otp = Math.trunc(Math.random()*10000 +1);

    return(
        // only one element in return state. so <p></p> & <li></li> in one <div></div>
        <div className="container" >
            <p>hello REACT</p>
            <p>the otp is {otp}</p>
            <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
            </ul>
            
            <Todolist/>

        </div>
        

    )


} ;

export default App;