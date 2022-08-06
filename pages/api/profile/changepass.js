import { Db_connect } from 'utils/Db_connection';
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';
import bcrypt from 'bcrypt';
import { val } from 'utils/val';

Db_connect();

export default function handler( req, res ) {
    switch( req.method ) {
        case 'PATCH' : 
            changePassword(req, res);
    }
};

const changePassword = async(req, res) => {
    const { email, newPassword, cf_newPassword } = req.body
    const errorMessage = val(email, newPassword, cf_newPassword);
    if(errorMessage) return res.status(400).json( { error: errorMessage })
    
    const salt = await bcrypt.genSalt(12);
    const hashedPass = await bcrypt.hash(newPassword, salt)
    const user = await auth(req, res);
    console.log(user)
    await Users.findOneAndUpdate( { _id : user._id } , { 
        password : hashedPass
    })
    return res.status(200).json('password changed')
}