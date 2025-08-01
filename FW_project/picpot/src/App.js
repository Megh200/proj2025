import React , {useState} from "react";

import AddItem from "./components/additem.js";
import Todolist from "./components/todolist.js";
import "./App.css";


const App = () => {
    
    // javascript
    const otp = Math.trunc(Math.random()*10000 +1);

    // to show this below data in todolist.js
    // taking objects in an array

    // const array = [
    //                     {id:1, work:"no work", td:'today', tm:'tommorow'},
    //                     {id:2, work:"reading", td:'today', tm:'tommorow'},
    //                     {id:3, work:"working IT", td:'today', tm:'tommorow'},
    // ]


    // taking this const array in hook function:- useState() by [variable,function]
    const [array, funcofhook] = useState(
                             [  {id:Math.trunc(Math.random()*10 +1), work:"no work", td:'today', tm:'tommorow'},
                                {id:Math.trunc(Math.random()*10 +1), work:"reading", td:'today', tm:'tommorow'},
                                {id:Math.trunc(Math.random()*10 +1), work:"working IT", td:'today', tm:'tommorow'},   ]                
    )      // in useState(), it controls states of components like any changes we do w8 refreshing the whole webpage;
    // ex: like in youtube sigle page, if we click Home, it will go to home w8 refresh and the same page and like for others also etc
    // this is the adv. of react useState()


    const additemhandle =(newitem) =>{
        
        // adding useState function in this bcz we have to show the array so here it will push in array
        funcofhook( (initialarray) =>{
           return initialarray.concat(newitem);
        }  )

        // array.push(newitem);
        // console.log(array);
    }

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

            <AddItem onsub={additemhandle} />

            {/* user-made todolist tag & attribute that can be any */}
            <Todolist arr = {array}  />       {/* to use javascript in these tags we have to use {} */}

        </div>
        

    )


} ;

export default App;