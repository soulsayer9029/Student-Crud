const express=require('express');
const router=express.Router();
const {generateToken}=require('../controllers/generateToken.js');
// const verifyToken = require('../middleware/verifyToken.js');

router.post('/getToken',generateToken)

module.exports=router;