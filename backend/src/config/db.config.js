const mongoose=require("mongoose")
module.exports.connect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/STUDENT",{
            useNewUrlParser:true,useUnifiedTopology:true
        });
        console.log('Mongodb connection established')
    }
    catch(error){
        console.log('Connection error',error);
    }
}