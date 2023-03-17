import { Router } from "express"
import { login, logout, register } from "../controllers/auth.js"

const router = Router()

router.post("/", register)

router.get("/", login)

router.post("/:id", logout)


export default router