import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const Login = ({ handleLogin, handleSignUp }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleInputChange = (e, type) => {
    let value = e.target.value;
    if (type === "userName") {
      setUsername(value);
    }
    if (type === "pass") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <Row>
        <Col>Username :</Col>
        <Col>
          <input
            value={username}
            onChange={(e) => handleInputChange(e, "userName")}
          />
        </Col>
      </Row>
      <Row>
        <Col>Password :</Col>
        <Col>
          <input
            value={password}
            onChange={(e) => handleInputChange(e, "pass")}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleLogin(username, password)}>Login</Button>
          <Button onClick={() => handleSignUp(username, password)}>
            Sign Up
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
