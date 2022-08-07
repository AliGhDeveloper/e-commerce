import Users from 'models/UsersModel';
import bcrypt from 'bcrypt';
import { loginVal } from 'utils/val';
import { Db_connect } from 'utils/Db_connection';
import { accessToken, refreshToken } from 'utils/tokenGenerate';
import cors from 'middlewares/cors';

Db_connect();

export default function handler( req, res ) {
    switch( req.method ) {
        case 'POST' : 
           return signIn(req,res)
        case 'OPTIONS':
            return cors(req,res)
    }
}

async function signIn(req, res){
    const { email, password } = req.body;
    
    //validating data
    const errorMessage  = loginVal(email, password);
    if(errorMessage) return res.status(400).json( { error : errorMessage } );

    //checking email
    const user = await Users.findOne({ email });
    if(!user) return res.status(400).json({ error : 'no user with this email!'})

    //checking password
    const validPass = await bcrypt.compare(password, user.password);
    if(!validPass) return res.status(400).json( { error: 'your email or password is incorrect!'});

    // generating token
    const refresh_token = refreshToken(user);
    const access_token = accessToken(user);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    return res.status(200).json(
        {
            success : "logged in",
            refresh_token,
            access_token,
            user
        }
    )
}