import jwt from 'jsonwebtoken';
export const verifyToken = (request,response,next)=>{
  try{
     let token = request.headers.authorization;
     if(!token)
       return response.status(401).json({error: 'Unauthorized request'});
     jwt.verify(token,'itisjsonwebtoken');
     next();   
  }
  catch(err){
    return response.status(401).json({error: 'Unauthorized request'});
  }
}