import React from 'react'
import { useState } from 'react'//hook that updates info and updates it to the frontend whenever it is changed 
import axios from 'axios'
import Navigation from './navbar'

export default function GetStudent(){
    
    var [studentArray, setArray] = useState([]);
    var [ID, setId] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:5678/students/' + ID;
        if(ID === ''){
            return alert('Error!');
        }
        //Send the user input in the url paramters, when data is received save to information array.
        axios.get(url).then((res) => {
            setArray(arr => [...arr, res.data]);
            alert("Success!");
        }).catch((error) => {
            alert(error);
        })
    }
    console.log(studentArray)
   //For this array, if the user input is empty , it will only display a button 
   if(studentArray.length === 0){
    return(
        <React.Fragment>
            
            <h1>Show Student</h1>
            <div className="container">
    
            <label>ID:</label>
            <input type="text" id="ID" onChange={(e) => setId((e.target.value))} name="ID"></input>

            <button onClick={onSubmit}>Display Student</button>
  
            <div id="mydiv" name="mydiv"></div>
            </div>
       </React.Fragment>
    )
   }
   //otherwise if the user imputed a value output a table with the inputed values
   // values in lines 63-67 are ripped from lines 60-65 in displayStudent.
   else if(studentArray.length === 1){
    return(
        <React.Fragment>
            
            <h1>Show Student</h1>
            
            <label>ID:</label>
            <input type="text" id="ID" onChange={(e) => setId((e.target.value))} name="ID"></input>
            <button onClick={onSubmit}>Display Student</button>
            
            <table>
                    <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>GPA</th>
                        <th>Enrolled</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentArray.map(item => {
                    return (
                    <tr key={item.ID}> 
                        <td>{item.ID}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.gpa}</td>
                        <td>{item.enrolled}</td>
                    </tr>
                    );
                    })}
                    </tbody>
            </table>

        </React.Fragment>
    )
   }
}