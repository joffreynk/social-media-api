import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import db from "../models/connection.js";

export const login = (req, res)=>{

  const sql = "SELECT * FROM `users` WHERE userName = ?";

  db.query(sql, [req.body.userName], (error, data) => {
    if (error) return res.status(500).json(error);

    if(data.length>0){

      const token = jwt.sign({id: data[0].id}, "secretKey");
      const comparedPassword = bcrypt.compareSync(req.body.password, data[0].password);
      if(!comparedPassword) return res.status(404).json({message: "wrong user name or Password"});
      let {password, profilePicture, ...others } = data[0];
      profilePicture = profilePicture && profilePicture.length ? profilePicture : "http://localhost:8000/1686467578870_avatar.png"
      
      return res.cookie("socialMediaAppToken", token, {httpOnly: true}).status(200).json({...others, profilePicture, token: token});
    }else {
      return res.status(404).json({message: "The account was not found, please register"});
    }
  })
}


 export const logout = (req, res)=>{
  res.clearCookie("socialMediaAppToken",{
    secure: true,
    sameSite: "none"
  }).status(200).json({message: "User logged out successfully."});
}
