//this is the react navbar for menu access
import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
export default function Navigation() {
    return(
        <React.Fragment>
        <Navbar bg="dark" expand='lg' variant='dark'>
            <Container>
            <Navbar.Brand color="white">Student Directory</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                        <Nav.Link> <Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/AddStudent">Add</Link></Nav.Link>
                        <Nav.Link><Link to="/DeleteStudent">Delete</Link></Nav.Link>
                        <Nav.Link><Link to="/DisplayStudent">Display</Link></Nav.Link>
                        <Nav.Link><Link to="/UpdateStudent">Update</Link></Nav.Link>
                        <Nav.Link><Link to="/StudentList">List</Link></Nav.Link>
                        <Nav.Link><Link to="/SearchStudent">Search</Link></Nav.Link>
                    </Nav>
        </Navbar.Collapse>
        </Container>    
        </Navbar>
        </React.Fragment>
    )
}
