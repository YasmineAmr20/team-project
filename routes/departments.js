import { Router} from "express";
// import department from "../database/department.js";
// import deptModel from "../database/departmentModel.js";


import { create, index, store } from "../controllers/department.js";

const router=new Router();



router.get('/',index);
router.get('/create',create);
router.post('/',store);









router.get('/create_departments',async(req,res)=>{
    await department.create({
            name: "computer science",
            code: "cs",
    
    });

    await department.create({
        name: "information system",
        code: "IS",

});

await department.create({
    name: "information technology",
    code: "IT",

});



res.send("added");
});



// router.get('/create_subjects',async(req,res)=>{
//     await subject.create({
//             name: "Java",
//             code: "12",
    
//     });

//     await subject.create({
//         name: "Software",
//         code: "15",

// });


// res.send("added");
// });


export default router;


