import axios from 'axios'
import React from 'react'
import { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import '../style.scss'
// ==============Lgin.jsx===============
const Login = ()=>{
const navigate = useNavigate()
const [inputs, setInputs] = useState({name:"", password:"" })
const {login} = useContext(AuthContext)
const handleChange = (e)=>{
  setInputs((prev)=>({...prev,[e.target.name]: e.target.value}))
}
// =============login.jsx===============
const handleSubmit = async (e)=>{
  e.preventDefault();
  try{
  //  await axios.post("http://localhost:4000/auth/login",inputs)
  await login(inputs);
  console.log(inputs) 
   navigate('/')
   alert("welcome "+ inputs.name)
  }catch(error){
    alert(error)
  }
}

  
  return (
  <div className='auth'>
    <h1>Login</h1>
    <form>
      <input type='text' name='name' id='name' onChange={handleChange} placeholder='User Name' required />
      <input type='password' name='password' id='password' onChange={handleChange} placeholder='User Password' required />
      <button onClick={handleSubmit}>Login</button>
      <span>Don't You Have An Account?
      <Link className='link' to='/register'>Register</Link>
      </span>
    </form>
  </div>)
  }
  export default Login