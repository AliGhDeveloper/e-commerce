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

    filtering() {
        const queryObj = {...this.queryString};

        const excludeFields = ['limit', 'page'];
        
        excludeFields.forEach(i => delete(queryObj[i]))
        
        console.log(queryObj)

        if(queryObj.search !== 'all') {
            this.query.find({_id: queryObj.search})
        }
        if(queryObj.isadmin === 'true') {
            this.query.find({role : 'admin'})
        }

        return this
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
    const feature = new FeatureAPI(Users.find(), queryString).pagination().filtering()
    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'})
    try {
        const users = await feature.query;
        
        const limit = parseInt(queryString.limit)
        if(users.length > 1) return res.status(200).json({data: users.slice(0,limit), more: true})
        res.status(200).json({data : users, more: false})
    } catch(error) {
        res.status(404).json({error: error.message})
    }
    
}