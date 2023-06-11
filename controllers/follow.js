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
}

  

export const followBackUser = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
    const sql = 'UPDATE Follow SET followBack = 1 WHERE followedId = ? AND id = ?';

    db.query(sql, [myToken.id, req.body.id], (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json({message: 'you have successfully followed'});
    })
  });
}



export const unFollow = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}

export const getFollowers = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
    const sql = "SELECT  u.id AS userId, u.userName, u.lastName, u.firstName, u.email, u.profilePicture, u.coverPicture, u.location  FROM users AS u LEFT JOIN Follow AS f ON(u.id = f.followerId OR u.id != f.followedId) WHERE f.followerId != 8 OR f.followedId = 1;";

    db.query(sql, [myToken.id, req.body.id], (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}