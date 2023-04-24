
export const getPosts = (req, res)=>{
  const sql = "SELECT p FROM Posts as p JOIN users AS u ON u.id = p.userId WHERE u.id = p.userId";

console.log('get posts called');
  res.status(201).json(stories)
}


export const addPost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}

export const getPost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const deletePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}


export const updatePost = (req, res)=>{
  res.status(201).json({name:"posts", pwd:"123456"})
}
