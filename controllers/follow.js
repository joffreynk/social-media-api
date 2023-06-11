import  Jwt  from "jsonwebtoken";
import db from "../models/connection.js";

export const followUser = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
    const sql = 'INSERT INTO Follow (followerId, followedId) VALUES(?, ?)';

    db.query(sql, [myToken.id, req.body.followedId], (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json({message: 'you have successfully followed'});
    })

  });

  res.status(201).json({name:"likes", pwd:"123456"})
}

  

export const followBackUser = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}



export const unFollow = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}

export const getFollowers = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}