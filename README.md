# Multi-Container Application
The goal of this project is to practice using Docker Compose to run a multi-container application in production. You will use Docker Compose to run a Node.js application and a MongoDB database.

## Requirements
Create a simple unauthenticated Node.js API service for creating a simple todo list. The API should have the following endpoints:
```
GET /todos — get all todos
POST /todos — create a new todo
GET /todos/:id — get a single todo by id
PUT /todos/:id — update a single todo by id
DELETE /todos/:id — delete a single todo by id
```
The API should connect to MongoDB to store the todo items. You can use Express for the API and Mongoose to connect to MongoDB. You can use `nodemon` to automatically restart the server when the source code changes.

### Requirement #1 - Dockerize the API
You are required to dockerize the API and have a `docker-compose.yml` file which will spin up a MongoDB container and the API container. If everything works, you should be able to access the API via `http://localhost:3000` and the todos should be saved to the MongoDB container. Data should be persisted when the containers are stopped and started.

### Requirement #2 - Setup a remote server
Setup a remote server on Digital Ocean, AWS or any other cloud provider. You should use terraform to create the server and Ansible to configure it properly i.e. setup docker, docker-compose, pulling the image from Docker Hub and running the containers.

### Requirement #3 - Setup a CI/CD pipeline
Once you have everything working locally, push your code to GitHub and setup a CI/CD pipeline to deploy the application to the remote server. You can use GitHub Actions to setup the pipeline. Make sure to use docker-compose to run the application in the production environment.

Bonus - Setup a reverse proxy
Setup a reverse proxy using Nginx to allow you to access the application via `http://your_domain.com`. You should use `docker-compose` to setup the reverse proxy.

https://roadmap.sh/projects/multi-container-service
