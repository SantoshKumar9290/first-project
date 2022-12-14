const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const LoginSchema = new Schema({
   Email:{
    type:String,
    required:true,
   }
});
var Login=mongoose.model('Login',LoginSchema);
module.exports=Login;