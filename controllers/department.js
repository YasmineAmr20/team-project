// import department from "../database/department.js";
import deptModel from "../database/departmentModel.js";

export const index = async (req, res) => {
  const departments = await deptModel
    .find({}, { Dept_name: 1, Dept_code: 1 })
    .lean();
  res.render("departments/index", { departments });
};

export const create = async (req, res) => {
  const departments = await deptModel.find().lean();
  res.render("departments/create", { departments });
};

export const store = async (req, res) => {
  const { name, code } = req.body;
  await deptModel.create({
    Dept_name: name,
    Dept_code: code,
  });
  res.redirect("/departments");
};

export const show = async (req, res) => {
  const _id = req.params._id;

  const singleDepartment = await deptModel.findById(_id).lean();
  res.render("departments/show", { deptModel: singleDepartment });
};

export const edit = async (req, res) => {
  const _id = req.params._id;

  const editObject = await deptModel.findById(_id).lean();
  const departments = await deptModel.find().lean();

  res.render("departments/edit", { departments, deptModel: editObject });
};

export const update = async (req, res) => {
  const { Dept_name, Dept_code } = req.body;
  const { _id } = req.params;
  await deptModel.findByIdAndUpdate(_id, {
    $set: { Dept_name, Dept_code },
  });
  res.redirect("/departments");
};

export const deleteOne = async (req, res) => {
  const { _id } = req.params;
  await deptModel.findByIdAndDelete(_id);
  return res.redirect("/departments");
};
