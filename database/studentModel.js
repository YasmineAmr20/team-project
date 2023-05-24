import { Schema, model } from "mongoose";
const studentSchema = new Schema({
    
   std_name: {
        type: String,
        required: true,
    },

    std_Academic: {
        type: Number,
        required: true,
    },

    std_Email:{
        type: String,
        required: true,

    },
    std_password: {
        type: String,
        required: true,
    }
},{timestamps:true});

export default model('Student', studentSchema);