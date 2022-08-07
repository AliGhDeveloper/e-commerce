export default function handler(req, res) {
    const { method } = req;
    if(method === 'OPTIONS'){
        return res.status(200).send('ok')
    }
}