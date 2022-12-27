import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import * as DOMPurify from 'dompurify';
import Post from './Post';
import Skelaton from '../components/Skelaton';
export default function Home() {


  const cat = useLocation().search
  const [posts, setPosts] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect( ()=>{
    const fetchData = async ()=>{
    try{
      const res = await axios.get(`http://localhost:4000/posts${cat}`)
      setTimeout(()=>{
      setPosts(res.data)
      setIsloading(false)
    },1000)

    }catch(error){ alert(error) 
      setIsloading(false)
     }
    }
    fetchData()
  },[cat])


  return (
    <div> {isLoading ? <Skelaton/> : <Post posts={posts}/>}</div>
  )
}
