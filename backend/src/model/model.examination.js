const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const ExaminationSchema = new Schema({
    CandidateName:{
        type:String,
        required:true,
    },
    SubjectName:{
        type:String,
        required:true,
    },
    RollNumber:{
        type:Number,
        // required:true,
    },
    DateofExamination:{
        type:String,
        // required:true,
    },
});
var Examination=mongoose.model('Examination',ExaminationSchema);
module.exports=Examination;