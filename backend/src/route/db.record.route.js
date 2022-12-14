const express = require("express");
const router = express.Router();
const recordController=require("../controller/db.record");


router.post("/add",recordController.addrecord)


module.exports=router; 