import  express  from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

import usersRouter from "./routes/users.js"
import likesRouter from "./routes/likes.js"
import commentsRouter from "./routes/comments.js"
import postsRouter from "./routes/posts.js"
import userDetailsRouter from "./routes/userDetails.js"
import storiesRouter from "./routes/stories.js"
import authRouter from "./routes/auth.js"

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/likes", likesRouter);
app.use("/api/v1/comments", commentsRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/userDetails", userDetailsRouter);
app.use("/api/v1/stories", storiesRouter);

app.listen(8000, () => {
  console.log("API server listening on port 8000");
})