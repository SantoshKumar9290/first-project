const express = require("express");
const router = express.Router();
const examController=require("../controller/db.examination");


router.post("/add",examController.addexam)


module.exports=router; 