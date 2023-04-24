/*import logo from './logo.svg';*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import AddStudent from './pages/AddStudent'
import DeleteStudent from './pages/DeleteStudent'
import StudentList from './pages/StudentList'
import SearchStudent from './pages/SearchStudent'
import GetStudent from './pages/GetStudent'
import UpdateStudent from './pages/UpdateStudent'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1>RojasTony ,  Z#23529067</h1>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Student Directory</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link as={Link} to="/AddStudent">Add Student</Nav.Link>
                <Nav.Link as={Link} to="/UpdateStudent">Update</Nav.Link>
                <Nav.Link as={Link} to="/DeleteStudent">Delete</Nav.Link>
                <Nav.Link as={Link} to="/GetStudent">Get Student</Nav.Link>
                <Nav.Link as={Link} to="/SearchStudent">Search Student</Nav.Link>
                <Nav.Link as={Link} to="/StudentList">Student List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="SearchStudent" element={<SearchStudent/>} />
          <Route path="StudentList" element={<StudentList/>} />
          <Route path="GetStudent" element={<GetStudent/>} />
          <Route path="/DeleteStudent" element={<DeleteStudent/>} />
          <Route path="/UpdateStudent" element={<UpdateStudent/>} />
          <Route path="/AddStudent" element={<AddStudent/>} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
