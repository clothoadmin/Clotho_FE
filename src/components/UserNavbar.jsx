import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container , Button} from 'react-bootstrap';


export const UserNavbar = ({ onLogout }) => {
    const user = JSON.parse(sessionStorage.getItem('user'));

  return (
    <nav className="navbar">
        <Container>
        <div className="navbar-brand">
        <Link to="/">Clotho</Link>
      </div>
      <div className="navbar-links">
        <Link to="/home"><i className="fas fa-home"></i> Home</Link>
        <Link to="/about"><i className="fas fa-info-circle"></i> About Us</Link>
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact Us</Link>
        <Link to="/categories"><i className="fas fa-th-list"></i> Categories</Link>
        <Link to="/wishlist"><i className="fas fa-heart"></i> Wishlist</Link>
        <Link to="/profile"><i className="fas fa-user"></i> {user.name}</Link>
        <Button  variant="success" onClick={onLogout} style={{width:'40px', marginLeft:'1rem'}}><i class="fa-solid fa-power-off" style={{color: "#ffffff"}}></i></Button>
      </div>
        </Container>
      
    </nav>
  );
}
export default UserNavbar;