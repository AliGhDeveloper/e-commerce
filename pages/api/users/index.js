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

class FeatureAPI { 
    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString 
    }

    

    pagination() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 3;
        const skip = (page - 1) * limit;
        this.query.skip(skip).limit(limit + 1)
        return this
    }
}

async function getUsers(req, res) {
    const queryString = req.query;
    const feature = new FeatureAPI(Users.find(), queryString).pagination()
    
    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'})
    
    const users = await feature.query;
    const limit = parseInt(queryString.limit)
    if(users.length > 1) return res.status(200).json({data: users.slice(0,limit), more: true})
    res.status(200).json({data : users, more: false})
}