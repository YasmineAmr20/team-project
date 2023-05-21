
import studentModel from "../Database/studentModel.js";

export const index = async (request, response) => {

    const  student = await studentModel.find().lean();


    response.render('studentlayout/student', { student })
}
    ;
export const add = (request, response) => {
    response.render("studentlayout/addStudent")
};

export const store = async (request, response) => {

    const { std_name, std_Academic, std_password } = request.body;
    if(std_Academic==""||std_name==""||std_password==""){
        alert("Please Enter The Whole Data");
        } else{
            

    await studentModel.create({
        
        std_name,
        std_Academic,
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

    const {  std_name, std_Academic, std_password} = request.body;
    console.log(std_name)

    const { _id } = request.params;
if(std_Academic==""||std_name==""||std_password==""){
alert("Please Enter The Whole Data");
} else{
    await studentModel.findByIdAndUpdate(_id, { $set: { std_name, std_Academic, std_password} })
    response.redirect('/student')
}
}


export const deleteOne = async (request, response) => {
    const _id = request.params;
    await studentModel.findByIdAndDelete(_id).lean();
    return response.redirect("/student");
}