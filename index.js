import  express  from "express";

const app = express();

app.get("/", (req, res)=>{
  res.status(201).json({name:"Joffrey", pwd:"123456"})
})

app.listen(8000, () => {
  console.log("API server listening on port 8000");
})