import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import login_router from "./routes/loginRouter.js";
import home_router from "./routes/homepageRouter.js";
import subject_Router from "./routes/subjectRouter.js";
import departmentsRouter from "./routes/departments.js";
import doctorAdminRoutes from "./routes/doctorAdminRoutes.js"
import studentRouter from "./routes/Student.js";
import methodOverride from "method-override";
import doc_router from "./routes/doc_user.js"
import student_user from "./routes/stud_router.js"

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://127.0.0.1:27017/team_project"); //connect to database

app.use("/login", login_router);
// app.use("/dept",dept_router);
app.use("/home", home_router);
app.use("/student",studentRouter);
//=========================================================================

app.use('/doctorAdmin', doctorAdminRoutes)

//=========================================================================

app.use("/departments", departmentsRouter);
app.use("/subjects", subject_Router);

//============================================================================

app.use("/absence",(req,res)=>{
  res.render('absence/absence')
} );

//==========================================================================
app.use("/doctor", doc_router);
app.use("/student_user", student_user);

app.listen(200, () => {
  console.log("Server started on port 200");
});
