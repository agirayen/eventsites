import "./App.css";
import { Nav, NavItem } from "react-bootstrap";
import Purchased from "./components/Purchased/purchased";
import Home from "./components/Home/home";
import Wishlist from "./components/Wishlist/wishlist";
import LaunchPage from "./components/LaunchPage/Launchpage";
import { SliderData } from "./components/LaunchPage/SliderData";
import purchased from "./components/LaunchPage/icons/purchased.png";
import wishlistedIcon from "./components/LaunchPage/icons/wishlistedIcon.jpeg";
import userIcon from "./components/LaunchPage/icons/user-icon.webp";
import LoginPage from "./pages/loginPage";
import EventsPage from "./pages/eventsPage";
import NavBar from "./components/navBar";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";

const ProtectedRoute = ({ redirectUri, children }) => {
  let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  if (!isAuthenticated) {
    return <Navigate to={redirectUri} replace />;
  }

  return children;
};
function App() {
  const router = useNavigate();
  //   let isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  //   if (!isAuthenticated) {
  //     return null;
  //   }

  const handleLogout = () => {
    localStorage.clear();
    router("/", { replace: true });
  };
  return (
    <div className="App">
      <NavBar handleLogout={() => handleLogout()} />
      <LaunchPage slides={SliderData} />
      <Routes>
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
    </div>
  );
}

export default App;
