const Book=require("../model/model.book")

module.exports.addbook=async(req,res)=>{
    try {
        let({BookName,Author,Price})=req.body;
        let book=new Book({BookName,Author,Price});
        let result=await book.save();
        res.send({status:true,data:"book is added"})
                
    } catch (error) {
        res.send({status:false,data:"book is not added"})
        console.log(error)
    }
}