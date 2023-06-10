import {Router} from "express";
import { followBackUser, followUser, unFollow, getFollowers } from "../controllers/follow.js";

const router = Router()

router.get("/", getFollowers)

router.post("/", followUser)

router.delete("/:id", unFollow)

router.put("/", followBackUser)


export default router