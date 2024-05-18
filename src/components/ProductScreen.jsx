import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Button, Modal, Form, InputGroup, FormControl, Row, Col } from 'react-bootstrap';

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stock: '',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/products');
        console.log(response.data) // Replace with your API endpoint
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://api.example.com/products/${id}`); // Replace with your API endpoint
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`https://api.example.com/products/${currentProduct.id}`, currentProduct); // Replace with your API endpoint
      setProducts(products.map(product => product.id === currentProduct.id ? currentProduct : product));
      setShowEditModal(false);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchInput(value);
    setFilteredProducts(products.filter(product =>
      product.pname.toLowerCase().includes(value) ||
      (product.category && product.category.toLowerCase().includes(value)) ||
      (product.premium ? 'yes' : 'no').includes(value) ||
      product.price.toString().includes(value) ||
      product.qty.toString().includes(value)
    ));
  };

  return (
    <>
    <h2>Product List</h2>
    <p>View and Manage Products in the database</p>
    <Container className='mt-4' fluid="md">
      <Row>
        <Col md={7}>
        <InputGroup className="mb-3"style={{width:'50%'}}>
        <FormControl
          
          placeholder="Search products..."
          value={searchInput}
          onChange={handleSearch}
        />
      </InputGroup>
        </Col>
        <Col md={1}></Col>
        <Col md={4} style={{textAlign:"end"}}>
        <Button style={{width:'40%'}} variant="success">Add New Product</Button>{' '}
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Premium</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Listed By</th>
            <th>Is Listed?</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.pname}</td>
              <td>{product.category}</td>
              <td>{product.premium?'yes':'no'}</td>
              <td>{product.price}</td>
              <td>{product.qty}</td>
              <td>{product.listby}</td>
              <td>{product.listed?'yes':'no'}</td>
              <td>
                <Button style={{width:'30%'}} variant="warning" onClick={() => handleEdit(product)}>Edit</Button>{' '}
                <Button style={{width:'35%'}} variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.name}
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={currentProduct.category}
                onChange={(e) => setCurrentProduct({ ...currentProduct, category: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                value={currentProduct.price}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                value={currentProduct.stock}
                onChange={(e) => setCurrentProduct({ ...currentProduct, stock: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
    
  );
};

export default ProductScreen;
