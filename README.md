# Purpose of this Sandbox
This is sandbox running a Node.js Application with mongoDB. You can use this to troublshoot Node.js APM issues. 

# Requirements: 
Need to have Docker Installed on the machine. 


# Node.js APM Sandbox
This is a sample node app with connection to mongoDB to troubleshoot or play around with Node.js APM.
It uses express.js and routes to create endpoints and MongoDB to store data.
(Note: The data is wiped everytime to destroy the containers)

# STEPS:

1. Download the folder
2. Add your api key in docker-compose
3. Run `docker-compose build` to build the docker image
4. Run `docker-compose up` to spin up the containers
5. Open Chrome and hit `http://localhost:4000/api/contacts` or `http://localhost:4000/api/`
6. User curl to add data (takes in 4 values: name, email, phone and gender)
```
curl -X POST \
  http://localhost:4000/api/contacts/ \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: f032b670-b8e0-409a-b817-37ae6cac1868' \
  -H 'cache-control: no-cache' \
  -d 'name=Hetansh&email=sample@gmail.com&phone=12345678&gender=Male&undefined='
 ```
7. You can see the data by going to `http://localhost:4000/api/contacts` from you chrome browser
8. See traces in your account


Remember to run `docker-compose down` to stop and remove the containers

List of endpoints:
1. `http://localhost:4000/` Homepage (GET)
2. `http://localhost:4000/api` Sample Page (GET)
3. `http://lochalhost:4000/api/contacts` Endpoint to post and retrieve data (GET AND POST) (Includes request to MongoDB)



