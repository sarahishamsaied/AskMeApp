const express = require('express');
const initConnection = require('./Database/Configutation/config');
const { userRoutes,messageRoutes } = require('./Routes/routes');
const app = express()
const port = 3000
app.use(express.json());
app.use(userRoutes);
app.use(messageRoutes);
initConnection();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))