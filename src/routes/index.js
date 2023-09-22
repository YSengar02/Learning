import { Router } from "express";
const router=Router();
import UserAPIRouter from './users_api/index.js';


router.use("/UserInfo",UserAPIRouter);

export default router;