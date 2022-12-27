import React, { useContext, useEffect, useState } from 'react'
import editImg from '../img/edit.png'
import deleteImg from '../img/delete.png'
import Menu from '../pages/Menu'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import moment from 'moment'
import * as DOMPurify from 'dompurify';


export default function Single() {
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  //  to get psot id we sue location method
  const location = useLocation()
  // console.log(location)
  const postId = location.pathname.split('/')[2]
  // console.log(postId)
const {currentUser} = useContext(AuthContext)

// const getText = (html) =>{
//   const doc = new DOMParser().parseFromString(html, "text/html")
//   return doc.body.textContent
// }
// console.log(currentUser)
 useEffect(()=>{
  const fetchPost = async ()=>{
     try{
      const res =  await axios.get(`http://localhost:4000/posts/${postId}`)
      // console.log(res)
      setPost(res.data)
     }catch(error){
       console.log(error)
     }
  }
     fetchPost()
 },[postId])
//  console.log(post)
//  ==========To handle Delete function=========
const handleDelete = async()=>{
  const postId = location.pathname.split('/')[2]
 
 try{
   await axios.delete(`http://localhost:4000/posts/${postId}`)
   alert('Post Deleted!')
   navigate('/')
 }catch(error){
  console.log(error)
 }

}

  return (
    <div className='single'>
    <div className='content'>
      <img className='postImage' src={`../upload/${post.img}`} alt='' />
      <div className='user'>
      <img className='userImage' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydBphsLdspvTPZxL3tEqhwXorxUi55ygUuw&usqp=CAU"  alt='user name'/>
        <div className='info'>
        <strong>{post.name}</strong> <span>{moment(post.date).fromNow()}</span>
        <span><strong> #{ post.cat}</strong></span>
        </div>
        
        {post.user_id === currentUser?.id && (
       
       <div className='edit'>
          <Link to="/write?edit=2" state={post}><img src={editImg} alt="edit Icon" /></Link>
          <img src={deleteImg} alt="delete Icon" onClick={handleDelete}/>
        </div>
      
        )}
      </div>
      <h1>{post.title} </h1>
      {/* {getText(post.description)} */}
      <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.description)}}></p>
     
    </div>
{/* =======adding Menu Comcleanponents========= */}
    <Menu cat={post.cat}/>
    </div>
  
  )
}
