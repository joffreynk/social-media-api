import {Router} from "express";
import { FollowBackUser, FollowaUser, unFollow, getFollowers } from "../controllers/follow";

const router = Router()

router.get("/", getLikes)

router.post("/", addLike)


router.delete("/:id", deleteLike)


export default router