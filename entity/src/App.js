import './App.css';
import Address from './components/address';
import Book from './components/book';
import Examination from './components/examination';
import Record from './components/record';
// import StudentDetails from './datafetch/studentdetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Naavbar from './components/navbar';
import Login from './components/login';
// import { Adddetails } from './datafetch/adddetails';
import { AxiosAPI } from './datafetch/axios';
// import { Adddetails } from './datafetch/adddetails';
import Home from './components/Home';
// import Studentdetails from './datafetch/studentdetails';
import StudentDetails from './components/studentdetailsadd';
import StudentDetailsadd from './datafetch/studentdetailsadd';
import PopupGfg from './components/popup';
import Submit from './components/popup1';
import Pagination from './components/pagination';
import Pop from './components/pop';
import Employee from './components/employee';
import Example from './components/pop';
import SignupForm from './components/testing';
import LoginForm from './components/testing2';
// import { Component } from './components/background';
// import StudentDetails from './datafetch/studentdetailsadd';



function App() {
  return (
    <Router>
    <div>
        {/* <Naavbar/>  
      <Routes>
        <Route exact path="/"  element={<Login/>}/> 
        <Route path="/student" element = {<StudentDetails/>}/>
        <Route path='/examination' element={<Examination/>} />
        <Route path='/address' element={<Address/>} />
        <Route path='/record' element={<Record/>} />
        <Route path='/book' element={<Book/>} />
       

       </Routes>  */}

       <StudentDetailsadd/>
       <br/>
       {/* <SignupForm/> */}
       {/* <LoginForm/> */}
       {/* <AxiosAPI/> */}
       {/* <Component/> */}
      {/* <PopupGfg/> */}
      {/* <Submit/> */}
      {/* <App/> */}
      {/* <Pagination/> */}
      {/* <Pop/> */}
      {/* <Employee/> */}
      {/* <Pop/> */}
       {/* <Example/> */}
    </div>
     </Router>
      );
}

export default App;
