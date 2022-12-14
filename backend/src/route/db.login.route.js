const express=require("express");
const router=express.Router();
const logincontroller=require("../controller/db.login");


router.get("/",logincontroller.addlogin)

module.exports=router;