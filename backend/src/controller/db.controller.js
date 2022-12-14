const StudentDetails = require("../model/model.student");

module.exports.getdetails = async (req, res) => {
    try {
        let details = await StudentDetails.find()
        // details.forEach(function (element) {
        //     element.editable = "false";
        //   });
        res.send({ status: true, data: details })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}

module.exports.adddetails = async (req, res) => {
    try {
        let { Name, Age, Email, PhoneNumber, RollNumber } = req.body;
        let details = new StudentDetails({ Name, Age, Email, PhoneNumber, RollNumber });
        let result = await details.save();
        res.send({ status: true, data: "record is added" })
    }
    catch (error) {
        res.send({ status: false, data: "not added" })
        console.log(error)
    }
}

module.exports.studentLogin = async (req, res) => {
    try {
        let { Email } = req.body;
        let details = await StudentDetails.findOne({ Email: Email });
        if (details != null) {
            res.send({ status: true, data: details })
        } else {
            res.send({ status: false, data: details })
        }
    }
    catch (error) {
        console.log(error)
        res.send({ status: false, data: error })
    }
}

module.exports.getdetail = async (req, res) => {
    try {
        let { id } = req.params;
        let details = await StudentDetails.findById({ _id: id });
        res.send({ status: true, data: details })
    }
    catch (error) {
        res.send({ status: false, data: error })
    }
}
                                                     
module.exports.updatedetails = async (req, res) => {
    try {
        let { id } = req.params;
        // let detail=await StudentDetails.findById({_id:id});
        // if(!detail){
        //     res.send({status:false,data:"details doesnt exist"})
        // }
        let { Name, Age, Email, PhoneNumber, RollNumber } = req.body;
        // let details=new StudentDetails({Name,Age,Studentmailid,PhoneNumber,RollNumber});
        let data = { Name, Age, Email, PhoneNumber, RollNumber };
        let details = await StudentDetails.findByIdAndUpdate({ _id: id }, data);
        let result = await details.save();
        res.send({ status: true, data: "record is updated" })
    }
    catch (error) {
        res.send({ status: false, data: "not updated" })
        console.log(error)
    }
}



// module.exports.deletedetails=async(req,res) => {
//     try{
//     let{id}=req.params;
//     let details=await StudentDetails.deleteOne({_id:id})    
//     res.send({status:true,data:"record is deleted"})
//     }
//     catch(error){
//         res.send({status:false,data:error})
//     }

// }


module.exports.deletedetails = async (req, res) => {
    try {
        let { id } = req.params;
        await StudentDetails.findByIdAndDelete(id).then((data) => {
            if (!data) {
                res.send({ status: true, data: "record is not found" })
            } else {
                res.send({ status: true, data: "record is deleted" })
            }
        })
    } catch (error) {
        res.send({ status: false, data: error })
    }
}




//Pushpa Code
// const Employee = require("../model/employee.model");
// module.exports.getemployee = async (req, res) => {
// try {
// let employees = await Employee.find();
// res.send({ status: true, data: employees })
// } catch (error) {
// res.send({ status: false, data: error })
// }
// }

// // module.exports.addEmployee = async (req, res) => {
// // try {
// // let { name,email,number,nic,address } = req.body;
// // let employee = new Employee({ name,email,number,nic,address });
// // let result = await employee.save();
// // res.send({ status: true, data: 'record is added' })
// // }
// // catch (error) {
// // res.send({ status: false, data: error })
// // }
// // }

// module.exports.getEmployees = async (req, res) => {
// try {
// let { id } = req.params;
// let employee = await Employee.findById({ _id: id })
// res.send({ status: true, data: employee })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }

// module.exports.deleteEmployee = async (req, res) => {
// try {
// let { id } = req.params;
// let employee = await Employee.deleteOne({ _id: id })
// res.send({ status: true, data: 'Employee is deleted' })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }

// module.exports.updateEmployee = async (req, res) => {
// try {
// let { id } = req.params;
// let employee = await Employee.findById({ _id: id })
// if (!employee) {
// res.send({ status: false, data: 'Employee does not exist' })
// }
// let { name,email,number,nic,address} = req.body;
// let newEmployee = { name,email,number,nic,address};
// let result = await Employee.findByIdAndUpdate({ _id: id }, newEmployee);
// res.send({ status: true, data: 'Employee is updated' })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }

// module.exports.addemployee = async (req, res) => {
// // let { name,surname,email,phone ,salary} = req.body;
// let {name,email,number,nic,address} = req.body;
// Employee.findOne({ email: email}, (err, employee) => {
// if (employee) {
// res.send({ message: "Employee already registerd" })
// } else {
// // const employee = new Employee({ name,surname,email,phone ,salary })
// const employee = new Employee({ name,email,number,nic,address })
// employee.save(err => {
// if (err) {
// res.send(err)
// } else {
// res.send({ message: "Employee Added Successfully" })
// }
// })
// }
// })
// }

// module.exports.addStudent = async (req, res) => {
//     console.log(req.body)
//     const data = new StudentDetails(req.body)
//     const result = await data.save()
//     if (!result) {
//         res.json({
//             status: "FAILED",
//             message: "employee not register successfully...."
//         })
//     }
//     else {
//         res.json({
//             status: "SUCCESS",
//             message: "employee register successfully....",
//             data: result
//         })
//     }
// }

// //get records

// module.exports.getStudents = async (req, res) => {
//     try {
//         const result = await StudentDetails.find()
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Not found record"
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Records found",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

// //get single record

// module.exports.getStudents = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await StudentDetails.findById(_id);
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Record not found on this ID"
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Records found",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// }

// // update records

// module.exports.updateStudent = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await StudentDetails.findByIdAndUpdate(_id, req.body, { new: true });
//         console.log(result)
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Records not Update....",
//                 data: result
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Record is Updated successfully...",
//                 data: result
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// }

// // Delete Records

// module.exports.deleteStudent = async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const result = await StudentDetails.findByIdAndDelete(_id);
//         if (!result) {
//             res.json({
//                 status: "FAILED",
//                 message: "Record not Delete..."
//             })
//         }
//         else {
//             res.json({
//                 status: "SUCCESS",
//                 message: "Record is Delete successfully..."
//             })
//         }
//     }
//     catch (e) {
//         res.send(e)
//     }
// }
