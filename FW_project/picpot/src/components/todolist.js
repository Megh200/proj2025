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



         {/* using forEach loop but prints in console */}
         {props.arr.forEach(item => {
             console.log(item.id, item.td)
        })}



        {/* now using loop :- map() that can print on webpage obviusly with "return" state. */}
        {props.arr.map( (item)=>{
            return <p key={item.id} > {item.id}.. {item.work} </p>
        } )}    {/* used key attri. to remove warning in console */}


       


        </div>
        
    )

};

export default Todolist;