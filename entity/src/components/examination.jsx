import React,{useState} from 'react';
import { Container,Row,Col,Card,Button,Form } from 'react-bootstrap';
// import {Helmet} from "react-helmet";
import axios from "axios";

const Examination = () => {
    const[CandidateName,setCandidateName]=useState("");
    const[SubjectName,setSubjectName]=useState("");
    const[RollNumber,setRollNumber]=useState("");
    const[DateofExamination,setDateofExamination]=useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        // let users=[];
        await axios.post("http://localhost:8081/exam/add", ({
            CandidateName,SubjectName,RollNumber,DateofExamination
        })).then(response => {
            alert("Exam is added")
            console.log(response)
        });

    }

  return (
    <div className="login">
        <Card className="card" style={{ textAlign: "center"  }} >
                <h4 style={{ marginTop: "20px", fontSize: "26px" }} className="h4">
                    Examination Details
                </h4>
            </Card>
        <Container style={{textAlign:"center",marginTop:"20px"}}>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>CandidateName</label>
                    <input type="text" value={CandidateName} onChange={(e) => setCandidateName(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a name" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label className="details">SubjectName</label>
                    <input type="text" value={SubjectName} onChange={(e) => setSubjectName(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a subject" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>RollNumber</label>
                    <input type="text" value={RollNumber} onChange={(e) => setRollNumber(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a number" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>DateofExamination</label>
                    <input type="text" value={DateofExamination} onChange={(e) => setDateofExamination(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a date" required/>
                </Col>
            </Row>
            <br/>
            <Row className="button" >
                    <Col lg={12} sm={12} md={12}>
                    <a href='/address' style={{ margin: "15px" }}>Prev</a>
                        <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
                        <a href='/record' style={{ margin: "15px" }}>Next</a>
                    </Col>
                </Row>
                
                </Form>
        </Container>
    </div>
  )
}

export default Examination