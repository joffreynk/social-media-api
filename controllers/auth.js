import db from "../models/connection.js"


export const register = (req, res) => {
  
  // check if user exist
  const sql = "SELECT * FROM users WHERE userName = ?"

  db.query(sql, [req.body.user], (err, data)=>{
    if(err) return res.status(500).json(err)
    if(data.length) return res.status(409).json({message: "user already exists!"}) 
  })

  // create user
    
}

export const login = (req, res)=>{
    res.status(201).json({name:"stories", pwd:"123456"})
  }

  export const logout = (req, res)=>{
    res.status(201).json({name:"stories", pwd:"123456"})
  }
  