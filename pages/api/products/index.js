import Products from 'models/ProductsModel';
import { Db_connect } from 'utils/Db_connection';
import auth from 'middlewares/auth';

Db_connect();

export default function handler(req, res){
    switch(req.method) {
        case 'GET':
            return getProducts(req, res);
        case 'POST':
            return createProduct(req, res);
        case 'DELETE':
        return deleteProducts(req, res);
    }
};

class FeaturesAPI {
    constructor( query, queryString ){
        this.query = query;
        this.queryString = queryString
    }
    
    filtering() {
        const queryObj = {...this.queryString};

        const excludeFields = ['limit', 'sort', 'page'];
        excludeFields.forEach( field => delete(queryObj[field]))
        
        if(queryObj.category !== 'all'){ 
            this.query.find({category : queryObj.category})
        }
        if(queryObj.title !== 'all') {
            this.query.find({ title : {$regex : queryObj.title}})
        }
        return this
    }

    sorting() { 
        if(this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join('');
            this.query.sort(sortBy)
        } else { 
            this.query.sort('-createdAt')
        }
        return this
    }

    pagination() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 3;
        const skip = (page - 1) * limit;
        this.query.skip(skip).limit(limit + 1);
        return this
    }
}

async function getProducts( req, res ) {
    const feature = new FeaturesAPI(Products.find(), req.query).pagination().filtering().sorting();
    try {
        const products = await feature.query
        
        if(products.length > 3 ) return res.status(200).json({ products : products.slice(0,3), more: true })
        return res.status(200).json(products)
    } catch( error ){
        console.log(error)
    }
};

async function createProduct( req, res ) {
    const { images, category, title, description, content, inStock, price } = req.body;

    if( !title || !category || category === 'all' || !description || !content || !inStock || !price ) return res.status(400).json( { error: 'please add all fields'})
    
    if(images.length === 0) return res.status(400).json( {error: 'please select at least one image'} );


    try {
        const user = await auth(req, res);
        if( user.role !== 'admin' ) return res.status(401).json({ error: 'authentication error' });

        const newProduct = new Products({ category, title : title.toLowerCase(), description, content, inStock, price, images });

        await newProduct.save();

        return res.status(200).json({ success: 'product created successfully'})

    } catch( error ){
        console.log(error)
    }
};

async function deleteProducts(req,res){
    try {
        const items = req.body;
        if(!items) return res.status(400).json({error: 'no items to delete'});

        const user = await auth(req,res);
        if(user.role !== 'admin') return res.status(401).json({ error: 'authentication error'});

        items.forEach(async(item) => {
            await Products.findOneAndDelete({ _id : item })
        })
        
        return res.status(200).json({success: 'deleted all'})
    } catch(error) {
        console.log({ error: error.message })
    }
}