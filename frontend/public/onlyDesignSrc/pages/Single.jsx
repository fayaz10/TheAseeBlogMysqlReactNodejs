// ========Single.jsx======pages==========
import React, { useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link} from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
        <div className="user">
        <img src={'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
          <div className="info">
            <span>User Name</span>
            <p>Posted 2 days ago</p>
          </div>
            <div className="edit">
              <Link to={`#`}><img src={Edit} alt="" /></Link>
              <img src={Delete} alt="" />
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         sit debitis deserunt repellendus numquam ab vel perspiciatis 
         </p>
     </div>
  // ==========import Menu Class =========
      <Menu/>
    </div>
  );
};

export default Single;
