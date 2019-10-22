import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';

const LoginView = () => {
  return (
    <div style={{height: '90vh', display: 'flex', justifyContent:'center'}} >
      <Form style={{ width: '50%', alignSelf: 'center', textAlign: 'center'}}>

      <Form.Label style={{fontSize: '20px'}}>SIGN IN</Form.Label>

        <Form.Group controlId="formBasicUsername" style={{textAlign: "left"}}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="beheocute" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" style={{textAlign: "left"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="******" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Save password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
