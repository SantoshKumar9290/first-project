import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { Toast } from "bootstrap";
// import { toast } from "react-toastify";
// import {Helmet} from "react-helmet";

const StudentDetails = () => {

    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [RollNumber, setRollNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        let users=[];
      
       const regEx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
        axios.get("http://localhost:8081/STUDENT/get")
    .then(res => {
      users= res.data.data;
   
    if(users.filter(u => u.Studentmailid === Email).length>0) {
        console.log()
        alert("duplicate email id");
    } else if (!regEx.test(Email) || Email==="") {
        
        alert("Email is not valid");

    } else if (users.filter(u => u.Email === Email).length > 0) {
        alert("Email alraedy registered");
    } else{
         axios.post("http://localhost:8081/student/add", ({
            Name, Age, Email, PhoneNumber, RollNumber
        })).then(response => {
            alert("Student details is added")
            console.log(response)
        });
    }

    })
       


    }


    return (
        <div className="login">
            <Card className="card" style={{ textAlign: "center" }} >
                <h4 style={{ marginTop: "20px", fontSize: "26px" }} className="h4">
                    Student Details
                </h4>
            </Card>
            <Container style={{ textAlign: "center", marginTop: "20px" }}>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>Name</label>
                            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a name" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label className>Age</label>
                            <input type="text" value={Age} onChange={(e) => setAge(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a age" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>Email</label>
                            <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a studentmailid" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>PhoneNumber</label>
                            <input type="text" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a phonenumber" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>RollNumber</label>
                            <input type="text" value={RollNumber} onChange={(e) => setRollNumber(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a rollnumber" required />
                        </Col>
                    </Row>
                    <br />
                    <Row className="button" >
                        <Col lg={12} sm={12} md={12}>
                            <a href='/' style={{ margin: "15px" }}>Login</a>
                            <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
                            <a href='/address' style={{ margin: "15px" }}>Next</a>
                            {/* <Link to="/address" className="button">Submit</Link> */}
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
};
 
export default StudentDetails;

