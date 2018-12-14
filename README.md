# Simple API using Node.js, Express and MongoDB

## Installation instructions

npm install

Install MongoDB and run 'mongod'  
https://treehouse.github.io/installation-guides/mac/mongo-mac.html

Import data into MongoDB:  
mongoimport --db music --collection players --jsonArray data.json

Start the server:  
npm run dev

Access the API:  
http://localhost:3000/players
