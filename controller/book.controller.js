import { validationResult } from 'express-validator';
import { Book }  from '../model/book.schema.js';
export const save = (request,response,next)=>{
  const errors = validationResult(request);
  if(!errors.isEmpty())
    return response.status(401).json(errors.array());
  else{
    request.body.image = request.file.filename;
    Book.create(request.body)
    .then(result=>{
        return response.status(201).json(result);
    }).catch(err=>{
        return response.status(500).json({error: 'Server Error'});
    });
  }  
}