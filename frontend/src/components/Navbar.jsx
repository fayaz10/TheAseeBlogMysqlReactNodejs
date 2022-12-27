import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/aseeLogo.jpg'
import { AuthContext } from '../context/AuthContext'



export default function Navbar() {

 

  const {currentUser,logout} = useContext(AuthContext)
  return (
    <div className='navbar'>
    <div className='container'>
      <div className='logo'> <Link to='/'> <img src={logo} alt="The Asee Blog"/></Link> </div>
      <div className='links'>
        <Link className='link'  to='/?cat=art'><h6>Art</h6></Link>
        <Link className='link'  to='/?cat=tech'><h6>Technology</h6></Link>
        <Link className='link'  to='/?cat=sport'><h6>sport</h6></Link>
        <Link className='link'  to='/?cat=health'><h6>Health</h6></Link>
        <Link className='link'  to='/?cat=beauty'><h6>Beauty</h6></Link>
        <Link className='link'  to='/?cat=music'><h6>Music</h6></Link>
        {currentUser ? (<div>
          <span><strong>{currentUser.name }</strong></span>
          <span onClick={logout}> Logout</span>
          
        </div>) : (<>
          <Link className='link'  to='/login'>Login</Link>
        <Link className='link'  to='/register'>Register</Link>
        </>) }
        <span className='write'><Link className='link' to='/write'>Write</Link></span>
        
       
        

      </div>
    </div>
    </div>
  )
}
