import { Db_connect } from "utils/Db_connection";
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';

Db_connect();

export default function handler(req, res) {
    switch(req.method){ 
        case 'DELETE': 
            deleteuser(req, res);
    }
};

async function deleteuser(req, res) {
    const { id } = req.query;

    const user = await auth(req, res);
    
    if(!user || user.role !== 'admin') return res.status(401).json({ error: 'authentication error'})

    const deletedUser = await Users.findOneAndDelete({ _id : id });

    res.status(200).json(deletedUser)
}