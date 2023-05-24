

import subjectModel from '../database/subjectsModel.js'

import std_subject from '../database/std_subject.js';

export const student_user = async (req, res) => {
    const {id} =req.query;

    const student_subj = await std_subject
    .find({student: id})
    .populate("Subject")
    .lean();
    console.log(req.query);
    
    console.log(student_subj)

    res.render("student/stud_user", { student_subj });


  };