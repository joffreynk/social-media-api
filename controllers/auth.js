import bcrypt from "bcryptjs";
import db from "../models/connection.js"

export const login = (req, res)=>{

  const {userName, password} = req.body;
    
  const hashedpassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const sql = "select * from users where userName = ? AND Password = ?"

  db.query(sql, [userName, hashedpassword], (error, data)=>{
    if (error) return res.status(500).json(error);
    console.log(`userName=${userName} password=${hashedpassword}`);
    console.log(data);
    return res.status(201).json(data)
  })
  }




  export const logout = (req, res)=>{
    res.status(201).json({name:"stories", pwd:"123456"})
  }
  