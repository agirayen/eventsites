import React from "react";
import Login from "../templates/login/login";
import { postData, getData } from "../services/httpService";
import { baseUrl } from "../config.js";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const router = useNavigate();
  const handleLogin = (username, password) => {
    console.log(username, password);

    let data = {
      username,
      password,
    };
    getData(`${baseUrl}/getUser`, data).then((success) => {
      console.log(success);
      const { isError } = success.data.error;
      if (!isError) {
        localStorage.setItem("isAuthenticated", "true");
        router("/events", { replace: true });
      }
    });
  };

  const handleSignUp = (username, password) => {
    console.log(username, password);

    let data = {
      username,
      password,
    };
    postData(`${baseUrl}/createUser`, data).then((success) => {
      console.log(success);
    });
  };

  return (
    <Login
      handleLogin={(username, password) => handleLogin(username, password)}
      handleSignUp={(username, password) => handleSignUp(username, password)}
    />
  );
};

export default LoginPage;
