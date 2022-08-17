import jwt from 'jsonwebtoken';
import Users from 'models/UsersModel';

export default async function auth(req, res) {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json( { error: "unAthenticated user!" } );
    
    try { 
        const verify = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if(!verify) return res.status(401).json( { error: "invalid Token!"})

        const userId = verify._id;

        const user = await Users.findOne( { _id : userId } );
    
        return user
    } catch( error ) {
        console.log(error.message)
        return res.status(401).json({error: 'please refresh the page and try again!'})
    }   
}
