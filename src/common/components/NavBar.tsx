import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div className="navbar">
      <Link to="/">Home</Link>
      {' '}
      <Link to="/hello">Hello</Link>
      {' '}
      <Link to="/counter">Counter</Link>
      {' '}
      <Link to="/blog">Blog</Link>
    </div>
  </div>
)

export default NavBar