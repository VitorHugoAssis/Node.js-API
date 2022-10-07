const mongoose = require("mongoose");
const cors = require('cors')


const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required:true,
    },
    lastName:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
   password:{
        type: String,
        required:true,
        minlength:9,
    },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel