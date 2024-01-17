import React from 'react'
import Logo from '../assets/logo.jpg'
import "./header.css"

const Header = () => {
  return (
    <div>
      <img className="logo" src={Logo} alt="" />
    </div>
  )
}

export default Header
