import React, { useState, useEffect } from 'react';
import { Table, Container, Button, Modal, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { getAllAgents } from '../service/userAPI';
const AgentScreen = () => {
  const[agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await getAllAgents("Agent");
        console.log(response.data) // Replace with your API endpoint
        setAgents(response);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    }
    fetchAgents();
  },[]);
  return (
    <div>
      <h2>Agents Page</h2>
      <p>This is the Contact page.</p>
      <Container className='mt-4' fluid="md">
        <Table style={{marginLeft:"auto", marginRight:"auto"}} striped bordered hover>
          <thead>
            <tr>
              <td>Id</td>
              <td>Agent Name</td>
              <td>Email</td>
              <td>Address</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
          {agents.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.id}</td>
              <td>{agent.name}</td>
              <td>{agent.email}</td>
              <td>{agent.address}</td>
              
              <td>
                <Button variant="warning" >Edit</Button>{' '}
                <Button variant="danger" >Delete</Button>{' '}
                <Button variant="primary" >Promote</Button>

              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AgentScreen;
