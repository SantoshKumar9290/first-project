const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const BookSchema = new Schema({
    BookName:{
        type:String,
        required:true,
    },
    Author:{
        type:String,
        required:true,
    },
    Price:{
        type:String,
        required:true,
    },
});
var Book=mongoose.model('Book',BookSchema);
module.exports=Book;