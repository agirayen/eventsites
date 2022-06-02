const http =require("http");
const fs =require ("fs");
const path = require ("path");
import cors from "cors";
const queryService = require("./pool");
const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const { createUser, getUserByUsername } = queryService;

app.get("/", (req, res) => {
  res.json({ responsetype: "service is up!!" });
});

app.post("/createUser", (req, res) => {
  createUser(req, res);
  // res.json({ responsetype: "service is up!!" });
});

app.get("/getUser", (req, res) => {
  getUserByUsername(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});