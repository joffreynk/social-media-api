import db from "../models/connection.js";
import jwt from 'jsonwebtoken';
import uploads from "../config/upload.js";
import fs from 'fs';
import os from 'os';

export const getPosts = (req, res)=>{

  const token = req.headers.token;
  if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "SELECT p.* FROM Posts as p JOIN users AS u ON (u.id = p.userId) LEFT JOIN Follow AS f ON (p.userId = f.followedId ) WHERE  f.followerId = ? OR p.userId = ?;"; // 

  jwt.verify(token, "secretKey", (err, mytoken)=>{
    if(err) return res.status(500).json({message:"Invalid token"})
    db.query(sql, [mytoken.id, mytoken.id], (err, data)=>{
      if (err) return res.status(404).json({message:err.message});
      return  res.status(201).json(data)
    })
  })
}


export const addPost = (req, res) => {

  const token = req.cookies.socialMediaAppToken;
  
  if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "INSERT INTO Posts () VALUES ()";
  
  jwt.verify(token, "secretKey", (err, mytoken)=>{
    if(err) return res.status(500).json({message:"Invalid token"})
    
    try {
      uploads.single('postImage')(req, res, async(err)=>{
        if (err) {
          return res.status(400).json({ message: 'Uploading error, please verify your image' });
        }
  
        // extract file path and other metadata
        let fullUrl = req.headers.host
        const picture = req.file?`http://${fullUrl}/${req.file.path.split(os.type() == 'Windows_NT' ? '\\' : '/').slice(1).join('/')}`:null;
        const description = req.body && req.body.description ? req.body.description : null;

        if(!description && !picture) return res.status(400).json({ message: 'post is not created, please submit either text or image' });
  
        // insert file path and metadata into data
        const sql =  'INSERT INTO Posts (description, picture, userId) VALUES(?, ?, ?)';
        const values = [description, picture, mytoken.id];
  
        db.query(sql, values, (err, result) => {
          if (err) {
            if(fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
            return res.status(404).json({message: 'The post is not created'})
          }
        return res.status(200).json({ message: 'post created successfully' });
  
        });
    })

    } catch (error) {
      return res.status(200).json({message:"failed to upload post"})
    }

  })
}






export const getPost = (req, res)=>{
 
  const token = req.cookies.socialMediaAppToken;
  if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "SELECT * FROM Posts WHERE userId = ?";
  jwt.verify(token, "secretKey", (err, mytoken)=>{
    if(err) return res.status(500).json({message:"Invalid token"})
    console.log(mytoken.id);

    db.query(sql, [mytoken.id, mytoken.id], (err, data)=>{
      if (err) return res.status(404).json({message:err});
      console.log(data);
      return  res.status(201).json(data)
    })

  })
}


export const deletePost = (req, res)=>{
  console.log(req.body);
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const updatePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}
