import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';

const RegisterView = () => {
  return (
    <div style={{height: '90vh', display: 'flex', justifyContent:'center'}} >
      <Form style={{ width: '50%', alignSelf: 'center', textAlign: 'center'}}>
        <Form.Label style={{ fontSize: '20px', width:'100%' }}>SIGN UP</Form.Label>

        <Form.Group controlId="formBasicUsername" style={{ textAlign: 'left' }}>
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="text" placeholder="Em tập chơi" />
        </Form.Group>

        <Form.Group controlId="formBasicUsername" style={{ textAlign: 'left' }}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="sieusaoxo" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{ textAlign: 'left' }}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <Form.Group
          controlId="formBasicRetypePassword"
          style={{ textAlign: 'left' }}
        >
          <Form.Label>Retype Password</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterView;
