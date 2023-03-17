import {Router} from "express";
import { addLike, deleteLike, getLike, getLikes, updateLike } from "../controllers/likes";

const router = Router()

router.get("/", getLikes)

router.post("/", addLike)

router.get("/:id", getLike)

router.delete("/:id", deleteLike)


router.patch("/:id", updateLike)
export default router