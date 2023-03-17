import {Router} from "express";
import { addUserDetail, deleteUserDetail, getUserDetail, updateUserDetail } from "../controllers/userDetails.js";

const router = Router()

router.post("/", addUserDetail)

router.get("/:id", getUserDetail)

router.delete("/:id", deleteUserDetail)


router.patch("/:id", updateUserDetail)

export default router