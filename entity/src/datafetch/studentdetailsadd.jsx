import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "../App.css"
// import React, { useEffect, useState } from "react";
// import axios from "axios"
// import { Button } from "react-bootstrap";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
// import ReactBootstrapSlider from 'react-bootstrap-slider';


const StudentDetailsadd = () => {

  let [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [RollNumber, setRollNumber] = useState("");
  const [data, setdata] = useState([])
  const [UserType, setUserType] = useState("")

  //axios

  let [students, setStudents] = useState([])
  let [count, setCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [originData, setoriginData] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("ASC");
  const [show, setShow] = useState(false);
  const [studentId, setStudentId] = useState(0);

  //edit code

  const [editShow, SetEditShow] = useState(false)
  const [rowData, setRowData] = useState([])
  const [rowId, setRowId] = useState(0)
  const hanldeEditClose = () => {
    SetEditShow(false)
    setName("")
  }

  function updateModel(item) {
    setRowData(item)
    setRowId(item._id)
    SetEditShow(true)
    setName(item.Name)
    setPhoneNumber(item.PhoneNumber)
    setAge(item.Age)
    setEmail(item.Email)
    setRollNumber(item.RollNumber)
  }

  const handleEditSubmit = async (e) => {
    // e.preventDefault();

    var regPhone = /^\d{10}$/;
    if (PhoneNumber == "" || !regPhone.test(PhoneNumber)) {
      alert("Please enter valid phone number.");
      PhoneNumber.focus();
      return false;
    }                                  // Javascript reGex for Phone Number validation.

    var regName = /\d+$/g;
    if (Name == "" || regName.test(Name)) {
      window.alert("Please enter your name properly.");
      Name.focus();
      return false;
    }                                   // Javascript reGex for Name validation

    else {
      axios.put("http://localhost:8081/STUDENT/" + rowId, ({
        Name, Age, Email, PhoneNumber, RollNumber
      })).then(response => {
        alert("Student details is updated")
        console.log(response)
      });
    }
    toast.success("user updated");
  }


  //delete code

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function showModel(id) {
    setShow(true);
    setStudentId(id);
  }

  function deleteData() {
    axios.delete('http://localhost:8081/STUDENT/' + studentId).then((res) => console.log(res))
    alert("record deleted")
    setShow(false);
    setCount(count + 1)
  }

  //sorting data

  useEffect(() => {
    axios.get("http://localhost:8081/STUDENT/get").then((res) => {
      const sorted = [...res.data.data].sort((a, b) =>
        a.Name.toLowerCase() > b.Name.toLowerCase() ? 1 : -1
      )
      setdata(sorted);
      setoriginData(sorted)
      setOrder("DSC")
      setStudents(sorted.slice(0, 5));

      let numbers = []
      for (let i = 1; i < Math.ceil(res.data.data.length / 5) + 1; i++) {
        numbers.push(i)
      }
      setPageNumbers(numbers)
    });

  }, []);

  //pagination

  const pageHandler = (pageNumber) => {
    setPageNumbers(pageNumbers)
    setStudents(data.slice((pageNumber * 5) - 5, pageNumber * 5));
  };

  //sorting data 

  const sorting = (col) => {
    let sorted = []
    if (order === "ASC") {
      sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setOrder("ASC")
    }
    setPageNumber(pageNumber);
    setStudents(sorted.slice(pageNumber * 5 - 5, pageNumber * 5));
  };

  const validation = (col, value) => {
    if (col === "Name") {
      setName(value)
      var regName = /\d+$/g;
      if (value == "" || regName.test(value)) {
        //  document.getElementById( "AddName" ).style.backgroundColor = '#81D4FA';
        document.getElementById("AddNameError").innerHTML = "Enter valid name";
        Name.focus();

      } else {
        document.getElementById("AddNameError").innerHTML = "";
      }
    } else if (col === "Age") {
      setAge(value)
      if (value == "") {
        //  document.getElementById( "AddName" ).style.backgroundColor = '#81D4FA';
        document.getElementById("AddAgeError").innerHTML = "Enter valid age";
        Age.focus();
      } else {
        document.getElementById("AddAgeError").innerHTML = "";
      }
    } else if (col === "Email") {
      setEmail(value)
      let users = [];
      axios.get("http://localhost:8081/STUDENT/get")
        .then(res => {
          users = res.data.data;
          const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
          if (!regEx.test(Email) || Email === "") {
            document.getElementById("AddEmailError").innerHTML = "Email is not valid";
          } else if (users.filter(u => u.Email === Email).length > 0) {
            document.getElementById("AddEmailError").innerHTML = "duplicate email id";
            // document.getElementById("").innerHTML="duplicate email id";
          } else {
            document.getElementById("AddEmailError").innerHTML = "";
          }
        })
    } else if (col === "PhoneNumber") {
      setPhoneNumber(value)
      var regPhone = /^\d{10}$/;
      if (PhoneNumber == "" || !regPhone.test(value)) {
        document.getElementById("AddPhoneNumberError").innerHTML = "Enter valid number";
        PhoneNumber.focus();
      } else {
        document.getElementById("AddPhoneNumberError").innerHTML = "";
      }
    } else if (col === "RollNumber") {
      setRollNumber(value)
      if (value == "") {
        //  document.getElementById( "AddName" ).style.backgroundColor = '#81D4FA';
        document.getElementById("AddRollNumberError").innerHTML = "Enter valid rollnumber";
        RollNumber.focus();
      } else {
        document.getElementById("AddRollNumberError").innerHTML = "";
      }
    }
  };

  //search bar

  const handleSearch = (col) => {
    setSearch(col);
    let sortedData = [...originData].filter((d) =>
      // d.Name.toString().includes(col)
      Object.keys(d).some(key => d[key].toString().search(col) !== -1)
      // d.Age.toString().includes(col)
    );
    let numbers = [];
    for (let i = 1; i < Math.ceil(sortedData.length / 5) + 1; i++) {
      numbers.push(i);
    }
    setPageNumbers(numbers);
    setdata(sortedData);
    setPageNumber(1);
    setStudents(sortedData.slice((1 * 5) - 5, 1 * 5))

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let users = [];

    axios.get("http://localhost:8081/STUDENT/get")
      .then(res => {
        users = res.data.data;


        var regPhone = /^\d{10}$/;
        if (PhoneNumber == "" || !regPhone.test(PhoneNumber)) {
          alert("Please enter valid phone number.");
          PhoneNumber.focus();
          return false;
        }                                  // Javascript reGex for Phone Number validation.

        var regName = /\d+$/g;
        if (Name == "" || regName.test(Name)) {
          window.alert("Please enter your name properly.");
          Name.focus();
          return false;
        }                                   // Javascript reGex for Name validation


        const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm
        if (users.filter(u => u.Studentmailid === Email).length > 0) {
          alert("duplicate email id");
        } else if (!regEx.test(Email) || Email === "") {
          alert("Email is not valid");
        } else if (users.filter(u => u.Email === Email).length > 0) {
          alert("Email alraedy registered");
        }                                   // Javascript reGex for Email validation

        else {
          axios.post("http://localhost:8081/STUDENT/add", ({
            Name, Age, Email, PhoneNumber, RollNumber
          })).then(response => {
            alert("Student details is added")
            console.log(response)
          });
        }

        const data = res.json();
        toast.success("user added");
        setUserType("");
        console.log(data);
        setdata((oldRecords) => [...oldRecords, data.user]);
      })
  }

  return (
    <div className="background">
      <div className="login">
      {/* <BootstrapSwitchButton checked={true} onstyle="outline-primary" offstyle="outline-secondary"/> */}
      {/* <ReactBootstrapSlider
    value={this.state.currentValue}
    change={this.changeValue}
    slideStop={this.changeValue}
    step={this.state.step}
    max={this.state.max}
    min={this.state.min}
    orientation="horizontal"
    reversed={true}
    disabled="disabled" /> */}
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
                <input type="text" onBlur={(e) => validation("Name", e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a name" required />
                <div className="text-danger" id="AddNameError"></div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={12} sm={12} md={12}>
                <label className>Age</label>
                <input type="text" onBlur={(e) => validation("Age", e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a age" required />
                <div className="text-danger" id="AddAgeError"></div>

              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={12} sm={12} md={12}>
                <label>Email</label>
                <input type="text" onBlur={(e) => validation("Email", e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a studentmailid" required />
                <div className="text-danger" id="AddEmailError"></div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={12} sm={12} md={12}>
                <label>PhoneNumber</label>
                <input type="tel" onBlur={(e) => validation("PhoneNumber", e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a phonenumber" required />
                <div className="text-danger" id="AddPhoneNumberError"></div>

              </Col>
            </Row>
            <br />
            <Row>
              <Col lg={12} sm={12} md={12}>
                <label>RollNumber</label>
                <input type="text" onBlur={(e) => validation("RollNumber", e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a rollnumber" required />
                <div className="text-danger" id="AddRollNumberError"></div>
              </Col>
            </Row>
            <br />
            <Row className="button" >
              <Col lg={12} sm={12} md={12}>
                <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
              </Col>
            </Row>
          </Form>
        </Container>

      </div>
      {/* //axios */}
      <div>
        <div>
          <center>
            <h4>Enter User</h4>
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <br />

          </center>
        </div>
        <br />

        {(students || []).length > 0 ?
          <table className="table table-bordered border-primary table-dark" border="1">
            <thead className="table-dark">
              <tr>
                <th scope="col" onClick={() => sorting("_id")}>id</th>
                <th scope="col" onClick={() => sorting("Name")}>Name</th>
                <th scope="col" onClick={() => sorting("Age")}>Age</th>
                <th scope="col" onClick={() => sorting("Email")}>Email</th>
                <th scope="col" onClick={() => sorting("PhoneNumber")}>PhoneNumber</th>
                <th scope="col" onClick={() => sorting("RollNumber")}>RollNumber</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody >
              {students.map((t, index) => {
                // <div>{t}</div>
                return (
                  // <tr key={index}>
                  <tr>
                    <td>{t._id}</td>
                    <td>{t.Name}</td>
                    <td>{t.Age}</td>
                    <td>{t.Email}</td>
                    <td>{t.PhoneNumber}</td>
                    <td>{t.RollNumber}</td>
                    <td>
                      <Button variant="warning"
                        // onClick={() => getDatabyId(t._id)}
                        className="margin" ><AiFillEye />
                      </Button>
                      <Button variant="success"
                        onClick={() => updateModel(t)}
                        className="margin" ><BsFillPenFill /></Button>

                      <Button variant="primary" onClick={() => showModel(t._id)}>
                        <AiOutlineDelete />
                      </Button>
                    </td>
                  </tr>
                )
              })}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You sure to want to delete the record</Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={() => deleteData()}>
                    Delete
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>


              {/* Modal for Edit employee record */}
              <div className='model-box-view'>
                {/* <div> */}
                <Modal
                  show={editShow}
                  onHide={hanldeEditClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container style={{ textAlign: "center", marginTop: "20px" }}>
                      <Form onSubmit={handleEditSubmit}>
                        <Row>
                          <Col lg={12} sm={12} md={12}>
                            <label>Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a name" required defaultValue={rowData.Name} />

                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={12} sm={12} md={12}>
                            <label className>Age</label>
                            <input type="text" onChange={(e) => setAge(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a age" required defaultValue={rowData.Age} />
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={12} sm={12} md={12}>
                            <label>Email</label>
                            <span className="mx-3">{rowData.Email}</span>
                            {/* <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a studentmailid" required /> */}
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={12} sm={12} md={12}>
                            <label>PhoneNumber</label>
                            <input type="tel" defaultValue={rowData.PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a phonenumber" required />
                          </Col>
                        </Row>
                        <br />
                        <Row>
                          <Col lg={12} sm={12} md={12}>
                            <label>RollNumber</label>
                            <input type="text" defaultValue={rowData.RollNumber} onChange={(e) => setRollNumber(e.target.value)} style={{ marginLeft: "20px" }} placeholder="enter a rollnumber" required />
                          </Col>
                        </Row>
                        <br />
                        <Row className="button" >
                          <Col lg={12} sm={12} md={12}>
                            <Button type="submit" style={{ margin: "15px" }}>Submit</Button>
                          </Col>
                        </Row>
                      </Form>
                    </Container>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </tbody>
          </table>
          : <div> <h1>No Data</h1> </div>

        }

        <div>
          <center>
            {pageNumbers.map(page =>
              <div className="btn btn-primary" onClick={() => pageHandler(page)}>{page}</div>
            )}        </center>
        </div>
      </div>
    </div>



  )
};

export default StudentDetailsadd;
