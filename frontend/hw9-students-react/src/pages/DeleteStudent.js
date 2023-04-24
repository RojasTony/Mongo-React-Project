import React from 'react'
import { useState } from 'react'//hook that updates info and updates it to the frontend whenever it is changed 
import axios from 'axios'

export default function DeleteStudent(){
    
    var [ID, setId] = useState('');

    const onSubmit =(event) => {
        event.preventDefault();
        const url = 'http://localhost:5678/students/' + ID;
        //Make sure that the user input fields correctly.
        if(ID === ''){
            return alert("Error");
        }
        //send request to backend server, and inform the user if there was a successful communication.
        axios.delete(url).then((res) => {
            alert("Successfully Deleted!");
        }).catch((error) => {
            alert(error);
        })
    }
    //input data fields for the function
    return(
        <React.Fragment>
            <h1>Delete Student</h1>
            <div className="container">
    
            <label>ID:</label>
            <input type="text" id="ID" onChange={(e) => setId((e.target.value))} name="ID"></input>

            <button onClick={onSubmit}>Delete Student</button>
  
            <div id="mydiv" name="mydiv"></div>
            </div>
       </React.Fragment>
    )
}