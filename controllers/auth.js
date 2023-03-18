import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import db from "../models/connection.js";

export const login = (req, res)=>{

    
  const hashedpassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  const sql = "select * from users where userName = ?";

  db.query(sql, [req.body.userName], (error, data)=>{
    if (error) return res.status(500).json(error);

    if(data.length>0){

      const token = jwt.sign({id: data[0].id}, "seacretKey")

      const comparedPassword = bcrypt.compareSync(req.body.password, data[0].password)

      
      if(!comparedPassword) return res.status(404).json({message: "wrong UserName or Password"});

      const {password, ...others} = data[0]
      return res.cookie("accessToken", token, {httpOnly: true}).status(200).json(others)
    }else {
      return res.status(404).json({message: "user not found"})
    }
  })
  }




  export const logout = (req, res)=>{
    res.clearCookie("accessToken",{
      secure: true,
      sameSite: "none"
    }).status(200).json({message: "User logged out successfully."});
  }
  