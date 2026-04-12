# MongoDB Healthcare POC

##Overview
A backend REST API built with Node.js, Express, and MongoDB to simulate a basic healthcare system.

# I built a modular Node.js + MongoDB backend using MVC architecture.
# I implemented schema validation, relational references using Mongoose populate, and aggregation pipelines for analytics. 
# The system is structured for scalability with separated controllers, routes, and models.

# Why Mongoose? It's just a library that helps Node.js talk to MongoDB in a structured way, without it I would need to connect to Mongo, validata data and write raw queries manually

# to start up connection, in local folder mongo-poc run node app.js

## Postman Setup

#1. Open Postman
#2. Import /postman/mongo-poc.postman_collection.json
#3. Run requests against:
#   http://localhost:3000
   
##Features
- Create Patients
- Create Doctors
- Create Appointments
- Revenue aggregation using MongoDB pipeline

##Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (testing)

##API Endpoints

###Patients
- POST /patients
- GET /patients

###Doctors
- POST /doctors
- GET /doctors

###Appointments
- POST /appointments

###Analytics
- GET /revenue

##Testing
Use Postman to test all endpoints.

##Run Locally
npm install  
node app.js

##Status
POC completed and working locally.