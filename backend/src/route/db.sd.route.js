const express = require("express");
const router = express.Router();
const routeController=require("../controller/db.controller")

router.post("/add",routeController.adddetails);
router.post("/login",routeController.studentLogin);
router.get("/get",routeController.getdetails);
router.get("/get/:id",routeController.getdetail);
router.put("/:id",routeController.updatedetails);
router.delete("/:id",routeController.deletedetails)


// router.post("/add",routeController.addStudent);
// router.get("/get",routeController.getStudents);
// router.get("/get/:id",routeController.getStudents);
// router.put("/:id",routeController.updateStudent);
// router.delete("/:id",routeController.deleteStudent)


module.exports=router;