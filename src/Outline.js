import React from 'react'
import {Outlet,Link} from "react-router-dom"
export default function Outline() {
  return (
    <div>
        <nav>
            <ul className="navbar"> 
                <li><Link to="/ ">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  );
}
