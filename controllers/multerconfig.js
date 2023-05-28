import multer from "multer";
import fs from "fs";

export default  uploads  = multer({
  destination: (req, file, cb)=>{
    if(!fs.existsSync('./public')) fs.mkdirSync(__dirname + '/public');
    cb(null, './public')
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + '-' +file.filename)
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type'));
    }
  }
})
