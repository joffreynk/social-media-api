import bcrypt from "bcryptjs";
import db from "../models/connection.js"

export const login = (req, res)=>{

  const {userName, password} = req.body;
    
  const hashedpassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const sql = "select * from users where userName = ?"

  db.query(sql, [userName, hashedpassword], (error, data)=>{
    if (error) return res.status(500).json(error);

    if(data.length>0){
      const comparedPassword = bcrypt.compareSync(password, data[0].password)
      if(!comparedPassword) return res.status(404).json({message: "wrong UserName or Password"}) 
      return res.status(201).json(data[0])
    }else {
      return res.status(404).json({message: "user not found"})
    }
  })
  }




  export const logout = (req, res)=>{
    res.status(201).json({name:"stories", pwd:"123456"})
  }
  