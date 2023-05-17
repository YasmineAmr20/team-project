import { Router } from "express";
import dept from "../database/department_data.js";
import deptModel from "../database/departmentModel.js";
const router = new Router();
router.get("/",(req,res)=>{
    res.render("login",{layout:false})
});

export default router;