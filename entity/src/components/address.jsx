import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Address = () => {
    const [Name, setName] = useState("");
    const [State, setSate] = useState("");
    const [City, setCity] = useState("");
    const [Street, setStreet] = useState("");
    const [PinCode, setPinCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // let users=[];
        await axios.post("http://localhost:8081/address/add", ({
            Name, State, City, Street, PinCode
        })).then(response => {
            alert("Address is added")
            console.log(response)
            
        });

    }


    return (
        <div className="login">
            <Card className="card" style={{ textAlign: "center" }} >
                <h4 style={{ marginTop: "20px", fontSize: "26px" }} className="h4">
                    Address
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
                            <label>State</label>
                            <input type="text" value={State} onChange={(e) => setSate(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a state" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>City</label>
                            <input type="text" value={City} onChange={(e) => setCity(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a city" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>Street</label>
                            <input type="text" value={Street} onChange={(e) => setStreet(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a street" required />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col lg={12} sm={12} md={12}>
                            <label>Pincode</label>
                            <input type="text" value={PinCode} onChange={(e) => setPinCode(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a pincode" required />
                        </Col>
                    </Row>
                    <br />
                    
                    <Row className="button" >
                        <Col lg={12} sm={12} md={12}>
                        <a href='/student' style={{ margin: "15px" }} >Prev</a>
                        <Button type="submit" style={{ margin: "15px" }} >Submit</Button>
                        <a href='/examination' style={{ margin: "15px" }}>Next</a>
                   

                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12} sm={12} md={12}>
                    
                    <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        {/* </Form.Group> */}
        </Col>
                    </Row>

                    
                   
                    {/* <div>  <a href='/examination'>Next</a></div>
                    <div><a href='/'>Prev</a></div> */}

                </Form>
            </Container>
        </div>
    )
}
export default Address