import Categories from 'models/CategoriesModel';
import Products from 'models/ProductsModel';
import { Db_connect } from 'utils/Db_connection';
import auth from 'middlewares/auth';


Db_connect();

export default function handler(req, res){
    switch(req.method) {
        case 'PUT':
            return putCat(req, res);
        case 'DELETE':
            return deleteCat(req, res);
    }
};

async function putCat(req, res) {
    const { id } = req.query;
    const { name } = req.body;

    if(!name) return res.status(400).json({ error: 'name cannot be blank'})

    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json( { error: 'authentication error' } );

    const updatedCat = await Categories.findOneAndUpdate({ _id: id }, {name});

    return res.status(200).json({ ...updatedCat._doc, name})
};

async function deleteCat(req ,res) {
    const { id } = req.query
    try { 
        const user = await auth(req, res);
        if( user.role !== 'admin' ) return res.status(401).json({ error: 'authentication error'});

        const products = await Products.find({ category: id })
        if(products.length > 0) return res.status(400).json({error: 'please delete all related products first then try again!'})

        await Categories.findOneAndDelete({ _id : id });

        return res.status(200).json({success: 'category deleted successfully'})

    } catch( error ) {
        console.log({ error : error.message })
    }
}