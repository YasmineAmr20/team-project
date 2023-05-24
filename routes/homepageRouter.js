import { Router } from "express";

const router = new Router();
router.get("/",(req,res)=>{
    res.render("homepage",{layout:false})
});

export default router;