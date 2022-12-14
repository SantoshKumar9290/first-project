import React, { useState } from "react";
import { Container, Col, Row, Card,Button,Form } from "react-bootstrap";
import axios from "axios";

const Book = () => {
    const [BookName, setBookName] = useState("");
    const [Author, setAuthor] = useState("");
    const [Price, setPrice] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        // let users=[];
        await axios.post("http://localhost:8081/book/add", ({
            BookName,Author,Price
        })).then(response => {
            alert("Address is added")
            console.log(response)
        });

    }


    return (
        <div className="login">
            <Container>
            <Card className="card" style={{ textAlign: "center" }} >
                <h4 style={{ marginTop: "20px", fontSize: "26px" }} className="h4">
                    Book
                </h4>
            </Card>
            <Container style={{ textAlign: "center"  ,marginTop:"20px"}} >
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <label>BookName</label>
                        <input type="text" value={BookName} onChange={(e) => setBookName(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a name" required />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <label>Author</label>
                        <input type="text" value={Author} onChange={(e) => setAuthor(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a author" required />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={12} sm={12} md={12}>
                        <label>Price</label>
                        <input type="text" value={Price} onChange={(e) => setPrice(e.target.value)} style={{marginLeft:"20px"}} placeholder="enter a price" required />
                    </Col>
                </Row>
                <br/>
                <Row className="button" >
                <Col lg={12} sm={12} md={12}>
                    <a href='/record' style={{ margin: "15px" }}>Prev</a>
                        <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
                        <a href='/' style={{ margin: "15px" }}>Login</a>
                        
                    </Col>
                </Row>
             
                </Form>
            </Container>
            </Container>
        </div>
      
    )
}
export default Book;