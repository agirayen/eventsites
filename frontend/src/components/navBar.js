import React from "react";
import { Row, Col } from "react-bootstrap";

const NavBar = () => {
  //   let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  //   if (!isAuthenticated) {
  //     return null;
  //   }
  return (
    <Row>
      <Col>Purchased</Col>
      <Col>Whislist</Col>
      <Col>Logout</Col>
    </Row>
  );
};

export default NavBar;
