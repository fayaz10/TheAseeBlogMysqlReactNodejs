import React from 'react'

export default function Skelaton() {
    const count=2
    const PostSkelaton = ()=>(
    <div className='skhome'>
    <div className='skposts'>
      <div className='skpost'>
        <div className='skimg'> </div>
        <div className='skcontent'>
          <span className='sktitle'></span>
          <span className='sktitle2'></span><br/>
          <span className='skdesc'></span>
          <span className='skdesc'></span>
          <span className='skdescx'></span>
          <span className='skdescy'></span>
          <span className='skdescz'></span>
        </div>
      </div>
    </div>
    </div>
    )
  return (Array(count).fill( <PostSkelaton/>))
}
