import { Db_connect } from "utils/Db_connection";
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';


Db_connect();


export default function handler(req, res){
switch(req.method){
        case 'POST': 
            changeavatar( req, res );
    }
};

async function changeavatar( req, res ) {
    const user = await auth(req, res);
    if(!user) return res.status(401).json({ error: 'Unauthenticated user'})

    const file = req.body;
    if(!file) return res.status(400).json("file not found");

    await Users.findByIdAndUpdate( { _id : user._id } , {
        avatar : file
    });

    res.status(200).json({ success: "avatar changed"})
}