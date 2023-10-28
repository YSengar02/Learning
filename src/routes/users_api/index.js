import { Router } from "express";
import UserController from "./controller/index.js"
import logController from "../Logs_data/index.js"



const router = Router();
router.post("/signup",UserController.userSignup)
router.post("/userLogin",UserController.userLogin);
router.post("/getaction",logController.getdata);


export default router;