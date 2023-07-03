import React from "react";
import { useState } from "react";

const Newfolder = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [studentArr, setstudentArr] = useState([])
  const submitDetails = () => {
    let studentDetail = {firstname, lastname, email, password}
    console.log(studentDetail);
    setstudentArr([...studentArr, studentDetail])
    console.log(studentArr);

  };
  // let userDetails=[]
  const change = () => {
    // console.log("I will prosper");
    // console.log(event.target.value);
    // console.log(firstname, lastname, email, password);
    let details={firstname, lastname,email,password}
    console.log(details);
    setstudentArr(details)
    console.log(studentArr);
   setfirstname("")
   setlastname("")
   setemail("")
   setpassword("")

  //   console.log(details);
  //  userDetails.push(details)
  //  console.log(userDetails[0].firstname);

  };

  return (
    <>
      <div className="container-fluid col-lg-8 mt-lg-5 mt-md-3 mt-1 shadow-sm py-3 mx-auto">
        <h2 className="text-center text-decoration-underline text-primary">
          Sign Up Page
        </h2>
        {/* <div className='form-floating my-3'>
    <input type="text" className='form-control w-50 my-2' onChange={(e)=>console.log(e.target.value)}/>
    <label htmlFor="FirstName">First Name</label>
    </div> */}
        <div>
          <input
            type="text"
            className="form-control w-50 my-2"
            onChange={(e)=>setfirstname(e.target.value)} value={firstname}
       />
          <label htmlFor="FirstName">First Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control w-50 my-2"
            onChange={(e)=>setlastname(e.target.value)}
            value={lastname} />
          <label htmlFor="FirstName">Last Name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control w-50 my-2"
            onChange={(e)=>setemail(e.target.value)}
         value={email} />
          <label htmlFor="FirstName">Email</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            className="form-control w-50 my-2"
            onChange={(e)=>setpassword(e.target.value)}
         value={password} />
          <label htmlFor="FirstName">Password</label>
        </div>

        <button className="btn btn-success" onClick={submitDetails}>
          Sign Up
        </button>
        {/* <button className="btn btn-warning" onClick={change}>
          Sign Up
        </button> */}
        {/* <h2>{firstname}</h2>
        <h2>{lastname}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2> */}
      </div>
      <table className="table   table-hover table-bordered">
        <tr>
<th>S/N</th>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
<td>Actions</td>
        </tr>
        {
          studentArr.map((item,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td>
                <button  className="btn btn-dark">Delete</button>
                <button  className="btn btn-dark">Edit</button>
              </td>
            </tr>
          ))
        }
      </table>
      {/* <h2>{userDetails}</h2> */}
    </>
  );
};

export default Newfolder;
