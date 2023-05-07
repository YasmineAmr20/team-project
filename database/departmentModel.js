import { Schema ,model} from "mongoose";
const deptSchema = new Schema({
   Dept_code:
    {
        type: Number,
        required:true  //important to put name to make insert -->name =null xx false
    },
    Dept_name:
    {
        type: String,
        required:true // city ==null normal true
    }
},{timestamps:true});
const deptModel=model('Department',deptSchema);//its name in database
export default deptModel;