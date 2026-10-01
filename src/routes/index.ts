import { uploadVideoController } from "../controllers/vedio.controller.js";
import upload from "../middleware/multer.middleware.js";
import {Router} from "express"
const router=Router();
router.post("/upload",upload.single("file"),uploadVideoController)
export default router