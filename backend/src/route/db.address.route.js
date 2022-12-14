const express = require("express");
const router = express.Router();
const addressController=require("../controller/db.address")

router.post("/add",addressController.addaddress)


module.exports=router;