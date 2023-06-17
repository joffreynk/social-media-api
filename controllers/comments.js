import Jwt from 'jsonwebtoken';
import db from '../models/connection.js';

export const getComments = (req, res)=>{
  const token  = req.headers.token;
  if (!token) return res.status(403).json({message: 'please sign in again'});

  Jwt.verify(token, "secretKey", (err, myToken)=>{
    if(err) return res.status(404).json({message:'Invalid token' });
    const postId  = req.url.split('/').slice(-1)[0]
    const sql = 'SELECT * FROM comments WHERE postId = ?';

    db.query(sql, [postId], (err, result)=>{
      if(err) return  res.status(404).json({message: err.message});
      return res.status(200).json(result);
    })
  });
}

export const addComment = (req, res)=>{
  const token = req.headers.token;
  if(!token) return res.status(404).json({message:"please login before you continue"});

  Jwt.verify(token, 'secretKey', (err, myToken)=>{
    if(err) return  res.status(404).json({message: "your identification is invalid, please logout and try again"});
    const sql = 'INSERT INTO comments(postId, userId, description) VALUES (?, ?, ?);';
    const {postId, comment} = req.body;

    db.query(sql, [postId, myToken.id, comment], (err, result)=>{
      if(err) return res.status(404).json({message:"OOOOOPS commenting failed"});
      return res.status(200).json({message: 'Thank you for commenting'});
    })
  })
}

export const deleteComment = (req, res)=>{;
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
