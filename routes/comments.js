import {Router} from "express";
import { addComment, deleteComment, getComment, getComments, updateComment } from "../controllers/comments";

const router = Router()

router.get("/", getComments)

router.post("/", addComment)

router.get("/:id", getComment)

router.delete("/:id", deleteComment)


router.patch("/:id", updateComment)

export default router