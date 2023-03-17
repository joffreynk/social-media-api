import {Router} from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/posts";

const router = Router()

router.get("/", getPosts)

router.post("/", addPost)

router.get("/:id", getPost)

router.delete("/:id", deletePost)


router.patch("/:id", updatePost)

export default router