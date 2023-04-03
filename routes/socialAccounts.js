import {Router} from "express";
import { addSocialAccounts, deleteSocialAccounts, getSocialAccounts, updateSocialAccounts } from "../controllers/socialAccounts.js";

const router = Router()

router.post("/", addSocialAccounts)

router.get("/:id", getSocialAccounts)

router.delete("/:id", deleteSocialAccounts)


router.patch("/:id", updateSocialAccounts)

export default router