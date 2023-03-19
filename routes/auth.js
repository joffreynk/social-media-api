import { Router } from "express"
import { login, logout } from "../controllers/auth.js"

const router = Router()

router.get("/", login)

router.get("/:id", logout)


export default router