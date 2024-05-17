import React from 'react'
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import avatar from '../assets/avatar.png'

function AdminNavbar() {
  return (
    <div><Navbar bg="success" data-bs-theme="dark"sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/">Clotho</Navbar.Brand>
      <Nav className=" justify-content-end">
        <p className='mt-3' style={{color:"white", fontWeight:"bold"}}>Hello Admin</p>
        <Nav.Link href="#pricing">
        <img className='mt-1 mx-1' src={avatar} style={{height:'30px', width:'30px'}} alt="avatar Image" />
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default AdminNavbar