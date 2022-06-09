# eventsites
Event sites is an web application which helps consumer to search events and purchase and add into wishlist
## Front End
Some node modules to be installed are- 
1. cd frontend  
2. npm install 
2. npm install bootstrap-icons and npm install bootstrap (just in case if bootsrao-fa kind of error is seen) 
3. npm start or docker-compose up 
This usually runs on the 3000 port.

## Back End
1. Ensure you are under `eventsites\backend` directory
2. Run npm init
3. Run npm install --save-dev nodemon
4. Run npm install express which help to starting pu and listening defined port
5. create file 'server' which is the entry point to our backend application
6. create public directory
    -create index.html 
7. Create Dockerfile
8. Add .dockerignore file 
## Creating Database layer
  1. Install necessary dependencies for eg. `npm install cors`
  2. Add query service support using pg(postgres) pool
  3. Modify docker-compose.yml with the right postgres port and db
  4. Create pool.js to create database schema for tables, keys and indexes using Sequelize library. which helps to import datatype option to support creation of database schema For eg. Create user model with
  ```
  
   const getUserByUsername = (request, response) => {
  const { username, password } = request.query;
  console.log(request.query);
  pool.query(
    "SELECT user_id, username FROM users WHERE username = $1 and password=$2",
    [username, password],
    (error, results) => {
      if (error) {
        throw error;
      }

  ```

5. Add command script in `package.json` to invoke seed
6. Update `server.js` routes to invoke queryservice 
For eg. To register a route for createUser
```
 app.post("/createUser", (req, res) => {
  createUser(req, res);
});
```
7. Server runs by default with port number 3000 because we have initialized it seperately in the server file.

## Running the service 
1. To start the database  
`cd eventsites` 
 Run `docker-compose up` which will run the database in port 55000

2. To start back end 
`cd backend`
Run `npm run dev`  which will run on port 3000 

3. To start front end
`cd frontend` 







