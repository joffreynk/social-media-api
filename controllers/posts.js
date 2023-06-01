import db from "../models/connection.js";
import jwt from 'jsonwebtoken';
import uploads from "../config/upload.js";

export const getPosts = (req, res)=>{

  const token = req.cookies.socialMediaAppToken;
  if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "SELECT p.* FROM Posts as p JOIN users AS u ON (u.id = p.userId) LEFT JOIN Follow AS f ON (p.userId = f.followedId ) WHERE  f.followerId = ? OR p.userId = ?;"; // 

  jwt.verify(token, "secretKey", (err, mytoken)=>{
    if(err) return res.status(500).json({message:"Invalid token"})


    db.query(sql, [mytoken.id, mytoken.id], (err,data)=>{
      if (err) return res.status(404).json({message:err});
      return  res.status(201).json(data)
    })

  })
}


export const addPost = (req, res)=>{

  const token = req.cookies.socialMediaAppToken;
  console.log('create post called');

   if (!token) return res.status(401).json({message: "Not logged in"})
  const sql = "INSERT INTO Posts () VALUES ()";

  jwt.verify(token, "secretKey", (err, mytoken)=>{
    if(err) return res.status(500).json({message:"Invalid token"})

    try {
      upload.single('postImage')(req, res, async(err)=>{
        if(err) return res.status(500).json({message:"failed to upload post image"})
      })

      
    console.log('ready to create user');
    console.log(req.body);
    
    
    
    const {path, filename} = req.files;
    console.log(filename);
    
    // db.query(sql, [mytoken.id, mytoken.id], (err,data)=>{
      //   if (err) return res.status(404).json({message:err});
      //   return  res.status(201).json(data)
      // })
      return res.status(200).json({message:"ready to create user"})
    } catch (error) {
      
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
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const updatePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}
