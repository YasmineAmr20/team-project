import { Router } from "express";
import dept from "../database/department_data.js";
import deptModel from "../database/departmentModel.js";
import dept_data from "../database/department_data.js"
const router = new Router();
router.get("/",(req,res)=>{
    res.render("dept",{layout:false})
    
});



router.get("/create",(req,res)=>{
    deptModel.create(dept_data)
    res.send("department data added")
    // const studentArray=[]
    // for (let index = 0; index < 100; index++) {
    //     studentArray.push({
    //         name:faker.name.firstName(),
    //         city:faker.address.city(),
    //     });
        
    // }
    // studentModel.create(studentArray)
    // res.send("done");
});

export default router;