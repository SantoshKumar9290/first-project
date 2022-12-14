import React, { useState } from "react";
import { Button} from "react-bootstrap"
import axios from "axios";
import {Navigate } from "react-router-dom";
// import validator from 'validator'



const Login = () => {
    

    const [Email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault();
        // let users=[]
    
    

    const login = () => {
        // axios.post("http://localhost:8081/student/add", ({
        //     Name, Age, Email, PhoneNumber, RollNumber
        // })).then(response => {
        //     alert("Student details is added")
        //     console.log(response)
        // });
        const email=axios.post("http://localhost:8081/STUDENT/login", {Email})
            .then(response => {
                console.log(response)
                if (!response.data.status) {
                alert("email not found")    
                }else{
                    console.log("logged in  ")
                    Navigate('/studentdetails', {replace:true, email: Email})
                    // history.push("/studentdetails");
                }
                // if (validator.isEmail(email)) {
                //     setEmailError('Valid Email :)')
                //   } else {
                //     setEmailError('Enter valid Email!')
                //   }
            
            
            
            });
        }
    }

    


    return (
        <div className="login" style={{ textAlign: "center" }} onSubmit={handleSubmit}>
            {/* <Form onSubmit={handleSubmit}> */}

            <h1 >Login</h1>
            <label >Email</label>
            <input type="text" style={{ marginLeft: "20px" }} value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email'></input>
            {/* <input type="password" name="Password" value={user.Password} onChange={handleChange} placeholder='Enter your Password'></input> */}
            {/* <a href='/student' style={{ margin: "15px" }} ></a> */}
            <Button className='button' href='/student' onClick={Login}>Login</Button>
            <div> Fill the form <a href='/student'>Student</a></div>
            {/* </Form> */}

        </div>
    )
    }

export default Login