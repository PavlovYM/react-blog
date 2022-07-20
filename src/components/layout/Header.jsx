import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';

const Header = () => {

  return (
    <header className="app-header">
      <div className='container'>
        <div className='header-bar'>
          <Link className='header-logo' to="/">
            <img src={logo} alt="logo" width='40'/>
          </Link>
          <nav className='header-nav'>
            <NavLink  to='/'>Home</NavLink>
            <NavLink  to='blog'>Blog</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header