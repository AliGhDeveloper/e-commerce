import Categories from 'models/CategoriesModel';
import { Db_connect } from 'utils/Db_connection';
import auth from 'middlewares/auth';


Db_connect();

export default function handler(req, res){
    switch(req.method) {
        case 'GET':
            return getCats(req, res);
        case 'POST':
            return createCat(req, res);
        case 'OPTIONS': 
            return res.status(200).send('ok')
    }
};

async function createCat(req, res) {

    const { name } = req.body;

    if(!name) return res.status(400).json({ error: 'name cannot be blank'})

    //checking authentication
    const user = await auth(req, res);
    if(!user || user && user.role !== 'admin') return res.status(401).json({ error: "authentication error"})

    const newCat = new Categories({ name });
    await newCat.save();

    res.status(200).json(newCat)
};

async function getCats(req, res) {
    const cats = await Categories.find();
    
    res.setHeader('Access-Control-Allow-Origin', 'https://e-commerce-project-one.vercel.app')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.status(200).json(cats)
}