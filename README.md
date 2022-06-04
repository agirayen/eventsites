# eventsites
Event sites is an web application which helps consumer to schedule and search events
## Front End
TBD
## Back End
Ensure you are under `eventsites` directory
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
11.create pool.js
12.create server.js
## Database 
Install necessary dependencies for eg. `npm install cors`
2. Add query service support using pg(postgres) pool
3. Modify docker-compose.yml with the right postgres port and db
4. Update server.js routes to invoke queryservice 
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






