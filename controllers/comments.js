
export const getComments = (req, res)=>{
  const sql = "SELECT * FROM comments";
  res.status(201).json({name:"Comment", pwd:"123456"})
}


export const addComment= (req, res)=>{
  res.status(201).json({name:"Comment", pwd:"123456"})
}

export const getComment= (req, res)=>{
  res.status(201).json({name:"Comment", pwd:"123456"})
}


export const deleteComment= (req, res)=>{
  res.status(201).json({name:"Comment", pwd:"123456"})
}


export const updateComment = (req, res)=>{
  res.status(201).json({name:"Comment", pwd:"123456"})
}
