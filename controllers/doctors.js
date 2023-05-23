import doctorModel from "../database/doctorModel.js"
import subjectModel from '../database/subjectsModel.js'
import doc_subjectModel from "../database/doc_subjectModel.js";

export const getAllDoctors = async (request, response) => {

    const doctors = await doctorModel.find().lean();

    response.render('doctorAdmin/allDoctors', { doctors })
}
export const create_doctor = (request, response) => {
    response.render('doctorAdmin/addDoctor')
}

export const save_doctor = async (request, response) => {
    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;

    if (Doc_code == "" || Doc_name == "" || Doc_email == "" || Doc_password == "") {

        alert("Please Enter The Whole Data ");
    } else {
        await doctorModel.create({
            Doc_code,
            Doc_name,
            Doc_email,
            Doc_password
        })
        response.redirect('/doctorAdmin/getAllDoctors')
    }
}

export const editDoctor = async (request, response) => {
    const { _id } = request.params;

    const editFormDoctor = await doctorModel.findById(_id).lean();
    console.log(editDoctor)

    response.render('doctorAdmin/editDoctor', { doctor: editFormDoctor })
}

export const updateDoctor = async (request, response) => {

    const { Doc_code, Doc_name, Doc_email, Doc_password } = request.body;
    console.log(Doc_code)

    if (Doc_code == "" || Doc_name == "" || Doc_email == "" || Doc_password == "") {
        alert("Please Enter The Whole Data ");
    } else {
        const { _id } = request.params;
        await doctorModel.findByIdAndUpdate(_id, { $set: { Doc_code, Doc_name, Doc_email, Doc_password } })
        response.redirect('/doctorAdmin/getAllDoctors')
    }
}

export const deleteDoctor = async (request, response) => {
    const { _id } = request.params;
    await doctorModel.findByIdAndDelete(_id).lean();
    return response.redirect("/doctorAdmin/getAllDoctors");
}

export const assignSubject = async (request, response) => {
    const { _id } = request.params;
    console.log(_id)
    const subjects = await subjectModel.find({}, { sub_name: 1 }).lean();
    response.render('doctorAdmin/assignForm', { _id, subjects })
}

export const saveAssignment = async (request, response) => {
    console.log(request.body);

    const { Doctor, Subject } = request.body;

    await doc_subjectModel.create({
        Doctor: Doctor,
        Subject: Subject
    })

    response.redirect('/doctorAdmin/getAllDoctors')
}

export const getAssigned = async (request, response) => {
    const { _id } = request.params;
    const doctordetails = await doctorModel.findById(_id).lean();
    const doctorSubjects = await doc_subjectModel.find({ Doctor: _id }).populate('Subject').lean();
    console.log(doctordetails)
    console.log(doctorSubjects)
    response.render('doctorAdmin/allAssignedSubjects', { doctordetails, doctorSubjects })
}

export const deleteAssigned = async (request, response) => {
    const { _id } = request.params;
    await doc_subjectModel.findByIdAndDelete(_id).lean();
    return response.redirect("/doctorAdmin/getAllDoctors");
}
