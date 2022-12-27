import React from 'react'
import {Link, useLocation} from 'react-router-dom'
export default function Post({posts}) {

    const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }
  return (
    <div className='home'>
    <div className='posts'>
    {posts.map((post)=>(
      <div className='post' key={post.id}>
        <div className='img'><img src={`../upload/${post.img}`} alt='#'/> </div>
        <div className='content'>
        <Link className='link' to={`/post/${post.id}`} >
          <h1>{post.title}</h1>
          </Link>
          {getText(post.description)}
          <Link to={`/post/${post.id}`} >
          <button>Read More...</button>
          </Link>
        </div>
      </div>
      ))}
    </div>
    </div>
  )
}
