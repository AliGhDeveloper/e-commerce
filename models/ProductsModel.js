import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    category: { 
        type: String,
        required: true
    },
    description : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    inStock : {
        type : Number,
        default : 0
    },
    sold : {
        type : Number,
        default : 0
    },
    content : {
        type : String,
        default : 'user'
    },
    images : {
        type : Array,
        required : true
    },
    checked : {
        type : Boolean,
        default : false
    }

},{
    timestamps : true
});

let Dataset = mongoose.models.Product || mongoose.model('Product', schema);

export default Dataset;