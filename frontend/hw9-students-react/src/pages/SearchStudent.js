import React from 'react'
import { useState } from 'react'//hook that updates info and updates it to the frontend whenever it is changed 
import axios from 'axios'

export default function SearchStudent(){

    var[searchArray, setSearch] = useState([]);
    const [firstName, setFirstName] = useState('');
    var[lastName, setLastName] = useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        const url = `http://localhost:5678/students/?FrstName=${encodeURI(firstName)}&LstName=${encodeURI(lastName)}` 

        //axios is needed for the api web requests
        axios.get(url).then((res) => {
            setSearch(res.data);
            console.log(searchArray);
            alert("Success!");
        }).catch((error) => {
            alert(error);
        })
    }
    //input data fields for the function, this simply outputs the search last name box and button to submit if the user puts no input.
    if(searchArray.length === 0){
        return(
        <React.Fragment>
            <form id='display'>
                <label >First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} id="fname" name="fname"/>
                <label >Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} id="lname" name="lname"/>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
    }
    //otherwise if the there is a user that matches the written name , it will be outputed to the screen
    else if(searchArray.length > 0){
        return(
            <React.Fragment>
                <h1>Search By First &amp; Last Name</h1>
                <form id='display'>
                    <label >First Name:</label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} id="fname" name="fname"/>
                    <label >Last Name:</label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} id="lname" name="lname"/>
                    <button onClick={onSubmit}>Submit</button>
                 </form>
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
                    {searchArray.map(item => {
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
