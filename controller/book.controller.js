import { validationResult } from 'express-validator';
import { Book }  from '../model/book.schema.js';
export const update = async (request,response,next)=>{
   let book = await Book.findById(request.body._id)
   if(book){
    request.body.image = book.image; 
    if(request.file)
      request.body.image = request.file.filename;
    Book.findByIdAndUpdate(book._id,{
       $set: request.body
     }).then(result=>{
       return response.status(201).json(request.body);
     }).catch(err=>{
       return response.status(500).json({error: 'Server Error'});
     }); 
   }
   else
     return response.status(404).json({error: 'Resource not found'}); 
}
export const deleteBook = async (request,response,next)=>{
  let id = request.params.id;
  let book = await Book.findByIdAndDelete(id);
  return book ? response.status(203).json(book):
                  response.status(404).json({error:'Id not found'});
}
export const list = (request,response,next)=>{
  Book.find().then(result=>{
    return response.status(200).json(result);
  }).catch(err=>{
    return response.status(500).json({error: 'Server Error'});
  });
}
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