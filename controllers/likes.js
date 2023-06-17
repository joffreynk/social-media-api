
import Jwt from 'jsonwebtoken';
import db from '../models/connection.js';

export const getLikes = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) return res.status(404).json({message:'Invalid token' });
    const postId  = req.url.split('/').slice(-1)[0]
    const sql = 'SELECT * FROM likes WHERE postId = ?';

    db.query(sql, [postId], (err, result)=>{
      if(err) return  res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}


export const addLike = (req, res)=>{
  const token = req.headers.token;
  if(!token) return res.status(404).json({message:"please login before you continue"});

  Jwt.verify(token, 'secretKey', (err, myToken)=>{
    if(err) return  res.status(404).json({message: "your identification is invalid, please logout and try again"});
    const sql = 'INSERT INTO likes(postId, userId) VALUES (?, ?);';

    db.query(sql, [req.body.postId, myToken.id], (err, result)=>{
      if(err) return res.status(404).json({message:"OOOOOPS like failed"});
      return res.status(200).json({message: 'you have successfully liked a post'});
    })
  })
}


export const deleteLike = (req, res)=>{;
  const token = req.headers.token
  if(!token) return res.status(404).json({message:"please login before you continue"});
  Jwt.verify(token, 'secretKey', (error, myToken)=>{
    if(error) return  res.status(404).json({message: "your identification is invalid, please logout and try again"}); 

    const {postId, likeId} = req.body
    const sql = 'DELETE FROM likes WHERE id = ? AND userId = ? AND postId = ?;';
    db.query(sql, [likeId, myToken.id, postId], (err, result)=>{
      if (err) return res.status(404).json({message:'failed to dislike a post'});
      return res.status(200).json({message: 'you have successfully disLiked a post'});
    })
  })
}
