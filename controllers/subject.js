import subject from '../database/subjectsModel.js'
import department from '../database/departmentModel.js';
//show subjects
export const index = async (req,res)=>{

    const subj= await subject.find({},{sub_name: 1}).lean();
    res.render("subjects/index",{subj});

    
};

export const create =async(req,res)=>{
    const departments= await department.find().lean();
    console.log(departments)
    res.render('subjects/insertNewSubject',{departments});
};

export const store =async(req,res)=>{    // store the data in database
console.log(req.body);

const {sub_name,sub_code,previous_require,dept_name}=req.body;
await subject.create({
    sub_name,
    sub_code,
    previous_require,
    Dept_name: dept_name,

});

res.redirect("/subjects");
};

export const show = async (req,res)=>{
const _id =req.params._id;    //عشان هو متغير

// const singleSubject=await subject.findById(_id).populate('dept_name').lean();
const singleSubject=await subject.findById(_id).populate('Dept_name').lean();
console.log(singleSubject)
res.render('subjects/show_subj',{ subject: singleSubject});
}
