import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useEffect,useState } from "react";
import './Product.css';
import axios from 'axios';
import pp from '../assets/pp.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { getAllListedProducts } from '../service/productAPI';

export const HomePage = () => {
    const[fetchedProducts,setfetchedProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await getAllListedProducts();
          console.log(response) // Replace with your API endpoint
          setfetchedProducts(response);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
  
      fetchProducts();
    }, []);
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };
    
      const filteredProducts = fetchedProducts.filter((product) =>
        product.pname.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
       return (
          <div>
           <Container fluid>
           
            
                <Form.Control
                    style={{padding:'0.6rem',borderRadius:'2rem',width:'95%', border:'1px solid green'}}
                  type="text"
                  placeholder="🔍 Search products"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              
               <Row style={{marginTop:"2rem"}}>
                   {filteredProducts.map((product) => (
                      <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                      <Card className='product-card' key={product.id}>
                          <Card.Img className='card_img' variant="top" src={pp} alt={product.pname} thumbnail />
                          <Card.Body>
                              <Card.Title>{product.pname}</Card.Title>
                              <Card.Text>{product.price}</Card.Text>
                              
                              <Button style={{width:'20%'}} variant='success'><i className="fas fa-heart"></i></Button>{' '}
                              <Button style={{width:'20%'}} variant='primary'><i class="fa-solid fa-eye" style={{color: "#ffffff"}}></i></Button>{' '}

                          </Card.Body>
                      </Card>
                  </Col>
                   ))}
               </Row>
           </Container>
           </div>
       );
  
}
export default HomePage;