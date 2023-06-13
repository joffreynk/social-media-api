import {Router} from "express";
import { followBackUser, followUser, unFollow, getFollowers, getSuggestions } from "../controllers/follow.js";

const router = Router()

router.get("/", getFollowers)

router.get("/suggestions", getSuggestions)

router.post("/", followUser)

router.delete("/:id", unFollow)

router.put("/", followBackUser)


export default router