import { Router } from "express";

import {doctor_user} from "../controllers/doctor_user.js"

const router = new Router();

router.get("/", doctor_user);



export default router;