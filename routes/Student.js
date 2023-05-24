import { Router, request, response } from "express";
const router =new Router();
import { add, deleteOne, edit, index,   store, update ,assignPass_subject,get_PassedSubject,saveAssignment,deleteAssigned} from "../controllers/Student.js";

router.get("/",index)

router.get("/add",add)
    
router.post("/",store)

router.get('/:_id/edit',edit)
router.put('/:_id',update)
router.delete('/:_id',deleteOne)


router.get('/:_id/getAssigned', get_PassedSubject)
router.get('/:_id/assignSubject', assignPass_subject)

router.post('/:_id/assignSubject', saveAssignment);



router.delete('/:_id/deleteAssigned', deleteAssigned)

export default router;