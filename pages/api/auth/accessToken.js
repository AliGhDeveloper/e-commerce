import { Db_connect } from "utils/Db_connection";
import jwt from 'jsonwebtoken';
import { accessToken } from "utils/tokenGenerate";
import Users from 'models/UsersModel';

Db_connect();

export default async function handler(req, res) {
    try {
        const rf_token = req.cookies.refreshToken;
        
        if(!rf_token) return res.status(401).json({error: "please login first"});

        const validToken = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
        if(!validToken) return res.status(401).json( { error: 'invalid token' } );
        
        
        const user = await Users.findById(validToken._id)
        if(!user) return res.status(400).json({ error : "user not found"});
        

        const access_token = accessToken(user);
        return res.status(200).json({ 
            access_token,
            user
        })
    } catch(error){
        return res.status(400).json({ error : error.message })
    }

}