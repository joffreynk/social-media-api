import {Router} from "express";
import { addSocialAccounts, deleteSocialAccounts, getSocialAccounts, updateSocialAccounts } from "../controllers/SocialAccountss.js";

const router = Router()

router.post("/", addSocialAccounts)

router.get("/:id", getSocialAccounts)

router.delete("/:id", deleteSocialAccounts)


router.patch("/:id", updateSocialAccounts)

export default router