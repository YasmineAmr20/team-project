import subject from "../database/subjectsModel.js";
import department from "../database/departmentModel.js";
import std_subject from "../database/std_subject.js";
import alert from "alert"




//show subjects
export const index = async (req, res) => {
  const subj = await subject.find({}, { sub_name: 1 }).lean();
  res.render("subjects/index", { subj });
};



export const create = async (req, res) => {
  const departments = await department.find().lean();
  console.log(departments);
  res.render("subjects/insertNewSubject", { departments });
};


// store the data in database
export const store = async (req, res) => {
  console.log(req.body);            

  const { sub_name, sub_code, previous_require, dept_name } = req.body;
  await subject.create({
    sub_name,
    sub_code,
    previous_require,
    Dept_name: dept_name,
  });
  res.redirect("/subjects");
};



export const show = async (req, res) => {
  const _id = req.params;    //عشان هو متغير

  console.log(_id)
  // const singleSubject = await subject
  //   .findById(_id)
  //   .populate("Dept_name")
  //   .lean();
  // console.log(singleSubject);
  // res.render("subjects/show_subj", { subject: singleSubject });
};






export const edit = async (req, res) => {
  const { _id } = req.params;

  const editFormSubject = await subject.findById(_id).lean();
  const departments = await department.find().lean();
  console.log(departments);
  res.render("subjects/edit", { departments, subject: editFormSubject });
};



export const update = async (req, res) => {
  console.log(req.body);

  const { sub_name, sub_code, previous_require, dept_name } = req.body;
  const{_id} =req.params;
   await subject.findByIdAndUpdate (_id , {$set: {sub_name ,sub_code, previous_require, dept_name } })
  res.redirect("/subjects");
};




export const deleteOne = async(req, res) =>{
  const {_id} =req.params;
  const Subject=await std_subject.findOne({Subject:_id})
  if( Subject == undefined   ){

   
    await subject.findByIdAndDelete(_id);
    return res.redirect('/subjects');

  }else{
    alert(" the course is registered by student ");
  }

 

};