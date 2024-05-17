import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import group from '../assets/group.png';
import agent from '../assets/agent.png';
import products from '../assets/products.png';
import order from '../assets/order.png';
import comm from '../assets/comm.png';
import './styles.css';
import {getTotalUsers, getTotalAgents} from '../service/userAPI';
import { getTotalProducts } from '../service/productAPI';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAgents, setTotalAgents] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const total = await getTotalUsers();
        console.log('Total Users:', total);
        setTotalUsers(total);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const fetchAgents = async () =>{
      try{
        const total = await getTotalAgents("agent");
        console.log('Total Agents:', total);
        setTotalAgents(total);
      }
      catch(error){
        console.error('error fetching agents:', error);
      }
    }

    const fetchProducts = async() =>{
      try{
        const total = await getTotalProducts();
        console.log('Total Products', total);
        setTotalProducts(total);
      }
      catch(error){
        console.error('error fetching products:', error);
      }
    }

    fetchUsers();
    fetchAgents();
    fetchProducts();
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the Admin Dashboard</p>
      <Container fluid>
        <Stack direction="horizontal" style={{marginBottom:'2rem'}}>
          <div className="p-2">
          <Card style={{ width: '23rem'}} className='shadow-tile'>
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>Users</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{totalUsers}</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" href="#">View Users</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={group} rounded fluid />
          </Col>
        </Row>
        
      </Card.Body>
    </Card>
          </div>
          <div className="p-2 ms-auto">
          <Card style={{ width: '24rem' }} className='shadow-tile'>
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>Agents</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{totalAgents}</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" as={Link} to="/agents">View Agents</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={agent} rounded fluid />
          </Col>
        </Row>

      </Card.Body>
    </Card>
          </div>
          <div className="p-2 ms-auto">
          <Card style={{ width: '23rem' }} className='shadow-tile'>
      <Card.Body>
      <Row>
          <Col md={8}>
            <Card.Title>Products</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{totalProducts}</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" as={Link} to="/products">View Products</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={products} rounded fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
          </div>
        </Stack>

        <Stack direction="horizontal" >
          <div className="p-2 me-4">
          <Card style={{ width: '23rem' }} className='shadow-tile'>
      <Card.Body>
      <Row>
          <Col md={8}>
            <Card.Title>Orders</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" href="#">View Orders</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={order} rounded fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
          </div>
          <div className="p-2 ms-5">
          <Card style={{ width: '24rem' }} className='shadow-tile'>
      <Card.Body>
      <Row>
          <Col md={8}>
            <Card.Title>Communications</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" href="#">View Communications</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={comm} rounded fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
          </div>
          
        </Stack>
      </Container>

      
    </div>
  );
};

export default Dashboard;
