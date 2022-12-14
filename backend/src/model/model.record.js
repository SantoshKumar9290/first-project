const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const RecordSchema = new Schema({
    Name:{
        type:String,
        required:true,
    },
    RecordNo:{
        type:Number,
        required:true,
    },
    SubjectName:{
        type:String,
        required:true,
    },
    Score:{
        type:Number,
        required:true,
    },

});
var Record=mongoose.model('Record',RecordSchema);
module.exports=Record;