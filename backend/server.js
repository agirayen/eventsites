import minimal from "./src/minimal"; 

const app = minimal();

app.use("/admin", (req, res) => console.log("you went to admin page"));

const server = app.listen(9001, () => {
  console.log("Server is running");
});