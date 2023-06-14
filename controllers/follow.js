import  Jwt  from "jsonwebtoken";
import db from "../models/connection.js";

export const followUser = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
    const sql = 'INSERT INTO Follow (follower, followed) VALUES(?, ?)';

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
    //const sql1 = "SELECT DISTINCT p.userId FROM Posts as p JOIN users AS u ON (u.id = p.userId) LEFT JOIN Follow AS f ON ( p.userId = f.followed OR p.userId = f.follower  ) WHERE f.follower = 8 OR f.followBack = 8 OR p.userId = 8;"

    /*
    The following statement retrieves all the users whom are not in my connections
    const sql = "SELECT id , userName, lastName, firstName, email, profilePicture, coverPicture, location FROM users WHERE id NOT IN(SELECT DISTINCT p.userId FROM Posts as p JOIN users AS u ON (u.id = p.userId) LEFT JOIN Follow AS f ON ( p.userId = f.followed OR p.userId = f.follower ) WHERE f.follower = ? OR f.followBack = ? OR p.userId = ?);";
    
    */
   
   const sql = "SELECT u.id , userName, lastName, firstName, email, profilePicture, coverPicture, location FROM users AS u LEFT JOIN Follow AS f ON(u.id = f.follower OR u.id = f.followed ) WHERE u.id NOT IN(SELECT DISTINCT u.id FROM users AS u LEFT JOIN Follow AS f ON(u.id = f.follower OR u.id = f.followed ) WHERE u.id = ? OR f.follower = ? OR f.followBack = ?);"
    db.query(sql, [myToken.id, myToken.id,  myToken.id], (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}




export const getSuggestions = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) res.status(404).json({message:'Invalid token' });
   
   const sql = "SELECT u.id , userName, lastName, firstName, email, profilePicture, coverPicture, location, f.followed FROM users AS u LEFT JOIN Follow AS f ON(u.id = f.follower OR u.id = f.followed ) WHERE u.id NOT IN(SELECT DISTINCT u.id FROM users AS u LEFT JOIN Follow AS f ON(u.id = f.follower OR u.id = f.followed ) WHERE u.id = ? OR f.follower = ? OR f.followBack = ?);"
    db.query(sql, [myToken.id, myToken.id,  myToken.id], (err, result)=>{
      if(err) res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}