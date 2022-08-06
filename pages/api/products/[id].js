import Products from 'models/ProductsModel';
import { Db_connect } from 'utils/Db_connection';
import auth from 'middlewares/auth';

Db_connect();

export default function handler(req, res){
    switch(req.method) {
        case 'GET':
            return getProduct(req, res);
        case 'PUT':
            return updateProduct(req, res);
        case 'DELETE':
            return deleteProduct(req, res);
    }
};



async function getProduct( req, res ) {
    const { id } = req.query
    try {
        const product = await Products.findById(id);
        if(!product) return res.status(400).json( { error: 'there is no product' } );
        
        res.status(200).json(product)
    } catch( error ){
        console.log(error)
    }
};

async function updateProduct(req, res) {
    const { id } = req.query;

    const { title, inStock, images, price, description, content } = req.body;
    if( !title || !inStock || images.length === 0 || !price || !description || !content) return res.status(400).json({ error: 'please add all fields'});

    try{
        const user = await auth(req, res);
        if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'});

        const product = await Products.findOne({ _id : id });
        if(!product) return res.status(400).json( {error: 'product not found'} );

        const newProduct = await Products.findOneAndUpdate({ _id : id }, {
            title: title.toLowerCase(), inStock, images, price, description, content
        });


        return res.status(200).json( { success : 'product updated' });

    } catch( error ) {
        console.log( { error: error.message })
    }
};

async function deleteProduct(req, res) {
    const { id } = req.query;
    const productsIds = req.body;
    
    // checking authentication
    const user = await auth(req, res);
    if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'})

    try { 
        const deletedProduct = await Products.findOneAndDelete({ _id : id });
            
        return res.status(200).json({ success: "product deleted successfully"})
    } catch( error ) {
        console.log( { error: error.message } );
    }
}