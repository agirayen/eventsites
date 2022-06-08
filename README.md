# eventsites
Event sites is an web application which helps consumer to search events and purchase and add into wishlist
## Front End
Some node modules to be installed are- 
npm install bootstrap
npm install bootstrap-icons

cd frontend 
npm start or docker-compose up 
This usually runs on the 3000.

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
  4. Create models.js to create database schema for tables, keys and indexes using Sequelize library. which helps to import datatype option to support creation of database schema For eg. Create user model with
  ```
  const User = db.define('users', {
  user_id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: "users_username_key",
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  created_on: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: "users",
  timestamps: false,
  indexes: [
    {
      name: "users_pkey",
      unique: true,
      fields: [
        { name: "user_id" },
      ],
    },
    {
      name: "users_username_key",
      unique: true,
      fields: [
        { name: "username" },
      ],
    },
  ],
});
  ```
  5. Add `timestamp:false` in all database models not to create CreatedAt and UpdatedAt columns by Sequelize library
  6. Add `seed.js` to invoke each model using `<Model>.sync({ force: true });` to drop the tables and data and recreate the tables on every restart of server.
  7. Add command script in `package.json` to invoke seed
9. Update `server.js` routes to invoke queryservice 
For eg. To register a route for createUser
```
 app.post("/createUser", (req, res) => {
  createUser(req, res);
});
```
10. Server runs by default with port number 3000 because we have initialized it seperately in the server file.



## Running the service 
1. To start the database  
`cd eventsites` 
 Run `docker-compose up` which will run the database in port 5432

2. To start back end 
`cd backend`
Run `npm run dev`  which will run on port 3000 

3. To start front end
`cd frontend` 
TBD 






