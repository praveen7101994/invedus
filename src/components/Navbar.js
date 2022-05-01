import React from 'react'
import { Link } from "react-router-dom";
export default function () {
  return (
    <div>
        <nav className='NavBar'>
            <Link to="/">Contact List</Link> |{" "}
            <Link to="/add-contact">Add Contact</Link>
        </nav>
    </div>
  )
}
