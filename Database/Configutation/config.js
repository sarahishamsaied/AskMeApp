const mongoose = require("mongoose");
const initConnection = ()=>{
   return mongoose.connect(process.env.CONNECTION_STRING).then((result) => {
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = initConnection;