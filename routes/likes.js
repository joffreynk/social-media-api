import {Router} from "express";
import { addLike, deleteLike, getLikes,  } from "../controllers/likes.js";

const router = Router()

router.get("/:id", getLikes)

router.post("/", addLike)


router.put("/", deleteLike)


export default router