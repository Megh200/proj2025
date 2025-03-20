import React from "react";

import Todolist from "./components/todolist.js";
import "./App.css";

const App = () => {

    // javascript
    const otp = Math.trunc(Math.random()*10000 +1);

    // to show this below data in todolist.js
    // taking objects in an array
    const array = [
                        {id:1, work:"no work", td:'today', tm:'tommorow'},
                        {id:2, work:"reading", td:'today', tm:'tommorow'},
                        {id:3, work:"working IT", td:'today', tm:'tommorow'},
    ]

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

            {/* user-made todolist tag & attribute that can be any */}
            <Todolist arr = {array} />       {/* to use javascript in these tags we have to use {} */}

        </div>
        

    )


} ;

export default App;