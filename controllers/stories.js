import  Jwt  from "jsonwebtoken";
import uploads from "../config/upload.js";
import db from "../models/connection.js";

export const getStories = (req, res)=>{
  const sql = "SELECT * FROM stories";
  res.status(201).json({name:"stories", pwd:"123456"})
}


export const addStory = (req, res)=>{
  const token = req.headers.token;
  if(!token) return res.status(404).json({message:"please login before you continue"});

  Jwt.verify(token, 'secretKey', (err, myToken)=>{
    if(err) return  res.status(404).json({message: "your identification is invalid, please logout and try again"});
    try {
      uploads.single('story')(req, res, async(error)=>{
        if(error) return res.status(404).json({message: "failed to upload story picture"});
        const sql  = 'INSERT INTO stories (storyPicture, UserId ) VALUES(?,?);';
        const storyUrl = req.file?`http://${fullUrl}/${req.file.path.split(os.type() == 'Windows_NT' ? '\\' : '/').slice(1).join('/')}` : null;
        
        db.query(sql, [storyUrl, myToken.id], (er, result) => {
          if(er) {
            if(fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
            return res.status(404).json({message: 'The story is not created'})
          }

          return res.status(204).json({message: "uploaded story picture"});
        })
      })
    } catch (error) {
      return res.status(404).json({message: "failed to upload story picture"});
    }
  });
}

export const getStory = (req, res)=>{
  res.status(201).json({name:"stories", pwd:"123456"})
}


export const deleteStory = (req, res)=>{
  res.status(201).json({name:"stories", pwd:"123456"})
}


export const updateStory = (req, res)=>{
  res.status(201).json({name:"stories", pwd:"123456"})
}
