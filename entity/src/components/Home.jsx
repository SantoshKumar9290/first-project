import React, { useState, useEffect, useContext } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        axios
            .get('http://localhost:8081/student')
            .then((res) => setData(res.data));
    }, []);
    const deleteData = (_id) => {
        axios
            .delete(`http://localhost:8081/student/${_id}`)
            .then((res) => toast.info("User Deleted"));
    };
    const updateData = (_id) => {
        navigate(`/update/${_id}`);
    };
    const getDatabyId = (_id) => {
        navigate(`/view/${_id}`);
    };
    return (
        <div>
            <Container className="marginDown">
                {(data.data || []).length > 0 ? (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>PhoneNumber</th>
                                <th>RollNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.data.map((t) => {
                                return (
                                    <tr key={t}>
                                        <td>{t._id}</td>
                                        <td>{t.Name}</td>
                                        <td>{t.Age}</td>
                                        <td>{t.Email}</td>
                                        <td>{t.PhoneNumber}</td>
                                        <td>{t.RollNumber}</td>

                                        <td>
                                            <Button
                                                variant="warning"
                                                onClick={() => getDatabyId(t._id)}
                                                className="margin"
                                            >
                                                <AiFillEye />
                                            </Button>
                                            <Button
                                                variant="success"
                                                onClick={() => updateData(t._id)}
                                                className="margin"
                                            >
                                                <BsPencilFill />
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => deleteData(t._id)}
                                                className="margin"
                                            >
                                                <MdDeleteOutline />
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                ) : (
                    <div>
                        <h1>No Data Found</h1>
                    </div>
                )}
            </Container>
        </div>
    );
};
export default Home;
