import multer from "multer";
import fs from "fs";

const diskData = multer.diskStorage({
  destination: (req, file, cb)=>{
    if(!fs.existsSync('./public/images')) fs.mkdirSync('./public/images');
    cb(null, './public/images')
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + '_' +file.originalname)
  },
})

const uploads  = multer({storage: diskData})

export default  uploads;