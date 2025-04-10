import React from "react";
import "./additem.css";

const AddItem = (props) =>{
    let entrywork = "";

    const handle = (event) =>{
        // on submitting, webpage's refreshing again nd again, to stop this we use..
        event.preventDefault();
        // new item to add in the array
        const newitem = {id:Math.trunc(Math.random()*10+1), work:entrywork, td:"today"};
        props.onsub(newitem);
    };

    const entryhandle = (event) =>{
        entrywork = event.target.value;
    }

    return (

        <form onSubmit={handle}>   {/* when we submit, there is an event happening, so added eventlistener  */}
            
            <input type="text" onChange={entryhandle}/>
            {/* <input type="submit" value="add" /> */}
            
            <button type="submit" >add</button>

        </form>
    );

   

};

export default AddItem;