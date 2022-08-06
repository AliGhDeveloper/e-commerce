import { Db_connect } from "utils/Db_connection"
import Orders from 'models/OrdersModel';
import auth from "middlewares/auth";

Db_connect()

export default function handler ( req, res ){
    switch(req.method){
        case 'PATCH':
            updateOrder(req, res);
    };
    
};


const updateOrder = async (req, res) => {
    const { id } = req.query;

    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json('unauthenticated user');

    const order = await Orders.findOne({ _id: id } );
    if(order.paid) {
        await Orders.findOneAndUpdate({ _id: id }, { 
            delivered: true,
        });
        res.status(200).json({message : "order updated" })
    } else  {
        await Orders.findOneAndUpdate( { _id: id } , {
            paid: true , paidAt : new Date().toISOString(),
            delivered: true,
            method: 'Recived Cash'
        });
        res.status(200).json({message : "order updated",
        data : {
            paidAt : new Date().toISOString(),
            delivered: true,
            method: 'Recived Cash'
        }
    })
    }
}