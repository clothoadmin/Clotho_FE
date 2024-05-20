import {React} from 'react'
import { Container, Stack, Card, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from '../assets/products.png';
import comm from '../assets/comm.png';
export const AgentDashboard = () => {
  return (
    <>
    <h2>Dashboard</h2>
      <p>Welcome to the Agent Dashboard</p>
      <Container fluid>
        <Stack direction='horizontal'>
        <div className="p-2 ms-auto me-3 " style={{marginTop:'10rem'}} >
        <Card style={{ width: '23rem' }} className='shadow-tile'>
      <Card.Body>
      <Row>
          <Col md={8}>
            <Card.Title>Products</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Products</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" as={Link} to="/agent-products">View Products</Card.Link>
          </Col>
          <Col md={4} className='pt-2'>
          <Image src={products} rounded fluid />
          </Col>
        </Row>
      </Card.Body>
    </Card>
          </div>
          <div className="p-2  me-auto ms-3 " style={{marginTop:'10rem'}}>
          <Card style={{ width: '24rem' }} className='shadow-tile'>
      <Card.Body>
      <Row>
          <Col md={8}>
            <Card.Title>Communications</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        
            <Card.Link className="btn btn-success mt-4" as={Link} to="/agent-communication">View Communications</Card.Link>
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
    </>
    
  )
}
export default AgentDashboard;