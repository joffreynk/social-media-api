import { Router } from "express"
import { login, logout } from "../controllers/auth.js"

const router = Router()

router.post("/", login)

router.get("/:id", logout)


export default router