
import studentModel from "../Database/studentModel.js";
import alert from "alert"
import std_subject from "../database/std_subject.js";
import subjectModel from '../database/subjectsModel.js'
export const index = async (request, response) => {

    const  student = await studentModel.find().lean();


    response.render('studentlayout/student', { student })
}
    ;
export const add = (request, response) => {
    response.render("studentlayout/addStudent")
};

export const store = async (request, response) => {

    const { std_name, std_Academic, std_password,std_Email } = request.body;
    if(std_Academic==""||std_name==""||std_password==""||std_Email==""){
        alert("Please Enter The Whole Data");
        } else{
            

    await studentModel.create({
        
        std_name,
        std_Academic,
        std_Email,
        std_password
    });

    return response.redirect("/student");}
};


export const edit = async (request, response) => {
    const _id = request.params;
    const student = await studentModel.find().lean();
    const editstudent = await studentModel.findById(_id).lean();
    response.render('studentlayout/edit', {  student, editStd: editstudent });
};

export const update = async (request, response) => {

    const {  std_name, std_Academic, std_password,std_Email} = request.body;
    console.log(std_name)

    const { _id } = request.params;
if(std_Academic==""||std_name==""||std_password==""||std_Email==""){
alert("Please Enter The Whole Data");
} else{
    await studentModel.findByIdAndUpdate(_id, { $set: { std_name, std_Academic, std_password,std_Email} })
    response.redirect('/student')
}
};


export const deleteOne = async (request, response) => {
    const _id = request.params;
    await studentModel.findByIdAndDelete(_id).lean();
    return response.redirect("/student");
};

export const assignPass_subject = async (request, response) => {
    const { _id } = request.params;
    console.log(_id)
    
    const subjects = await subjectModel.find({}, {sub_name: 1}).lean();
    response.render('studentlayout/Passe_sub', { _id, subjects })
};

export const saveAssignment = async (request, response) => {
    console.log(request.body);

    const { student, Subject } = request.body;

    await std_subject.create({
       student:student,
       Subject:Subject
    })
    
    
    response.redirect("/student")
};



export const get_PassedSubject = async (request, response) => {
    const { _id } = request.params;
    const studentdetails = await studentModel.findById(_id).lean();
    const studentSubjects = await std_subject.find({student: _id }).populate('Subject').lean();
    console.log( studentdetails)
    console.log(studentSubjects)
    response.render('studentlayout/allPassed', { studentdetails, studentSubjects })
};


export const deleteAssigned = async (request, response) => {
    const { _id } = request.params;
    await std_subject.findByIdAndDelete(_id).lean();
    return response.redirect("/student");
}
