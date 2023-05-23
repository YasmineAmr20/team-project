import { Schema, model } from "mongoose";

const doc_subjectSchema = new Schema({
    
    student: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'student'
    },

    Subject: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'subject'
    }
});

export default model('student_subject', doc_subjectSchema);