import { Db_connect } from "utils/Db_connection";
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';


Db_connect();


export default function handler(req, res){
switch(req.method){
        case 'PATCH': 
            changeavatar( req, res );
    }
};

async function changeavatar( req, res ) {
    const user = await auth(req, res);
    if(!user) return res.status(401).json({ error: 'Unauthenticated user'})

    const base64 = req.body;
    if(!base64) return res.status(400).json("file not found");

    await Users.findByIdAndUpdate( { _id : user._id } , {
        avatar : base64
    });

    res.status(200).json({ success: "avatar changed"})
}