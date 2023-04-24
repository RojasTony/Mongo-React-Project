import React from 'react'
import { useState } from 'react'//hook that updates info and updates it to the frontend whenever it is changed 
import axios from 'axios'

export default function UpdateStudent(){
    var [first_name, setFname] = useState('');
    var [last_name, setLname] = useState('');
    var [gpa_st, setGpa] = useState('');
    var [enroll, setEnroll] = useState('');
    var [ID, setId] = useState('');

    const onSubmit =(event) => {
        event.preventDefault();
        const url = 'http://localhost:5678/students/'+ ID
        //Checks to see if user has correctly input all fileds, if not return an error alert.
        if(setId === '' || setFname === ''|| setLname === ''|| setGpa === ''|| setEnroll === ''){
            return alert("Error");
        }
        //Package user inputted information as json and send to the backend.
        const updateInfo = {
            id: ID, // left value has to be named the same from studserver's req.body value
            first_name: first_name,
            last_name: last_name,
            gpa: gpa_st,
            enrolled: enroll,
        };
        //axios is needed for the api web requests
        console.log(updateInfo);
        axios.put(url, updateInfo).then((res) => {
            console.log(res);
            alert("Success!");
        }).catch((error) => {
            alert(error);
        })
    }

    return(
        <React.Fragment>
            <h1>Update Student</h1>
            <div className="container">

            <label>First Name:</label>
            <input type="text" id="first_name" onChange={(e) => setFname(e.target.value)} name="first_name"></input>
  
            <label>Last Name:</label>
            <input type="text" id="last_name" onChange={(e) => setLname(e.target.value)} name="last_name"></input>
  
            <label>GPA:</label>
            <input type="text" id="gpa_st" onChange={(e) => setGpa(e.target.value)} name="gpa_st"></input>
  
            <label>Enrolled:</label>
            <input type="text" id="enroll" onChange={(e) => setEnroll(e.target.value)} name="enroll"></input>
    
            <label>ID:</label>
            <input type="text" id="ID" onChange={(e) => setId((e.target.value))} name="ID"></input>

            <button onClick={onSubmit}>Update Student</button>
  
            <div id="mydiv" name="mydiv"></div>
            </div>
       </React.Fragment>
    )
}