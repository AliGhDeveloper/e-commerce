import { Db_connect } from "utils/Db_connection"
import Users from '../../models/UsersModel';
import {val} from '../../utils/val';
import bcrypt from 'bcrypt';
import cors from 'middlewares/cors';

Db_connect()

export default function handler( req, res) {
    switch(req.method){
        case 'POST': 
            return register(req, res)
        case 'OPTIONS': 
            return cors(req,res)
    }
};

async function register(req, res){
    const { email, password, cf_password } = req.body;
    
    const errorMessage = val(email, password, cf_password);
    if(errorMessage) return res.status(400).json({error : errorMessage});
   
        
    const user = await Users.findOne({email});
    if(user) return res.status(400).json({error : 'email already exist!'}) 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)


    const newUser = new Users({ email, password:hashedPassword });
    try {
        await newUser.save();
        res.status(200).json({success : "user created!"})
    } catch( err ) {
        console.log(err)
    }
};