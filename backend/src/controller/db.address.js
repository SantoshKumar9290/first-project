const Address = require("../model/model.address")

module.exports.addaddress = async (req, res) => {
    try {
        const { Name, State, City, Street, PinCode } = req.body;
        const newAddress =new Address({ Name, State, City, Street, PinCode })
        const result = await newAddress.save()
        res.send({ status: true, data: "Address Added!!" })
    } catch (error) {
        res.send({ status: false, data: "Something went wrong" })
        console.log(error);
    }
}




