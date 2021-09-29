const Student=require('../models/Student')

const createStudent=async(req,res)=>{
    const {name,division,year}=req.body
    if(name.trim()===""){
        return res.status(400).json({
            success:false,
            message:"please enter name"
        })
    }
    const student=new Student(
        {
            name,division,year
        }
    )
    try{
        await student.save()
        return res.status(200).json({
            success:true,
            data:student
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
}
const getStudents=async(req,res)=>{
    const UrlParams=req.query
    // console.log(UrlParams)
    
    try{
        const students=await Student.find(UrlParams)
        return res.status(200).json({
            success:true,
            data:students
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    
}
const getStudentById=async(req,res)=>{
    const id=req.params.id
    
    try{
        const student=await Student.findById(id)
        if(student){
            return res.status(200).json({
                success:true,
                data:student
            })
        }
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    
}
const updateStudent=async(req,res)=>{
    
    try{
        const student = await Student.findByIdAndUpdate(req.user.id, req.body, {
            new: true,
            runValidators: true
          });
          if(student){
            return res.status(200).json({
                success:true,
                data:student
            })
          }else{
            return res.status(400).json({
                success:false,
                message:"Invalid Update entered"
            })
          }
          
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    
}
const deleteStudent=async(req,res)=>{
    try{
        student=await Student.findByIdAndDelete(req.user.id);
        
            // if(student){
            //     return res.status(200).json({
            //         success:true,
            //         data:"Student Deleted Successfully"
            //     })
            // }
            // else{
            //     return res.status(400).json({
            //         success:false,
            //         message:"student not found"
            //     })
            // }
            return res.status(200).json({
                        success:true,
                        data:"Student Deleted Successfully"
                    })
                      
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }
    
    
}
const getClassmates=async(req,res)=>{
    const id=req.user.id   
    const student=await Student.findById(id)
    //never happen
    if(!student){
        return res.status(400).json({
            success:false,
            message:"Some error occured please try again"
        })
    }
    console.log(student.division)
    try{
        const students=await Student.find({year:student.year,division:student.division})
        return res.status(200).json({
            success:true,
            data:students
        })
    }catch(e){
        return res.status(400).json({
            success:false,
            message:e.message
        })
    }

    }
    



module.exports={createStudent,getStudents,getStudentById,updateStudent,deleteStudent,getClassmates}