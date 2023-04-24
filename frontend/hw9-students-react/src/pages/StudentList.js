import React from 'react'
import { useState } from 'react'//hook that updates info and updates it to the frontend whenever it is changed 
import axios from 'axios'
import Navigation from './navbar'


export default function StudentList(){
    var[listArray, setArray] = useState([]);

    const onSubmit = (event) =>{
        event.preventDefault();
        const url = 'http://localhost:5678/students';
                
        //axios is needed for the api web requests
        axios.get(url).then((res) => {
            setArray(res.data);
            alert("Success!");
        }).catch((error) => {
            alert(error);
        })
    }

    //if there is no data stored in the database, then there will only be a button shown.
    if(listArray.length === 0){
        return(
            <React.Fragment>
                <h1>All Students</h1>
                <button id ="listbt" onClick = {onSubmit}>Get All Students</button>
            </React.Fragment>
        )
    }
    //Else, display all user information from database to frontend in table format.
    if(listArray.length > 0){
        return(
            <React.Fragment>
                <h1>All Students</h1>
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
                    {listArray.map(item => {
                    return (
                    <tr key={item.ID}>
                        <td>{item.ID}</td>
                        <td>{ item.first_name }</td>
                        <td>{ item.last_name }</td>
                        <td>{ item.gpa}</td>
                        <td>{ item.enrolled }</td>
                    </tr>
                    );
                    })}
                     </tbody>
                </table>
            </React.Fragment>
        )
        }

} 