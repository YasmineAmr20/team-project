import { Schema,model } from 'mongoose';
const user= new Schema({
    name: {
        type: String,
        required :true,
    },
    email: {
        type: String,
        required :true,
        

    },
    password: {
        type: String,
        required :true,

    },
    // sub_name: {
    //     type: Schema.Types.String,
    //     required :true,
    //     ref: 'subject'

    // }


},{timestamps: true});

export default model('user',user);