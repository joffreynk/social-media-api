import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import usersRouter from "./routes/users.js"
import likesRouter from "./routes/likes.js"
import commentsRouter from "./routes/comments.js"
import postsRouter from "./routes/posts.js"
import socialAccountsRouter from "./routes/socialAccounts.js"
import storiesRouter from "./routes/stories.js"
import authRouter from "./routes/auth.js"

const app = express();

// app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: "http://localhost:3000"}))

app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Credentials', true);
  next();
})

app.use(express.static('public'))

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/likes", likesRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/socialAccounts", socialAccountsRouter);
app.use("/api/v1/stories", storiesRouter);

app.listen(8000, () => {
  console.log("API server listening on port 8000");
})