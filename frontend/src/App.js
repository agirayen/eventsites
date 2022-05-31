import "./App.css";
import { Nav, NavItem } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Purchased from "./components/Purchased/purchased";
import Home from "./components/Home/home";
import Wishlist from "./components/Wishlist/wishlist";
import Main from "./components/Search/search";
import LaunchPage from "./components/LaunchPage/Launchpage";
import { SliderData } from "./components/LaunchPage/SliderData";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navContainer">
          <Nav className="ml-auto" style={{ backgroundColor: "black" }}>
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
            <NavItem className="navs">
              <Link className="nav-link" to="/home">
                Logout
              </Link>
            </NavItem>
          </Nav>
          <LaunchPage slides={SliderData} />
        </div>

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/wishlist" element={<Wishlist />}></Route>
          <Route exact path="/search" element={<Main />}></Route>
          <Route exact path="/purchased" element={<Purchased />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
