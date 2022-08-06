import mongoose from 'mongoose';

export const Db_connect = () => {
    if(mongoose.connections[0].readyState){
        console.log('Already connected');
        return;
    }
    mongoose.connect(process.env.DB_CONNECTION, () => {
        console.log('connected to mongodb')
    })

}