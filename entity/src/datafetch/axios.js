import React, { useEffect, useState } from "react";
import axios from "axios"
import { Button } from "react-bootstrap";
import { BsFillPenFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Modal from 'react-bootstrap/Modal';



export const AxiosAPI = () => {
    let [students, setStudents] = useState([])
    let [count, setCount] = useState(0)
    const [pageNumber, setPageNumber] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);
    const [data, setdata] = useState([])
    const [originData, setoriginData] = useState([]);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("ASC");
    const [show, setShow] = useState(false);
    const [studentId, setStudentId] = useState(0);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function showModel(id) {
        setShow(true);
        setStudentId(id);
    }

    function updateModel(id) {
        axios.get("http://localhost:8081/STUDENT/get").then((res) => {
            console.log(res.data.data);
        })
    }


    function deleteData() {
        axios.delete('http://localhost:8081/STUDENT/' + studentId).then((res) => console.log(res))
        alert("record deleted")
        setShow(false);
        setCount(count + 1)
    }

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

    const pageHandler = (pageNumber) => {
        setPageNumbers(pageNumbers)
        setStudents(data.slice((pageNumber * 5) - 5, pageNumber * 5));
    };

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

    return (
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
                <table className="table table-bordered border-primary" border="1">
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
                        <tr>
                            <th scope="col" onClick={() => sorting("_id")}>id</th>
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
                                            onClick={() => updateModel(t._id)}
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
    )
}


