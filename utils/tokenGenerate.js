import jwt from 'jsonwebtoken';


export const refreshToken = ( payload ) => {
    const refreshtoken =  jwt.sign({_id : payload._id}, process.env.REFRESH_TOKEN_SECRET, { expiresIn : '7d'})
    return refreshtoken
};

export const accessToken = ( payload ) => {
    const accesstoken =  jwt.sign({_id : payload._id}, process.env.ACCESS_TOKEN_SECRET, { expiresIn : '15min'})
    return  accesstoken
}