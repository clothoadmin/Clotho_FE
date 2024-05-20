import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

import avatar from '../assets/avatar.png'

const AgentNavbar = ({ onLogout }) => {
  
  return (
    <div><Navbar bg="success" data-bs-theme="dark"sticky="top">
    <Container>
      <Navbar.Brand as={Link} to="/agent-dashboard">Clotho</Navbar.Brand>
      <Nav className=" justify-content-end">
        <p className='mt-3' style={{color:"white", fontWeight:"bold"}}>Hello Agent</p>
        
        <Dropdown>
        <Dropdown.Toggle as="a" className="nav-link p-0" style={{ cursor: 'pointer', marginTop:'0.75rem' }}>
              <img className='mx-2' src={avatar} style={{ height: '32px', width: '32px' }} alt="avatar" />
            </Dropdown.Toggle>
              <Dropdown.Menu align="end" style={{ marginTop: '10px' }}>
                <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                <Dropdown.Item onClick={onLogout} className='logout-link'>Logout</Dropdown.Item>
              </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default AgentNavbar;