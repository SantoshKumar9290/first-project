import React,{useState} from "react";
import {Container,Row,Col,Card,Button,Form} from "react-bootstrap";
import axios from "axios";

const Record =()=>{
    const[RecordNo,setRecordNo]=useState("");
    const[Score,setScore]=useState("");
    const[SubjectName,setSubjectName]=useState("");
    const[Name,setName]=useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // let users=[];
        await axios.post("http://localhost:8081/record/add", ({
            Name,RecordNo,Score,SubjectName
        })).then(response => {
            alert("Record is added")
            console.log(response)
        });

    }




    return(
        <div className="login">
        <Card className="card" style={{ textAlign: "center"  }} >
                <h4 style={{ marginTop: "20px", fontSize: "26px" }} className="h4">
                    Record
                </h4>
            </Card>
        <Container style={{textAlign:"center" ,marginTop:"20px"}}>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>RecordNo</label>
                    <input type="text" value={RecordNo} onChange={(e) => setRecordNo(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a number" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>Score</label>
                    <input type="text"  value={Score} onChange={(e) => setScore(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a marks" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>SubjectName</label>
                    <input type="text"  value={SubjectName} onChange={(e) => setSubjectName(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a subject" required/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={12} sm={12} md={12}>
                    <label>Name</label>
                    <input type="text"  value={Name} onChange={(e) => setName(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a name" required/>
                </Col>
            </Row>
            <br/>
            <Row className="button" >
                    <Col lg={12} sm={12} md={12}>
                    <a href='/examination' style={{ margin: "15px" }}>Prev</a>
                        <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
                        <a href='/book' style={{ margin: "15px" }}>Next</a>
                    </Col>
                </Row>
                
            <br/>
            </Form>
        </Container>
    </div>
    )
}
export default Record