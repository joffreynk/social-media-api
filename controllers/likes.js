
export const getLikes = (req, res)=>{
  const sql = "SELECT * FROM likes";
  res.status(201).json({name:"likes", pwd:"123456"})
}


export const addLike = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}


export const deleteLike = (req, res)=>{
  res.status(201).json({name:"likes", pwd:"123456"})
}
