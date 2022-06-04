import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const NavBar = ({ handleLogout, handleRouteChange, handleSearch }) => {
  const [search, setSearch] = useState();
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!isAuthenticated) {
    return null;
  }
  const handleTextChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    handleSearch(value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Col sm={4}>
            <span onClick={() => handleRouteChange("purchase")}>Purchased</span>
          </Col>
          <Col sm={4}>
            <span onClick={() => handleRouteChange("whishlist")}>Whislist</span>
          </Col>
          <Col sm={4}>
            <span onClick={() => handleLogout()}>Logout</span>
          </Col>
          <Col sm={4}>
            <input value={search} onChange={(e) => handleTextChange(e)} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
