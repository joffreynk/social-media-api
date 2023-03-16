import  express  from "express";

const app = express();

import usersRouter from "./routes/users.js"

app.use("/api/v1/users", usersRouter);

app.listen(8000, () => {
  console.log("API server listening on port 8000");
})