//  import user from "../database/userModel.js"
 import doctorSchema from "../database/doctorModel.js"
 import doc_subjectSchema from "../database/doc_subjectModel.js"
 import studentSchema from "../database/studentModel.js"
 import doctorModel from "../database/doctorModel.js"
 import bcrypt from "bcrypt"
 import subject from "../database/subjectsModel.js"
 import notifier from "node-notifier"
import jwt from "jsonwebtoken"
import alert from "alert"
//------------------------------------------------
//  export const register_form = (req,res)=>{
//     res.render("Authentication/register")
//   } 

// export const register  =async (req,res)=>{
//     const {name,email,password}=req.body;
//     console.log(name,email,password);
//     const salt=bcrypt.genSaltSync(10);
//     const encrypted_password= bcrypt.hashSync(password,salt);
//     await user.create(
//         {
//             name,
//             email,
//             password:encrypted_password,
//             // sub_name :Sub_name
//           });
//     // console.log(encrypted_password);
//     res.redirect("/register");
//     // res.render("/register",{layout:false})
//     console.log("registered done")
//     // res.send("registered done")
  
//   } 




//login --------------------------------------------
  export const login_form = (req,res)=>{
    res.render("Authentication/login",{layout:false})
  } 
//login
export const login =async (req,res)=>{
    const {email,password,_id}=req.body;
    // تشفير الباسورد
    // const log_user;
    // const loggedUser=await doctorSchema.findOne({email}) //search in data ,get user with email
    //  console.log(loggedUser)
    // const isCorrectPassword=bcrypt.compareSync(password,loggedUser.password) //test correct password or not
   //check correct pas
    // if(!isCorrectPassword){
    //   console.log("wrong password");
    //   return   res.send("wrong password , try again");
    // }
    //cookie data
    // const data={
    //   _id:loggedUser._id,
    //   email:loggedUser.email
    // }
    // const jwt_token = jwt.sign(data,"secret");
    // res.cookie(jwt_token);
    // //  console.log(jwt_token);
    // res.cookie('token',data);
   

if(email)  //check email in data
 {
   console.log(email)
    if(!req.body.user){
    //  alert("not checked radio,please choose radio button");
    //  res.send("please choose radio button ")
    }
    else if(req.body.user=='admin')
    {
      if( email=='admin@gmail.com' && password=="admin"){
         res.render("homepage")
        alert('Hello , admin')
      }else{
        alert("you are not admin ,please try again ")
      }
      
    }
    else if(req.body.user=='doctor')
    {
      const loggedDoctor=await doctorSchema.findOne({Doc_email: email}) //search in data ,get user with email
      // const isCorrectPassword=(password,loggedDoctor.password) //test correct password or not
      console.log(loggedDoctor);
      console.log(loggedDoctor._id);
      if(loggedDoctor != undefined   ){
          console.log(_id)
        res.redirect(`/doctor?id=${loggedDoctor._id}`)
        
          //  res.render("subjects")
         alert('Hello ,doctor '+email)
         
        }else{
          alert("wrong password,try again ");
        }
        
      //    }else{
      //   alert("you are not doctor,please try again")
      // }
     
    }
    else if(req.body.user=='student')
      {

        const loggedStudent=await studentSchema.findOne({std_Email:email}) //search in data ,get user with email
        // const isCorrectPassword=(password,loggedStudent.password) //test correct password or not
    // console.log(loggedStudent)
        if(loggedStudent != undefined ){
          res.redirect(`/student_user?id=${loggedStudent._id}`)
       
          alert('Hello ,student '+ email)
        }else{
          alert("wrong password,try again ");
        }
          
        }else{
          alert("you are not student,please try again")
        }
      
  }

 

}
 

//الايميلات عشان اعمل login
//   student@gmail.com --->student
// doctor@gmail.com --->doctor 
// admin@gmail.com --->admin   login
