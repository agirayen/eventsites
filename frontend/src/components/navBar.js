import React, { useState } from "react";

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
  /*
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
*/
  return (
    <>
      <div class="navbarItems">
        <div class="navbareach">
          <span onClick={() => handleRouteChange("purchase")}>Purchased</span>
        </div>
        <div class="navbareach">
          <span onClick={() => handleRouteChange("whishlist")}>Whislist</span>
        </div>
        <div class="navbareach">
          <span onClick={() => handleLogout()}>Logout</span>
        </div>
      </div>
      <input
        value={search}
        onChange={(e) => handleTextChange(e)}
        placeholder="Enter zipcode here"
      />
    </>
  );
};
export default NavBar;
