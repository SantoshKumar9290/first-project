const Record=require("../model/model.record")

module.exports.addrecord=async(req,res)=>{
    try {
        let {Name,RecordNo,SubjectName,Score}=req.body;
        let record=Record({Name,RecordNo,SubjectName,Score})
        let result=await record.save();
        res.send({status:true,data:"record is added"})
        
    } catch (error) {
        res.send({staus:false,data:"record is not added"})
        console.log(error)
    }
}