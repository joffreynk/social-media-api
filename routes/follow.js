import {Router} from "express";
import { followBackUser, followaUser, unFollow, getFollowers } from "../controllers/follow";

const router = Router()

router.get("/", getFollowers)

router.post("/", followaUser)

router.delete("/:id", unFollow)

router.put("/", followBackUser)


export default router