import { Db_connect } from "utils/Db_connection"
import Orders from 'models/OrdersModel';
import auth from "middlewares/auth";

Db_connect()

export default function handler ( req, res ){
    switch(req.method){
        case 'GET':
            getOrder(req, res);
        case 'PATCH':
            updateOrder(req, res);
    };
    
};


const updateOrder = async (req, res) => {
    const { id } = req.query;

    const user = await auth(req, res);
    if(!user) return res.status(401).json('unauthenticated user');

    const order = await Orders.findOneAndUpdate({ _id : id }, {
        paid: true, 
        paidAt: new Date().toISOString()
    });


    res.status(200).json({message : "order updated",
        data : {
            paid: true, 
            paidAt: new Date().toISOString()
        }
    })
}