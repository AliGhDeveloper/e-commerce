import { Db_connect } from "utils/Db_connection";
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';

Db_connect();

export default function handler(req, res) {
    switch(req.method){ 
        case 'GET': 
            getUsers(req, res);
    }
};

async function getUsers(req, res) {
    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'})

    const users = await Users.find();
    res.status(200).json(users)
}