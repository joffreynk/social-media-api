import {Router} from "express";

const router = Router()

router.get("/", (req, res)=>{
  res.status(201).json({name:"Joffrey", pwd:"123456"})
})

export default router