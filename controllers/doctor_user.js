import doctorModel from "../database/doctorModel.js"
import subjectModel from '../database/subjectsModel.js'
import doc_subjectModel from "../database/doc_subjectModel.js";

export const doctor_user = async (req, res) => {
    const {id} =req.query;

    const doctor_subj = await doc_subjectModel
    .find({Doctor: id})
    .populate("Subject")
    .lean();
    console.log(req.query);
    
    console.log(doctor_subj)

    res.render("doctor/doc_user", { doctor_subj });


  };