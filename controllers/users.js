import bcrypt from "bcryptjs";
import db from "../models/connection.js";

export const getUsers = (req, res)=>{
      
  // check if user exist
  const sqlCheck = "SELECT * FROM users";


  db.query(sqlCheck, [req.body.user], (err, data)=>{
    if(err) return res.status(500).json(err);
    if(data.length) return res.status(409).json(data);
})
}


export const addUser = (req, res)=>{
  // check if user exist
  const sqlCheck = "SELECT * FROM users WHERE userName = ?";
  const body = JSON.parse(req.body.body)

  db.query(sqlCheck, [body.userName], (err, data)=>{
    if(err) return res.status(500).json({error: 'oops check your '});
    if(data.length) return res.status(409).json({error: "The User already exists or taken!"});


    // IF USER DOESN'T EXIST CREATE NEW ONE
    const sql = "INSERT INTO users (userName, lastName, firstName, email, password) VALUES(?, ?, ?, ?, ?)";
    const {userName, lastName, firstName, email, password}  = body;
    
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    const values = [userName, lastName, firstName, email, hashedPassword];

    db.query(sql, values, (error, dataValues) => {
      if(error) return res.status(500).json({error: error});

      return res.status(200).json({message: "User created successfully!"});
    })
  })

}



export const getUser = (req, res)=>{
   // check if user exist
   const sqlCheck = "SELECT * FROM users WHERE id = ?";

   db.query(sqlCheck, [req.body.id], (err, data)=>{
     if(err) return res.status(500).json(err);
     if(data.length) return res.status(409).json(data);
 })
}


export const deleteUser = (req, res)=>{
  // check if user exist
  const sqlCheck = "DELETE FROM users WHERE id = ?";

  db.query(sqlCheck, [req.body.id], (err, data)=>{
    if(err) return res.status(500).json(err);
    if(data.length) return res.status(409).json({message:"User deleted successfully"});
  })
}


export const updateUser = (req, res)=>{
  res.status(201).json({name:"Joffrey", pwd:"123456"});
}

