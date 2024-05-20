import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Navbar, Container , Button} from 'react-bootstrap';


export const UserNavbar = ({ onLogout }) => {
    const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <Navbar bg="success" data-bs-theme="dark"sticky="top">
        <Container>
        <div className="navbar-brand">
        <Link to="/user-homepage">Clotho</Link>
      </div>
      <div className="navbar-links">
        <Link to="/user-homepage"><i className="fas fa-home"></i> Home</Link>
        <Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link>
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link>
        <Link to="/categories"><i className="fas fa-th-list"></i> Categories</Link>
        <Link to="/wishlist"><i className="fas fa-heart"></i> Wishlist</Link>
        <Link to="/profile"><i className="fas fa-user"></i> {user.name}</Link>
        <Button  variant="success" onClick={onLogout} style={{width:'40px', marginLeft:'1rem'}}><i className="fa-solid fa-power-off" style={{color: "#ffffff"}}></i></Button>
      </div>
        </Container>
      
    </Navbar>
  );
}
export default UserNavbar;