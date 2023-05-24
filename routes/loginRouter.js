import { Router } from "express";

import { login_form,login } from "../controllers/user.js";




const router = new Router();
router.get("/",login_form);
router.post("/",login)


export default router;