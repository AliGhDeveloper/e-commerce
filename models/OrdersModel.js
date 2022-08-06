import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user : {
        type: mongoose.Types.ObjectId,
        ref : 'Users'
    },
    address : String,
    telephone: Number,
    cart : Array,
    total : Number,
    paid:  {
        type: Boolean,
        default : false
    },
    method: String,
    paidAt: Date,
    delivered : {
        type: Boolean,
        default : false
    }

},{
    timestamps: true
});

const Dataset = mongoose.models.Order || mongoose.model('Order', schema);

export default Dataset;