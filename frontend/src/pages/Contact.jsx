import { wait } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')      
    const [lastName, setLastName] = useState('')      
    const [phone, setPhone] = useState('')      
    const [docName, setDocName] = useState('')      
    const [sex, setSex] = useState('')      
    const [age, setAge] = useState('')      
    const [email, setEmail] = useState('')      
    const [message, setMessage] = useState('') 
    const [status, setStatus] = useState('Submit')     
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setStatus('Sending...')
            let res = await axios.post("http://localhost:4000/contactEmail",{
                  name:name,
                  lastName:lastName,
                  email:email,
                  message:message,
                  phone: phone,
                  age: age,
                  docName: docName,
                  sex: sex,

                }) 
                
            window.location.reload()
        }catch(error){
            console.log(error)
        }
        // alert('form submitted')
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='name'  id='name' name='name' onChange={(e)=>setName(e.target.value)} required/>
    <input type="text" placeholder='Lastname' id='lastName' name='lastName' onChange={(e)=>setLastName(e.target.value)} required/>
    <input type="text" placeholder='phone' id='phone' name='phone' onChange={(e)=>setPhone(e.target.value)} required/>
    <input type="text" placeholder='Age'  id='age' name='age' onChange={(e)=>setAge(e.target.value)} required/>
    <select name="sex" placeholder='Sex' id="sex"  onChange={(e)=>setSex(e.target.value)} required>
      <option value="male">Male</option>
      <option value="femail">Fmail</option>
    </select>

    <select name="docName" placeholder='Doc Name' id="docName"  onChange={(e)=>setDocName(e.target.value)} required>
    <option value="">choose Doc</option>
    <option value="داخله">داخله</option>
      <option value="جرحی">جرحی</option>
      <option value="اطفال">اطفال</option>
      <option value="نسایی ولادی">نسایی ولادی</option>
  </select>
    <input type='email'  placeholder='Email'id='email' name='email' onChange={(e)=>setEmail(e.target.value)} required/>
        <textarea name='message' placeholder='Your message' id='message' onChange={(e)=>setMessage(e.target.value)} required/>
        <button type='submit'>{status}</button>
    </form>
    </div>
  )
}
