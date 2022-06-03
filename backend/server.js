import cors from "cors";

const http = require("http");
const fs = require("fs");

const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const queryService = require("./pool");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const { createUser, getUserByUsername, getEvents } = queryService;

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

app.get("/getEvents", (req, res) => {
  getEvents(req, res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
