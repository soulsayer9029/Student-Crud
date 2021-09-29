const mongoose = require('mongoose')

const StudentSchema=new mongoose.Schema({
   
    name:{
        type: String,
        required:[true, 'Please enter name'],

    },
    division:{
        type:String,
        required: [true,'please enter division'],
        enum:['A','B','C']
    },
    year:{
        type:String,
        required: [true,'please enter year'],
        enum:['FE','SE','TE','BE']
    },
    
})


module.exports = mongoose.model('Student', StudentSchema);