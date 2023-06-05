import multer from "multer";
import fs from "fs";

const diskData = multer.diskStorage({
  destination: (req, file, cb)=>{
    if(!fs.existsSync('./public')) fs.mkdirSync('./public');
    cb(null, './public')
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + '-' +file.originalname)
  },
})

const uploads  = multer({storage: diskData})

export default  uploads;