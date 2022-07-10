const mongoose = require("mongoose");
const initConnection = ()=>{
   return mongoose.connect("mongodb://localhost:27017/AskingApp").then((result) => {
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = initConnection;