import "./App.css";
import { Nav, NavItem } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Purchased from "./components/Purchased/purchased";
import Home from "./components/Home/home";
import Wishlist from "./components/Wishlist/wishlist";
import Main from "./components/Search/search";
import LaunchPage from "./components/LaunchPage/Launchpage";
import { SliderData } from "./components/LaunchPage/SliderData";
import purchased from "./components/LaunchPage/icons/purchased.png";
import searchIcon from "./components/LaunchPage/icons/searchIcon.png";
import wishlistedIcon from "./components/LaunchPage/icons/wishlistedIcon.jpeg";
import userIcon from "./components/LaunchPage/icons/user-icon.webp";
import LoginPage from "./pages/loginPage";
import EventsPage from "./pages/eventsPage";
import NavBar from "./components/navBar";

const ProtectedRoute = ({ redirectUri, children }) => {
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!isAuthenticated) {
    return <Navigate to={redirectUri} replace />;
  }

  return children;
};
function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <div className="navContainer">
          <Nav className="navbar">
            <NavItem className="navs">
              <Link className="nav-link" to="/search">
                <span>
                  <img
                    className="icons"
                    src={searchIcon}
                    alt="search icon"
                    height="20em"
                  />
                  Search
                </span>
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/wishlist">
                <span>
                  <img
                    className="icons"
                    src={wishlistedIcon}
                    alt="wishlisted icon"
                    height="20em"
                  />
                  Wishlist
                </span>
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/purchased">
                <span>
                  <img
                    className="icons"
                    src={purchased}
                    alt="Purchased icon"
                    height="20em"
                  />
                  Purchased
                </span>
              </Link>
            </NavItem>
            <NavItem className="navs">
              <Link className="nav-link" to="/home">
                <span>
                  <img
                    className="icons"
                    src={userIcon}
                    alt="Logout icon"
                    height="20em"
                  />
                  Logout
                </span>
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
          <Route path="/" element={<LoginPage />} />

          <Route
            path="/events"
            element={
              <ProtectedRoute redirectUri={"/"}>
                <EventsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
