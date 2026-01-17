import jwt from 'jsonwebtoken';

export function verifyToken (req, res, next) {
     try{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({
            success : false,
            message : 'Access denied. No token provided'
        })
    }
  
        console.log(token)
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;//يزيد معلومات في  req
        next();
    } catch (error){
        res.status(400).json({
            success : false,
            message : 'Invalid token'
        })
    
    }}


