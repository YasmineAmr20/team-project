import { Router, request, response } from "express";
const router =new Router();
import { add, deleteOne, edit, index,   store, update } from "../controllers/Student.js";

router.get("/",index)

router.get("/add",add)
    
router.post("/",store)

router.get('/:_id/edit',edit)
router.put('/:_id',update)
router.delete('/:_id',deleteOne)
export default router;