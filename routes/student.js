const express=require('express');
const router=express.Router();

const {verifyToken} = require('../middleware/verifyToken.js');
const {createStudent,getStudents,getStudentById,updateStudent,deleteStudent,getClassmates}=require('../controllers/student')

router.post('/createStudent',createStudent)

router.get('/getStudents',getStudents)

router.get('/getStudent/:id',getStudentById)

router.patch('/updateStudent',verifyToken,updateStudent)

router.delete('/deleteStudent',verifyToken,deleteStudent)

router.get("/getClassmates",verifyToken,getClassmates)



module.exports=router;