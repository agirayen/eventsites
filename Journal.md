# Creating parent node project 
1. mkdir `eventsites` 
2. cd `eventsites`
3. npm init
4. create `docker-compose.yml`
5. Add .gitignore file 

# Creating frontend react app 
1. Ensure you are under `eventsites` directory
2. Run `npx create-react-app frontend` . This will create react app files like package.json, src, public, etc
3. create Dockerfile
4. Add .dockerignore file 

# Creating backend react app 
1. Ensure you are under `eventsites\backend` directory
2. Run npm init
3. Run npm install --save-dev nodemon
4. Run npm install express
5. create file 'server'
6. create public directory
    -create index.html 
7. create file tsconfig.json - to keep the file after compile 
8. Create Dockerfile
9. Add .dockerignore file 
## Creating Database layer
  1. Install necessary dependencies for eg. `npm install cors`
  2. Add query service support using pg(postgres) pool
  3. Modify docker-compose.yml with the right postgres port and db
  4. Create models.js to create database schema for tables, keys and indexes  using Sequelize library 
  5. Add `timestamp:false` in all database models not to create CreatedAt and UpdatedAt columns by Sequelize library
  6. Add `seed.js` to invoke each model using `<Model>.sync({ force: true });` to drop the tables and data and recreate the tables on every restart of server.
  7. Add command script in `package.json` to invoke seed
10. Update server.js routes to invoke queryservice 




