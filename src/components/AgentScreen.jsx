import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { getAllAgents, promoteAgent } from '../service/userAPI';

const AgentScreen = () => {
  const [agents, setAgents] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAgentsAndAdmins();
  }, []);

  const fetchAgentsAndAdmins = async () => {
    await fetchAgents();
    await fetchAdmins();
  };

  const fetchAgents = async () => {
    try {
      const response = await getAllAgents("Agent");
      console.log('Agents:', response);
      setAgents(response);
    } catch (error) {
      console.error('Error fetching agents:', error);
    }
  };

  const fetchAdmins = async () => {
    try {
      const response = await getAllAgents("Admin");
      console.log('Admins:', response);
      setAdmins(response);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const handlePromote = async (id) => {
    try {
      const response = await promoteAgent(id);
      if (response.status === 200) {
        alert('Agent promoted');
        await fetchAgentsAndAdmins();
      } else {
        alert('Failed to promote agent');
        
      }
    } catch (error) {
      alert('Something went wrong');
      console.error('Error promoting agent:', error);
    }
  };

  return (
    <div>
      <h2>Agents & Admins Page</h2>
      <Container className='mt-4' fluid="md">
        <h4>Agents</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Agent Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
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
                  <Button style={{width:'30%'}} className='me-2' variant="outline-warning">Edit</Button>
                  <Button style={{width:'30%'}} className='me-2' variant="outline-danger">Delete</Button>
                  <Button style={{width:'30%'}} className='me-2' variant="outline-primary" onClick={() => handlePromote(agent.id)}>Promote</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <h4>Admins</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Admin Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                <td>{admin.address}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default AgentScreen;
