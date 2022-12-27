import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style.scss'

const Register = ()=>{

  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

const handleChange = (e)=>{
  setInputs((prev)=>({...prev,[e.target.name]: e.target.value }))
}

const handleSubmit = async (e)=>{
  e.preventDefault()
  try{
   await axios.post("http://localhost:4000/auth/register",inputs)
   console.log({success:"User Registerd Successfully"});
   alert("welcome: "+ inputs.name)
   navigate('/login')
  }catch(error){
    console.log({error:"user Alredy Exist!"})

  }

}

console.log(inputs)

  return (
  <div className='auth'>
    <h1>Register</h1>
    <form>
      <input type='text' name='name' id='name' onChange={handleChange} placeholder='User Name' required />
      <input type='email' name='email' id='email' onChange={handleChange} placeholder='User Eamil' required />
      <input type='password' name='password' id='password' onChange={handleChange} placeholder='User Password' required />
      <button onClick={handleSubmit}>Register</button>
      <span>Do You Have An Account?
      <Link className='link' to='/login'>Login</Link>
      </span>
    </form>
  </div>)
  }
  export default Register