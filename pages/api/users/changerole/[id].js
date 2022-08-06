import { Db_connect } from "utils/Db_connection";
import Users from 'models/UsersModel';
import auth from 'middlewares/auth';

Db_connect();

export default function handler(req, res) {
    switch(req.method){ 
        case 'PATCH': 
            updateuser(req, res);
    }
};

async function updateuser(req, res) {
    const { id } = req.query;
    const { isAdmin } = req.body;
    console.log(isAdmin)
    const user = await auth(req, res);
    if(user.role !== 'admin' || user.role === 'admin' && !user.root) return res.status(401).json({ error: 'authentication error'})

    await Users.findOneAndUpdate({ _id : id }, {
        role : isAdmin ? 'admin' : 'user'
    });

    

    res.status(200).json( { success: "user role updated" })
}