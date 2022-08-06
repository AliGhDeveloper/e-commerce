import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    root: { 
        type : Boolean,
        default : false
    },
    date: {
        type : Date,
        default : Date.now()
    },
    role : {
        type : String,
        default : 'user'
    },
    avatar : {
        type : String,
        default : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
    }

},{
    timestamps : true
});

let Dataset = mongoose.models.Users || mongoose.model('Users', schema);

export default Dataset;