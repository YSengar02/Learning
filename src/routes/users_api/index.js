import { Router } from "express";
import UserController from "./controller/index.js"



const router = Router();
router.post("/userSignup",UserController.userSignup);


export default router;