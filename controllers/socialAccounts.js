
export const getSocialAccounts = (req, res)=>{
  const sqlCheck = "SELECT * FROM socialAccounts";
  res.status(201).json({name:"User details", pwd:"123456"})
}


export const addSocialAccounts = (req, res)=>{
  res.status(201).json({name:"User details", pwd:"123456"})
}

export const deleteSocialAccounts = (req, res)=>{
  res.status(201).json({name:"User details", pwd:"123456"})
}


export const updateSocialAccounts = (req, res)=>{
  res.status(201).json({name:"User details", pwd:"123456"})
}
