const mongoose = require("mongoose")

const UserCred = mongoose.Schema({
    username : {
        type: String,
        required: [true,"please enter a username"],
    },
    email:{
        type:String,
        required:[true,"Please enter a Email id"],
    },
    password:{
        type:String,
        required:[true,"Please enter a password"],
    }
},{
    timestamps:true
})

const UserAuthDetails = mongoose.model("UserAuthDetails",UserCred);

module.exports = UserAuthDetails;

