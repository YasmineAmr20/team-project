import { Schema,model } from 'mongoose';
const subject= new Schema({
    sub_name: {
        type: String,
        required :true,
    },
    sub_code: {
        type: String,
        required :false,

    },
    Dept_name: {
        type: Schema.Types.ObjectId,
        required :true,
        ref: 'department'

    },
    previous_require: {
        type: String,
        required :false,

    }

},{timestamps: true});

export default model('subject',subject);