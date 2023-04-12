
export const getStories = (req, res)=>{
  res.status(201).json({name:"stories", pwd:"123456"})
}


export const addStory = (req, res)=>{
  const sqlCheck = "SELECT * FROM stories";
  res.status(201).json({name:"stories", pwd:"123456"})
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
