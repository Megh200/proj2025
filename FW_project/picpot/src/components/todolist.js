import React from "react";

import "./todolist.css";

// "props" to access attributes of usermade tags
const Todolist = (props) => {


    


    return (
        <div>
        <h2>TODOLIST</h2>
        {/* <p>no work today</p> */}

        {/* now to show this above data through App.js javascript */}

        <ul>
            <li> {props.arr[0].work} </li>
            <li> {props.arr[2].tm} </li>
        </ul>

        <p>{props.arr.forEach(item => {console.log(item.td)})}</p>


        </div>
        
    )

};

export default Todolist;