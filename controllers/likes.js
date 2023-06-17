
import Jwt from 'jsonwebtoken';
import db from '../models/connection.js';

export const getLikes = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});
  console.log(req.body);

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
    const sql = 'SELECT * FROM likes';

    db.query(sql, (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}


export const addLike = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}


export const deleteLike = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}
