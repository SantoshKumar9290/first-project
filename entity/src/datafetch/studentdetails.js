export const Studentdetails = ({ Student}) => {
    console.log('student is', Student)
    return (
     < tr>
      <td>{Student._id}</td>
      <td>{Student.Name}</td>
      <td>{Student.Age}</td>
      <td>{Student.Email}</td>
      <td>{Student.PhoneNumber}</td>
      <td>{Student.RollNumber}</td>
     </tr >
    )  
   }

  