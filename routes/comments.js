import {Router} from "express";
import { addComment, deleteComment, getComments } from "../controllers/comments.js";

const router = Router()

router.get("/:id", getComments)

router.post("/", addComment)

router.put("/", deleteComment)


export default router