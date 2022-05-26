import "./App.css";
import { Nav, NavItem } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Purchased from "./components/Purchased/purchased";
import Home from "./components/Home/home";
import Wishlist from "./components/Wishlist/wishlist";
import Search from "./components/Search/search";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navContainer">
          <Nav className="ml-auto" style={{ backgroundColor: "black" }}>
            <NavItem className="navs">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/search">
                Search
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/wishlist">
                Wishlist
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/purchased">
                Purchased
              </Link>
            </NavItem>
          </Nav>
        </div>

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/purchased" element={<Purchased />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
