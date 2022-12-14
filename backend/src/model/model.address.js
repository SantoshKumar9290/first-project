const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AddressSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    State: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Street: {
        type: String,
        required: true,
    },
    PinCode: {
        type: Number,
        required: true,
    },
});
var Address = mongoose.model('Address', AddressSchema);
module.exports = Address;