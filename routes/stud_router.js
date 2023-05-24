import { Router } from "express";

import {student_user} from "../controllers/student_user.js";

const router = new Router();

router.get("/", student_user);



export default router;