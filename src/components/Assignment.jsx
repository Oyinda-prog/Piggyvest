import React, { useState } from 'react'


const Assignment = () => {
const [first, setfirst] = useState(0)
const [firstname, setfirstname] = useState("")
const [lastname, setlastname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [userArray, setuserArray] = useState([])
const add=()=>{
    // setfirst(first+1)
    // console.log(firstname,lastname, email,password);
    let userDetails={firstname, lastname, email, password}
    // console.log(userDetails);
    setuserArray(userDetails)
    setuserArray([...userArray,userDetails])
    console.log(userArray);
}

     const rem = (index) => { 
        const updatedArray = userArray.filter((_, i) => i !== index);
        setuserArray(updatedArray);
      };
  return (
    <>
    <div>Sign Up Here</div>  
      <div className='container-fluid mx-auto '>
        <div className='form-group'>
      <input type="text" className='form-control' onChange={(e)=>setfirstname(e.target.value)} />
      <label htmlFor="">First Name</label>
        </div>
        <div className='form-group'>
      <input type="text" className='form-control' onChange={(e)=>setlastname(e.target.value)} />
      <label htmlFor="">Last Name</label>
        </div>
        <div className='form-group'>
      <input type="text" className='form-control' onChange={(e)=>setemail(e.target.value)} />
      <label htmlFor="">Email</label>
        </div>
        <div className='form-group'>
      <input type="text" className='form-control' onChange={(e)=>setpassword(e.target.value)} />
      <label htmlFor="">Password</label>
        </div>
      <button onClick={add}>add</button>
      <h2>{first}</h2>
      </div>
      <table className='table table-bordered table-striped'>
        <tr>
            <th>S/N</th>
            <th>fIRST NAME</th>
            <th>LAST NAME</th>
            <th>PASSWORD</th>
            <th>EMAIL</th>
            <th>ACTIONS</th>
        </tr>
      {
          userArray.map((user,index)=>(
             <tr key={index}>
                <td>{index+1}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                <button className='btn btn-success fw-bold' onClick={() => rem(index)}>Delete</button>

                    <button className='btn btn-primary fw-bold'>Edit</button>
                </td>
             </tr>
          ))
      }
      </table>
    </>
  )
}

export default Assignment