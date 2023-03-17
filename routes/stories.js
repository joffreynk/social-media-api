import {Router} from "express";
import { addStory, deleteStory, getStories, getStory, updateStory } from "../controllers/stories";

const router = Router()

router.get("/", getStories)

router.post("/", addStory)

router.get("/:id", getStory)

router.delete("/:id", deleteStory)


router.patch("/:id", updateStory)

export default router