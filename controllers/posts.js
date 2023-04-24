import db from "../models/connection.js";

export const getPosts = (req, res)=>{
  const sql = "SELECT p.* FROM Posts as p JOIN users AS u ON u.id = p.userId  WHERE u.id = 8;"; // JOIN follow AS f ON u.id = p.userId

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
