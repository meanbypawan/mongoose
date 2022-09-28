import db from '../util/dbconfig.js';
import mongoose, { mongo } from 'mongoose';
export const deleteProduct = async (request,response,next)=>{
  try{
   let id = request.params.id;
   let product = await db.collection('product').findOne({_id: new mongo.ObjectId(''+id)});
   if(product){
     let status = await db.collection('product').deleteOne({_id: new mongo.ObjectId(''+id)});
     return response.status(203).json(product);
   }
   else
    return response.status(404).json({error: 'Id not found'});
  }
  catch(err){
      return response.status(500).json({error: 'Server Error'});
  } 
}
export const list = async (request,response,next)=>{
    let results = await db.collection('product').find().toArray();
    return results ? response.status(200).json(results)
                : response.status(500).json({error: 'Internal server error'}); 
}
export const save = async (request,response,next)=>{
  let status = await db.collection("product").insertOne(request.body);
  return status ? response.status(201).json({message: 'product saved'})
                : response.status(500).json({error: 'Internal server error'}); 
  /*
  if(status)
   return response.status(201).json({message: 'product saved'});  
  else
   return response.status(500).json({error: 'Internal server error'});
  */   
  /* 
  db.collection('product').insertOne(request.body)
  .then(result=>{
     return response.status(201).json({message: 'product saved'});  
   })
  .catch(err=>{
      return response.status(500).json({error: 'Internal server error'});
  });
  */
}