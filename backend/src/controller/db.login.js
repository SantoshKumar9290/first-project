const Login = require("../model/model.login");
// module.exports.getForm = async (req, res) => {
//     try {
//         let forms = await Form.find();
//         res.send({ status: true, data: forms })
//     } catch (error) {
//         res.send({ status: false, data: error })
//     }
// }
// module.exports.addEmail = async (req, res) => {
//     try {
//         let { Email } = req.body;
//         let form = new Form({ Email });
//         let result = await form.save();
//         res.send({ status: true, data: 'email is added' })
//     }
//     catch (error) {
//         res.send({ status: false, data: error })
//     }
// }
// module.exports.getForms = async (req, res) => {
// try {
// let { id } = req.params;
// let form = await Form.findById({ _id: id })
// res.send({ status: true, data: form })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }
// module.exports.deleteForm = async (req, res) => {
// try {
// let { id } = req.params;
// let form = await Form.deleteOne({ _id: id })
// res.send({ status: true, data: 'record is deleted' })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }
// module.exports.updateForm = async (req, res) => {
// try {
// let { id } = req.params;
// let form = await Form.findById({ _id: id })
// if (!form) {
// res.send({ status: false, data: 'form does not exist' })
// }
// let { FullName, MobileNumber, Email, CompanyName, Address, Password, ConfirmPassword } = req.body;
// let newForm = { FullName, MobileNumber, Email, CompanyName, Address, Password, ConfirmPassword };
// let result = await Form.findByIdAndUpdate({ _id: id }, newForm);
// res.send({ status: true, data: 'form is updated' })
// }
// catch (error) {
// res.send({ status: false, data: error })
// }
// }
module.exports.addlogin = async (req, res) => {
    let { Email } = req.body;
    try {
        var query = { Email: "santosh123@gmail.com" };

        let details = await Login.findOne(query);
        res.send({ status: true, data: details })

        // Login.findOne({ Email: Email }, (err, login) => {
        //     console.log(login)
        // })
    }
    catch (error) {
        console.log(error)
        res.send({ status: false, data: error })
    }
    // Login.findOne({ Email: Email }, (err, login) => {
    //     if (login) {
    //         res.send({ message: "Email already registerd" })
    //     } else {
    //         const login = new Login({ Email })
    //         form.save(err => {
    //             if (err) {
    //                 res.send(err)
    //             } else {
    //                 res.send({ message: "Successfully Registered, Please add student details now." })
    //             }
    //         })
    //     }
    // })
}
// module.exports.login = async (req, res) => {
//     const { Email } = req.body
//     Form.findOne({ Email: Email }, (err, form) => {
//         if (form) {
//             if (Email === form.Email) {
//                 res.send({ message: "Login Successfull", user: form })
//             } else {
//                 res.send({ message: "Email doen't find" })
//             }
//         } else {
//             res.send({ message: "Email is not registered" })
//         }
//     })
// }