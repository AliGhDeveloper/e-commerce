import Orders from 'models/OrdersModel';
import { shippingVal } from 'utils/val';
import { Db_connect } from 'utils/Db_connection';
import auth from 'middlewares/auth';

Db_connect();


export default function handler( req, res ) {
    switch( req.method ) {
        case 'POST' : 
            return setOrder( req, res );

        case 'GET' : 
            return getOrders( req, res );
    };
};

async function getOrders(req, res) {
    try { 
        //checking authentication
        const user = await auth(req, res);
        if(!user) return res.status(401).json({error: 'there is a problem with authentication'});
        
        //finding orders for the user
        let orders;
        if(user.role !== 'admin'){
            orders = await Orders.find({user : user._id})
        }else {
            orders = await Orders.find()
        }
    
        return res.status(200).json(orders)
    
    } catch( error ){
        console.log({ error: error.message })
    }
}

async function setOrder(req, res) {
    const { email, address, telephone, cart, total } = req.body;
    const errorMessage = shippingVal(address, email, telephone)
    if( errorMessage ) return res.status(400).json({ error: errorMessage });


    try {
        const user = await auth(req, res);
        const newOrder = new Orders({ user: user._id, email, address, telephone, cart, total});
        await newOrder.save()
        res.status(200).json(newOrder)
    } catch( error ) {
        console.log({ error : error.message })
    }
};

