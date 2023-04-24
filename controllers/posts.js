import db from "../models/connection.js";
import jwt from 'jsonwebtoken';

export const getPosts = (req, res)=>{

  const token = req.cookies.socialMediaAppToken;
  if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "SELECT p.* FROM Posts as p JOIN users AS u ON (u.id = p.userId) LEFT JOIN Follow AS f ON (p.userId = f.followedId ) WHERE  f.followerId = 8 OR p.userId = 8;"; // 

  if
  db.query(sql, [], (err,data)=>{
    if (err) return res.status(404).json({message:"oops you don't have any post from you or your followers"});
    return  res.status(201).json(data)
  })
}


export const addPost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}

export const getPost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const deletePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const updatePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}
