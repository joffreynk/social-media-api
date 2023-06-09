import {Router} from "express";
import { addLike, deleteLike, getLikes,  } from "../controllers/likes.js";

const router = Router()

router.get("/", getLikes)

router.post("/", addLike)


router.delete("/:id", deleteLike)


export default router