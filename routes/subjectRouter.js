import { Router } from "express";
// import department from '../database/departmentModel.js';
// import subject from '../database/subjectsModel.js';
import { create, index, show, store } from "../controllers/subject.js";

const router = new Router();


router.get("/", index);

router.get("/createNewSubject",create);   //   http://localhost:250/subjects/createNewSubject

router.post('/',store);

router.get('/:_id',show)
















// localhost:250/sbujects/create_subject

router.get('/create_subject',async(req,res)=>{
await subject.create({
    sub_name: 'Programing-3',
    sub_code: 'prog',
    dept_name: 'cs',
    previous_require: 'java',

});
await subject.create({
    sub_name: 'Logic',
    sub_code: 'lg',
    dept_name: 'cs',
    previous_require: 'physics',

});
await subject.create({
    sub_name: 'Artificial intelligance',
    sub_code: 'Ai',
    dept_name: 'cs',
    previous_require: 'java',

});

await subject.create({
    sub_name: 'Machine Learning',
    sub_code: 'Ml',
    dept_name: 'cs',
    previous_require: 'Artificial intelligance',

});
res.send('subject correctly added')
})

export default router;