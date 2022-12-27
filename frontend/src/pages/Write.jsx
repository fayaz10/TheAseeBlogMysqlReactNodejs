import axios, { AxiosError } from 'axios';
import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AuthContext } from '../context/AuthContext'
import moment from 'moment'
import { ErrorResponse } from '@remix-run/router';
import { useNavigate, useLocation} from 'react-router-dom';
export default function Write() {
  const navigate = useNavigate()

  const state = useLocation().state;

  const [value, setValue] = useState( state?.description || '')
  const [title, setTitle] = useState(state?.title|| "")
  const [cat, setCat] = useState(state?.cat ||'')
  const {currentUser} = useContext(AuthContext)
  const [user_id, setUser_id] = useState(currentUser?.id)
  // console.log(user_id)
// ==========Upload image==============
  const [file, setFile] = useState(null)
  const upload = async()=>{
    try{
      const formData = new FormData();
      formData.append('file', file)
      const res = await axios.post(`http://localhost:4000/upload`, formData)
      return res.data;

    }catch(error){
      console.log(ErrorResponse)
    }
  }

   // =========handle submit foem==============
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const imgUrl = await upload()
    try{
      state ? await axios.patch(`http://localhost:4000/posts/${state.id}`,{title,description:value,cat,img:file? imgUrl:""}):
      await axios.post(`http://localhost:4000/posts/`,{ title, description:value,  cat, img:file? imgUrl:"", user_id, date: moment(Date.now())})
      navigate('/') 
    }catch(error){
      console.log(error)
    }
  }
  return (<>
    <div className='userWrite'>
     <div className='content'>
     <div> {file && <img className='tepImg2' src={URL.createObjectURL(file)} alt={file} />}</div>
      <input type='text' name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}}  placeholder="Write You Post's Title..."/>
      <div className='editorContainer'>
      <ReactQuill className='editor' theme="snow" placeholder="Write You Post's Description..." value={value} onChange={setValue} />
      </div>
     </div>
   
    <div className='writeMenu'>
      <div className='item'>
        <h5>Publish Post</h5>
        <input  type='file' name='file' 
        onChange={(e)=>{setFile(e.target.files[0])}} />
        {/* <lable className='file' htmlFor='file'>Upload File</lable> */}
      
       
      </div>
   
    <div className='category'>
      <h5>Categories</h5>
      <input type='radio' name="cat" value='art'
      checked={cat === "art"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Art</lable><br/>
       <input type='radio' name="cat" value='tech'
       checked={cat === "tech"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Technology</lable><br/>
       <input type='radio' name="cat" value='sport'
       checked={cat === "sport"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Sport</lable><br/>
       <input type='radio' name="cat" value='health'
       checked={cat === "health"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Health</lable><br/>
       <input type='radio' name="cat" value='beauty'
       checked={cat === "beauty"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Beauty</lable><br/>
       <input type='radio' name="cat" value='music'
       checked={cat === "music"}
      onChange={(e)=>{setCat(e.target.value)}} /> 
       <lable>Music</lable><br/>
  

    </div>
    <button onClick={handleSubmit}> Publish</button>
  </div>
  </div>
    </> )
}
