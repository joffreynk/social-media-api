import {Router} from "express";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "../controllers/users";

const router = Router()

router.get("/", getUsers)


router.post("/", addUser)

router.get("/:id", getUser)

router.delete("/:id", deleteUser)


router.patch("/:id", updateUser)

export default router