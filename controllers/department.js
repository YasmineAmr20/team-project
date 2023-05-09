// import department from "../database/department.js";
import deptModel from "../database/departmentModel.js";

export const index = async(req,res)=>{
    const departments= await deptModel.find({},{Dept_name:1 ,Dept_code:1}).lean();
     res.render('departments/index',{departments });
    };
    



    export const create= async(req,res)=>{
      const departments= await deptModel.find().lean();
       res.render('departments/create',{departments});
      };



        export const store=async (req,res)=>{

       const{name ,code}=req.body;  
            await deptModel.create({
              Dept_name : name,
              Dept_code : code, 
         
             });
          res.redirect('/departments');
        };


        


        
       

        
   

      