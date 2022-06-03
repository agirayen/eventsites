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
1. Ensure you are under `eventsites` directory
2. Run npm init
3. Run npm install --save-dev nodemon
4. Run npm install express
5. Run npm install --save-dev @types/node
6. create file 'server'
7. create public directory
  - create index.html 
8. create file tsconfig.json - to keep the file after compile 
9. Create Dockerfile
10. Add .dockerignore file 

# Creating Database layer
1. Install necessary dependencies for eg. `npm install cors`
2. Add query service support using pg(postgres) pool
3. Modify docker-compose.yml with the right postgres port and db
4. Update server.js routes to invoke queryservice 

# TBD
1. Creating the tables (Need database schema and seed ???) 
2. Update the queryservice as per requirement 




