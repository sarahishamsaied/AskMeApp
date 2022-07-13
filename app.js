const express = require('express');
require("dotenv").config();
const initConnection = require('./Database/Configutation/config');
const { userRoutes,messageRoutes } = require('./Routes/routes');
const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const port = process.env.PORT
app.use(express.json());
app.use(userRoutes);
app.use(messageRoutes);
initConnection();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))