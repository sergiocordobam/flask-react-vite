import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CDTForm = () => {
  const [formData, setFormData] = useState({
    initial_amount: '',
    annual_interest_rate: '',
    years: '',
    compounding_frequency: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/cdt/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2 className="text-center">CDT Simulator</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="initialAmount">
              <Form.Label>Initial Amount</Form.Label>
              <Form.Control 
                type="number" 
                name="initial_amount" 
                value={formData.initial_amount} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="annualInterestRate">
              <Form.Label>Annual Interest Rate (%)</Form.Label>
              <Form.Control 
                type="number" 
                name="annual_interest_rate" 
                value={formData.annual_interest_rate} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="years">
              <Form.Label>Years</Form.Label>
              <Form.Control 
                type="number" 
                name="years" 
                value={formData.years} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Form.Group controlId="compoundingFrequency">
              <Form.Label>Compounding Frequency (times per year)</Form.Label>
              <Form.Control 
                type="number" 
                name="compounding_frequency" 
                value={formData.compounding_frequency} 
                onChange={handleChange} 
                required 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Calculate
            </Button>
          </Form>
          {result && (
            <div className="mt-4">
              <h3>Results</h3>
              <p>Total Amount: {result.total_amount.toFixed(2)}</p>
              <p>Profit: {result.profit.toFixed(2)}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CDTForm;
