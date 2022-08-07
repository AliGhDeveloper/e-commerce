export default function preflight(req,res) {
    if( req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization'); // If needed
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.status(200).json({})
    }
}