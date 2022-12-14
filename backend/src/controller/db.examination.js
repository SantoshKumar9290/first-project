const Examination=require("../model/model.examination")

module.exports.addexam=async(req,res)=>{
    try {
        let {CandidateName,SubjectName,RollNumber,DateofExamination}=req.body;
        let exam =new Examination({CandidateName,SubjectName,RollNumber,DateofExamination});
        let result=await exam.save();
        res.send({status:true,data:"exam is added"}) 
    } catch (error) {
        res.send({status:false,data:"exam error"})
        console.log(error)

        
    }
}