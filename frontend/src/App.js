import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/loginPage";
import EventsPage from "./pages/eventsPage";
import PurchasePage from "./pages/purchasePage";
import WhishlistPage from "./pages/whishlistPage";
import NavBar from "./components/navBar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import LaunchPage from "./components/LaunchPage/Launchpage";
import { SliderData } from "./components/LaunchPage/SliderData";

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
  const [searchTerm, setSearchTerm] = useState();

  const handleLogout = () => {
    localStorage.clear();
    router("/", { replace: true });
  };
  const handleRouteChange = (route) => {
    router(route, { replace: true });
  };
  const handleSearch = (searchText) => {
    setSearchTerm(searchText);
  };
  return (
    <div className="App">
      <NavBar
        handleLogout={() => handleLogout()}
        handleRouteChange={(route) => handleRouteChange(route)}
        handleSearch={(searchText) => handleSearch(searchText)}
      />
      <LaunchPage slides={SliderData} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/events"
          element={
            <ProtectedRoute redirectUri={"/"}>
              <EventsPage searchTerm={searchTerm} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/purchase"
          element={
            <ProtectedRoute redirectUri={"/"}>
              <PurchasePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/whishlist"
          element={
            <ProtectedRoute redirectUri={"/"}>
              <WhishlistPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
