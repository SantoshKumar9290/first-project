const express=require("express");
const router=express.Router();
const bookcontroller=require("../controller/db.book")

router.post("/add",bookcontroller.addbook)

module.exports=router;