import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Signup = () => {


const [credentials, setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

const handelSubmit = async(e) => {
  e.preventDefault();
  const response = fetch("http://localhost:5000/api/createuser",{
  method:'POST',
  header:{
    'Content-Type' : "application/json"
  },
  body:JSON.stringify(credentials)
  })
} 

const onChange = (e) =>{
  setcredentials=({...credentials,[e.target.name]:e.target.value})
}

  return (
    <>
    <div className="container">
      <form onSubmit={handelSubmit}>

      <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    name='email' value={credentials.email}onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='password' value={credentials.password}onChange={onChange}/>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='geolocation' value={credentials.geolocation}onChange={onChange}/>
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
</form>
</div>
    </>
  )
}

export default Signup