import express from "express";
import { engine } from 'express-handlebars';
import mongoose from "mongoose";
import login_router from "./routes/loginRouter.js";
import dept_router from "./routes/deptRouter.js"
import home_router from "./routes/homepageRouter.js";
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use(express.static('public'))
mongoose.connect('mongodb://127.0.0.1:27017/team_project');//connect to database

app.use("/login",login_router)

app.use("/dept",dept_router)
app.use("/home",home_router)

app.listen(200, () => {
    console.log('Server started on port 200');
  });
app.listen(300,() =>{
    console.log('Home page started on port 300');
});