import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
        trim : true
    }

},{
    timestamps: true
});

const Dataset = mongoose.models.Categories || mongoose.model('Categories', schema);

export default Dataset;