import logo from './logo.svg';
import './App.css';

import { Routes ,Route, BrowserRouter, Outlet, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from "./pages/Home"; 
import Contact from "./pages/Contact"; 
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Write from './pages/Write';
import Single from './pages/Single';
import Register from './pages/Register';
import Login from './pages/Login';
import './style.scss'

const Layout = ()=>{
  return(<div>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </div>)
}

const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children: [
      {path: '/', 
       element: <Home/>},
      {
        path: "/post/:id",
        element: <Single/>
      },
      {
        path: '/write',
        element: <Write/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }

    ],
  },
  {
    path: "/register",
   element: <Register/>
  },
  {path: "/login",
element: <Login/>}
])

const  App = ()=> {
  return(
    <div className='app'>
    <div className='container'>
      <RouterProvider router={router}/>
    </div>
    </div>

         );

}
export default App;