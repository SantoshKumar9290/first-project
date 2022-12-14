const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const StudentSchema = new Schema({
    Name:{
        type:String,
        required:true,
    },
    Age:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true,
    },
    RollNumber:{
        type:Number,
        required:true,
    },  
    //  editable:{
    //     type:Boolean,
    //     required:false,
    // },
});
var Student=mongoose.model('Student',StudentSchema);
module.exports=Student;