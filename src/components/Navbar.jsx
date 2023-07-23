import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div className="bg-gray-900 flex flex-row  sticky justify-between items-center p-[10px] top-0">
      <Link to="/" className="align-middle flex">
        <img src={logo} alt="logo" className="h-[45px]"/>
      </Link>
      <SearchBar/>
    </div>
  )
}

export default Navbar
